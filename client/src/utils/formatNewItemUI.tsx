import type { ReactNode } from 'react';

interface BadgeConfig {
  classes: string;
  icon: ReactNode;
}

export const formatPointsText = (score: number): string => {
  return `${score} ${Math.abs(score) === 1 ? 'point' : 'points'}`;
};

export const getScoreBadgeConfig = (score: number): BadgeConfig => {
  if (score > 0) {
    return {
      classes: 'bg-emerald-50 text-emerald-700',
      icon: (
        <svg
          className="w-3 h-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      ),
    };
  }

  if (score < 0) {
    return {
      classes: 'bg-rose-50 text-rose-700',
      icon: (
        <svg
          className="w-3 h-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      ),
    };
  }

  return {
    classes: 'bg-gray-50 text-gray-500',
    icon: (
      <svg
        className="w-3 h-3"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={3}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    ),
  };
};
