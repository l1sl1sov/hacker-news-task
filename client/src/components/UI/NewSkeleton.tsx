interface NewsSkeletonProps {
  count: number;
}

export const NewsSkeleton = ({ count }: NewsSkeletonProps) => {
  return (
    <>
      {Array(count)
        .fill(0)
        .map((_, i) => (
          <li
            key={`skeleton-${i}`}
            className="mb-5 p-2.5 border border-gray-200/60 bg-gray-100/80 rounded-xl animate-pulse h-19 list-none"
          />
        ))}
    </>
  );
};
