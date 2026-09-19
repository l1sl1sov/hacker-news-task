import { getItemService } from '@/server/services';
import type { NewItemI, CommentNodeI } from '@typesal/newsTypes';
import { queryClient } from '@/App';

//function for loading all the tree of subcomments recursive - every comment has an array 'kids', i load everything until its empty
export const fetchRecursiveComments = async (
  ids: number[],
  signal?: AbortSignal,
  parentAuthor?: string,
): Promise<CommentNodeI[]> => {
  if (!ids || ids.length === 0) return [];
  if (signal?.aborted) return [];

  const items = await Promise.all(
    ids.map(async (id) => {
      try {
        const cached = queryClient.getQueryData<NewItemI>(['commentItem', id]);
        if (cached) return cached;

        const data = await getItemService(id, signal);

        if (data && !signal?.aborted) {
          queryClient.setQueryData(['commentItem', id], data);
        }

        return data;
      } catch (error) {
        return null;
      }
    }),
  );

  if (signal?.aborted) return [];

  const validComments = items.filter(
    (item): item is NewItemI => !!item && !item.deleted && !item.dead,
  );

  const tree: CommentNodeI[] = await Promise.all(
    validComments.map(async (comment) => {
      const node: CommentNodeI = {
        ...comment,
        replyTo: parentAuthor,
      };

      if (comment.kids && comment.kids.length > 0) {
        if (signal?.aborted) return node;
        node.replies = await fetchRecursiveComments(
          comment.kids,
          signal,
          comment.by,
        );
      }

      return node;
    }),
  );

  return tree;
};
