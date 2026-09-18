export type BadgeType = 'up' | 'down' | 'neutral';

interface BadgeConfig {
  classes: string;
  type: BadgeType;
}

export const formatPointsText = (score: number): string => {
  return `${score} ${Math.abs(score) === 1 ? 'point' : 'points'}`;
};

//styles of score badge - idk if api has negative or 0 score points - just in case it does
export const getScoreBadgeConfig = (score: number): BadgeConfig => {
  if (score > 0) {
    return { classes: 'bg-emerald-50 text-emerald-700', type: 'up' };
  }
  if (score < 0) {
    return { classes: 'bg-rose-50 text-rose-700', type: 'down' };
  }
  return { classes: 'bg-gray-50 text-gray-500', type: 'neutral' };
};
