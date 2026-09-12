import type { NewItemI } from '../types/newsTypes';
import { getPublicationData } from '../utils/formatTime';
import {
  formatPointsText,
  getScoreBadgeConfig,
} from '../utils/formatNewItemUI';
import { Separator } from './UI/Separator';
import { Link } from 'react-router';

interface NewItemProps {
  data: NewItemI;
}

export const NewItem = ({ data }: NewItemProps) => {
  const score = data.score ?? 0;

  const badge = getScoreBadgeConfig(score);

  return (
    <Link to={`/item/${data.id}`} className="flex flex-col gap-2.5 w-full">
      {/** detailed view */}
      <h3 className="text-base font-semibold text-gray-900 hover:text-primary transition-colors duration-150 block leading-snug cursor-pointer">
        {data.title}
      </h3>
      <div className="flex flex-wrap items-center text-xs text-gray-500 font-medium">
        <div
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md font-bold shadow-2xs ${badge.classes}`}
        >
          {badge.icon}
          <span>{formatPointsText(score)}</span>
        </div>

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
        <small className="text-gray-400 font-medium ml-auto">
          <Separator />
          Posted {getPublicationData(data.time)}
        </small>
      </div>
    </Link>
  );
};
