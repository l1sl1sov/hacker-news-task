import type { NewItemI } from '@typesal/newsTypes';
import { useMainCommentsTree } from '@hooks/useMainCommentsTree';
import { CommentItem } from '@components/CommentItem';
import { Button } from '@components/UI/Button';

interface CommentSectionProps {
  data: NewItemI;
}

export const CommentSection = ({ data }: CommentSectionProps) => {
  const {
    comments,
    isLoading,
    isFetchingComments,
    refetchComments,
    isPlaceholderData,
  } = useMainCommentsTree(data.kids);

  const hasNoComments = !data.kids || data.kids.length === 0;

  return (
    <section className="flex flex-col gap-5 text-left w-full">
      <div className="flex items-center justify-between border-b border-gray-100 pb-3">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-extrabold text-gray-900">Discussion</h2>
          <span className="text-xs font-bold px-2.5 py-0.5 bg-gray-100 text-gray-600 rounded-full">
            {data.descendants ?? 0}
          </span>
        </div>

        <Button onClick={refetchComments} isLoading={isFetchingComments}>
          Update news
        </Button>
      </div>

      {isLoading && (
        <div className="p-8 bg-gray-50/50 border border-dashed border-gray-200 rounded-2xl animate-pulse">
          <p className="text-sm font-semibold text-gray-400 mb-1.5">
            Loading comment tree...
          </p>
          <p className="text-xs text-gray-300 tracking-wide">
            Fetching the latest discussion for you
          </p>
        </div>
      )}

      {hasNoComments && !isLoading && (
        <div className="p-8 bg-gray-50/50 border border-dashed border-gray-200 rounded-2xl">
          <p className="text-sm font-semibold text-gray-700 mb-1.5">
            Comment section
          </p>
          <p className="text-xs text-gray-400 tracking-wide">
            There are no comments on this story yet.
          </p>
        </div>
      )}

      {!isLoading && !hasNoComments && (
        <div
          className={`flex flex-col gap-6 ${isPlaceholderData ? 'opacity-50' : 'opacity-100'}`}
        >
          {comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </div>
      )}
    </section>
  );
};
