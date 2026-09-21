import { useFilterSelector } from '@store/useFilterStore';
import { useStories } from '@hooks/useStories';
import { useInfiniteScroll } from '@hooks/useInfiniteScroll';
import { NewItem } from '@components/NewItem';
import { APP_CONFIG } from '@constants/base';
import { NewsSkeleton } from '@components/UI/NewSkeleton';
import { Button } from '@components/UI/Button';

export const NewsList = () => {
  const filter = useFilterSelector();
  const {
    news,
    isLoading,
    isFetchingNews,
    isPlaceholderData,
    showLoadMoreButton,
    hasMore,
    loadMore,
    refetchNews,
  } = useStories(filter);

  const triggerRef = useInfiniteScroll({
    hasMore,
    showLoadMoreButton,
    onIntersect: loadMore,
  });

  if (isLoading) {
    return (
      <div>
        <ul>
          <li className="mb-2">
            <div className="w-29.5 h-11.5 bg-gray-200 animate-pulse border border-gray-200 rounded-lg" />
          </li>
          <NewsSkeleton count={APP_CONFIG.ITEMS_PER_PAGE} />
        </ul>
      </div>
    );
  }

  return (
    <div className="mb-4">
      {news && news.length > 0 ? (
        <ul className={isPlaceholderData ? 'opacity-50' : 'opacity-100'}>
          <li className="mb-2">
            <Button onClick={refetchNews} isLoading={isFetchingNews}>
              Update news
            </Button>
          </li>
          {news.map((item) => (
            <li
              key={item.id}
              className="mb-5 p-2.5 border border-gray-100 rounded-xl bg-white shadow-xs"
            >
              <NewItem data={item} />
            </li>
          ))}

          {isFetchingNews && <NewsSkeleton count={APP_CONFIG.ITEMS_PER_PAGE} />}
        </ul>
      ) : null}

      {hasMore && !showLoadMoreButton && (
        <div ref={triggerRef} className="h-5 my-5" />
      )}

      {showLoadMoreButton && (
        <Button onClick={loadMore} isLoading={isFetchingNews}>
          Load more
        </Button>
      )}
    </div>
  );
};
