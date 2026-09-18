//format for UI
export const formatFilterName = (name: string): string => {
  const spaced = name.replace(/([A-Z])/g, ' $1');
  return spaced.charAt(0).toUpperCase() + spaced.slice(1).toLowerCase();
};
