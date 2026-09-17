import type { BadgeType } from '../../utils/formatNewItemUI';

interface ScoreBadgeProps {
  type: BadgeType;
  classes: string;
  scoreText?: string;
}

export const ScoreBadge = ({ type, classes, scoreText }: ScoreBadgeProps) => {
  return (
    <div
      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md font-bold shadow-2xs ${classes}`}
    >
      {type === 'up' && (
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
      )}
      {type === 'down' && (
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
      )}
      {type === 'neutral' && (
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
      )}
      {scoreText && <span>{scoreText}</span>}
    </div>
  );
};
