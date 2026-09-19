export const getUserInitials = (id: string): string => {
  if (!id) return '';
  const spaced = id.replace(/[^A-Z]/gi, '');
  return spaced.substring(0, 2).toUpperCase();
};

export const formatRegistrationDate = (unixTimestamp: number): string => {
  if (!unixTimestamp) return '';

  return new Date(unixTimestamp * 1000).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};
