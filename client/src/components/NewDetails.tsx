import type { NewItemI } from '@typesal/newsTypes';
import { getPublicationData } from '@utils/formatTime';
import { getScoreBadgeConfig } from '@utils/formatNewItemUI';
import { Separator } from '@components/UI/Separator';
import { ComeBackBtn } from '@components/ComeBackBtn';
import { CommentSection } from '@components/CommentSection';
import { UserLink } from '@components/UserLink';
import { SafeHtml } from '@components/UI/SafeHtml';
import { ScoreBadge } from '@components/UI/ScoreBadge';

interface NewDetailsProps {
  data: NewItemI;
}

export const NewDetails = ({ data }: NewDetailsProps) => {
  const score = data.score ?? 0;
  const badge = getScoreBadgeConfig(score);

  return (
    <div className="flex flex-col gap-8 w-full">
      <ComeBackBtn />

      <div className="flex flex-col gap-5 w-full p-5 border border-white">
        <div className="flex flex-wrap items-center gap-2.5 text-xs text-gray-500 font-medium bg-transparent border-0 p-0 w-fit">
          <UserLink username={data.by} />
          <Separator />
          <span>Posted {getPublicationData(data.time)}</span>
        </div>

        <div className="flex gap-7 items-start w-full">
          <div className="flex flex-col items-center justify-center min-w-18 p-4 rounded-2xl border border-gray-200 bg-gray-50/50 text-gray-700 shadow-xs cursor-default select-none">
            <ScoreBadge
              type={badge.type}
              classes={`p-2 rounded-full shadow-2xs text-lg ${badge.classes}`}
            />
            <span className="text-base font-extrabold leading-none tracking-tight mt-2">
              {score}
            </span>
            <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mt-1">
              points
            </span>
          </div>

          <div className="flex flex-col gap-5 w-full">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl md:text-3xl font-black text-gray-900 leading-snug tracking-tight">
                {data.title}
              </h1>

              {data.text && <SafeHtml html={data.text} />}
            </div>

            {data.url && (
              <a
                href={data.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-sm font-extrabold text-primary hover:text-primary-dark underline decoration-2 underline-offset-4 cursor-pointer transition-colors w-fit group/link"
              >
                <span>Read original source</span>
                <svg
                  className="w-4 h-4 stroke-current ml-1.5 group-hover/link:ml-3 transition-all duration-200 ease-out"
                  fill="none"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>

      <CommentSection data={data} />
    </div>
  );
};
