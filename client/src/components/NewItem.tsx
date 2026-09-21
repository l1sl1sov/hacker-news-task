import type { NewItemI } from '@typesal/newsTypes';
import { getPublicationData } from '@utils/formatTime';
import { formatPointsText, getScoreBadgeConfig } from '@utils/formatNewItemUI';
import { Separator } from '@components/UI/Separator';
import { Link } from 'react-router';
import { ScoreBadge } from '@components/UI/ScoreBadge';

interface NewItemProps {
  data: NewItemI;
}

export const NewItem = ({ data }: NewItemProps) => {
  const score = data.score ?? 0;
  const badge = getScoreBadgeConfig(score);

  return (
    <Link
      to={`/item/${data.id}`}
      className="flex flex-col gap-2.5 w-full min-w-0"
    >
      <h3 className="text-base font-semibold text-gray-900 hover:text-primary transition-colors duration-150 block leading-snug cursor-pointer wrap-break-word min-w-0">
        {data.title}
      </h3>
      <div className="flex flex-wrap items-center gap-y-1.5 text-xs text-gray-500 font-medium w-full min-w-0">
        <ScoreBadge
          type={badge.type}
          classes={badge.classes}
          scoreText={formatPointsText(score)}
        />

        <Separator />

        <span>
          by <strong className="text-gray-700 font-semibold">{data.by}</strong>
        </span>

        {data.descendants !== undefined && (
          <>
            <Separator />
            <span className="hover:text-gray-900 cursor-pointer transition-colors">
              {data.descendants} comments
            </span>
          </>
        )}

        <small className="text-gray-400 font-medium sm:ml-auto flex items-center">
          <span className="hidden sm:inline">
            <Separator />
          </span>
          Posted {getPublicationData(data.time)}
        </small>
      </div>
    </Link>
  );
};
