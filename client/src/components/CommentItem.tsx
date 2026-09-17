import { useState } from 'react';
import type { NewItemI } from '../types/newsTypes';
import { useSubCommentsTree } from '../hooks/useSubCommentsTree';
import { SubCommentItem } from './UI/SubCommentItem';
import { UserLink } from './UserLink';
import { SafeHtml } from './UI/SafeHtml';

interface CommentItemProps {
  comment: NewItemI;
}

export const CommentItem = ({ comment }: CommentItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { data: repliesTree, isLoading } = useSubCommentsTree(
    comment.kids,
    isExpanded,
  );

  const formattedTime = comment.time
    ? new Date(comment.time * 1000).toLocaleDateString()
    : '';
  const repliesCount = comment.kids?.length || 0;
  const hasReplies = repliesCount > 0;

  return (
    <div className="w-full flex flex-col gap-3 p-5 bg-white border border-gray-100 rounded-xl shadow-sm">
      <div className="w-full flex flex-col">
        <div className="flex items-center gap-2 mb-2.5 text-xs text-gray-500">
          <UserLink username={comment.by} />
          <span>•</span>
          <span>{formattedTime}</span>
        </div>

        {comment.text && <SafeHtml html={comment.text} />}

        {hasReplies ? (
          <div className="mt-4 pt-3 border-t border-gray-50 flex items-center gap-3">
            <button
              onClick={() => setIsExpanded((prev) => !prev)}
              className="flex items-center gap-1.5 text-xs font-bold hover:text-primary-glow duration-200 bg-gray-50 text-gray-700 border border-gray-200/60 px-3 py-1.5 rounded-lg cursor-pointer"
            >
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className={`w-3.5 h-3.5 text-gray-500 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
              <span>
                {isExpanded ? 'Hide replies' : `Show threads (${repliesCount})`}
              </span>
            </button>
          </div>
        ) : (
          <div className="mt-4 pt-3 border-t border-gray-50 flex items-center gap-3">
            <span className="flex items-center text-xs font-semibold bg-gray-50/50 text-gray-400 px-3 py-1.5 rounded-lg select-none cursor-default">
              No replies yet.
            </span>
          </div>
        )}
      </div>

      {hasReplies && isExpanded && (
        <div className="pl-4 border-l-2 border-gray-200/80 flex flex-col gap-3 mt-4">
          {isLoading && (
            <div className="w-full h-16 bg-gray-50/50 border border-dashed border-gray-200 rounded-2xl animate-pulse flex items-center justify-center">
              <span className="text-xs font-semibold text-gray-400">
                Loading replies...
              </span>
            </div>
          )}

          {!isLoading && repliesTree && (
            <div className="flex flex-col gap-3">
              {repliesTree.map((reply) => (
                <SubCommentItem key={reply.id} node={reply} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
