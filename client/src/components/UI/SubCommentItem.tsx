import { Link } from 'react-router';
import type { CommentNodeI } from '../../types/newsTypes';
import { UserLink } from '../UserLink';

interface StaticCommentNodeProps {
  node: CommentNodeI;
  depth?: number;
}

export const SubCommentItem = ({ node, depth = 1 }: StaticCommentNodeProps) => {
  const formattedTime = node.time
    ? new Date(node.time * 1000).toLocaleDateString()
    : '';

  const paddingClass = depth > 4 ? 'pl-3' : 'pl-4';
  const nestedPaddingClass = depth > 4 ? 'pl-4' : 'pl-8';

  return (
    <div className="w-full flex flex-col mt-2">
      <div
        className={`flex flex-col gap-2 border-l-2 border-gray-200/80 ${paddingClass}`}
      >
        <div className="flex items-center gap-2 text-xs text-gray-500 flex-wrap">
          <UserLink username={node.by} />

          {node.replyTo && (
            <span className="text-gray-400 font-medium">
              reply to{' '}
              <Link
                to={`/user/${node.replyTo}`}
                className="text-gray-400 font-bold hover:text-gray-600"
              >
                {node.replyTo}
              </Link>
            </span>
          )}

          <span>•</span>
          <span>{formattedTime}</span>
        </div>

        {node.text && (
          <div
            className="text-sm text-gray-700 leading-relaxed wrap-break-word space-y-2 prose prose-sm max-w-none
              [&_a]:text-primary [&_a]:font-bold [&_a]:underline hover:[&_a]:text-primary-glow
              [&_pre]:bg-gray-50 [&_pre]:p-2 [&_pre]:rounded [&_pre]:overflow-x-auto [&_code]:font-mono"
            dangerouslySetInnerHTML={{ __html: node.text }}
          />
        )}
      </div>

      {node.replies && node.replies.length > 0 && (
        <div className={`flex flex-col gap-2 mt-3 ${nestedPaddingClass}`}>
          {node.replies.map((reply) => (
            <SubCommentItem key={reply.id} node={reply} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
};
