export const getPublicationData = (unixTimestamp: number): string => {
  //math max for avoiding negative nums
  const diffInSeconds = Math.max(
    0,
    Math.floor(Date.now() / 1000) - unixTimestamp,
  );

  if (diffInSeconds < 60) {
    return `less than a minute ago`; //adding this because the app updates only once a minute so it cant synchronize seconds
  }

  const minutes = Math.floor(diffInSeconds / 60);
  if (minutes < 60) {
    return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
  }

  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
  }

  const days = Math.floor(hours / 24);
  return `${days} day${days !== 1 ? 's' : ''} ago`;
};
