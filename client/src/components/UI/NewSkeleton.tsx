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
            className="mb-5 p-2.5 border border-white bg-gray-100 animate-pulse h-19 list-none"
          />
        ))}
    </>
  );
};
