import { useState } from 'react';
import { Link } from 'react-router';
import type { NewItemI } from '../types/newsTypes';

interface CommentItemProps {
  comment: NewItemI;
  isChild?: boolean;
}

export const CommentItem = ({ comment, isChild = false }: CommentItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const formattedTime = comment.time
    ? new Date(comment.time * 1000).toLocaleDateString()
    : '';
  const repliesCount = comment.kids?.length || 0;
  const hasReplies = repliesCount > 0;

  return (
    <div className="w-full flex flex-col gap-3">
      <div className="p-5 bg-white border border-gray-100 rounded-xl shadow-sm">
        <div className="flex items-center gap-2 mb-2.5 text-xs text-gray-500">
          {comment.by ? (
            <Link
              to={`/user/${comment.by}`}
              className="flex items-center gap-1.5 bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md font-bold cursor-pointer"
            >
              <svg
                className="w-3.5 h-3.5 text-gray-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
              <span>{comment.by}</span>
            </Link>
          ) : (
            <span className="font-bold text-gray-400 bg-gray-50 px-2.5 py-1 rounded-md">
              anonymous
            </span>
          )}
          <span>•</span>
          <span>{formattedTime}</span>
        </div>

        {comment.text && (
          <div
            className="text-sm text-gray-700 leading-relaxed wrap-break-word space-y-2 prose prose-sm max-w-none
              [&_a]:text-primary [&_a]:font-bold [&_a]:underline hover:[&_a]:text-primary-glow
              [&_pre]:bg-gray-50 [&_pre]:p-2 [&_pre]:rounded [&_pre]:overflow-x-auto [&_code]:font-mono"
            dangerouslySetInnerHTML={{ __html: comment.text }}
          />
        )}

        {hasReplies && !isChild && (
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
              <span>{isExpanded ? 'Hide replies' : 'Show replies'}</span>
            </button>

            <span className="text-xs font-medium text-gray-400">
              {repliesCount} {repliesCount === 1 ? 'reply' : 'replies'}
            </span>
          </div>
        )}
      </div>

      {hasReplies && !isChild && isExpanded && (
        <div className="pl-8 border-l-2 border-gray-200/80 flex flex-col gap-3 mt-1 ml-4">
          <div className="w-full h-16 bg-gray-50/50 border border-dashed border-gray-200 rounded-2xl animate-pulse">
            here will be replies ...
          </div>
        </div>
      )}
    </div>
  );
};
