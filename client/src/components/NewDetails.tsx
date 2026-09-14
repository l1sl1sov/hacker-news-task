import type { NewItemI } from '../types/newsTypes';
import { getPublicationData } from '../utils/formatTime';
import { getScoreBadgeConfig } from '../utils/formatNewItemUI';
import { Separator } from './UI/Separator';
import { ComeBackBtn } from './ComeBackBtn';
<<<<<<< HEAD
=======
import { Link } from 'react-router';
>>>>>>> feature/user-profile

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
          <Link
            to={`/user/${data.by}`}
            className="flex items-center gap-1.5 bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md font-bold cursor-pointer"
          >
            <svg
              className="w-3.5 h-3.5 text-gray-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
            <span>{data.by}</span>
          </Link>
          <Separator />
          <span>Posted {getPublicationData(data.time)}</span>
        </div>

        <div className="flex gap-7 items-start w-full">
          <div className="flex flex-col items-center justify-center min-w-18 p-4 rounded-2xl border border-gray-200 bg-gray-50/50 text-gray-700 shadow-xs cursor-default select-none">
            <div
              className={`flex items-center justify-center p-2 rounded-full shadow-2xs text-lg ${badge.classes}`}
            >
              {badge.icon}
            </div>
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

              {data.text && (
                <div
                  className="text-sm text-gray-700 leading-relaxed tracking-normal wrap-break-word
                    [&>p]:mb-2 
                    [&>a]:text-primary [&>a]:font-bold [&>a]:underline [&>a]:decoration-1 [&>a]:underline-offset-2 hover:[&>a]:text-primary-dark"
                  dangerouslySetInnerHTML={{ __html: data.text }}
                />
              )}
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

      <div className="w-full h-px bg-gray-200 my-2" />

      <section className="flex flex-col gap-5">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-extrabold text-gray-900">Discussion</h2>
          <span className="text-xs font-bold px-2.5 py-0.5 bg-gray-100 text-gray-600 rounded-full">
            {data.descendants ?? 0}
          </span>
        </div>

        <div className="p-8 bg-gray-50/50 border border-dashed border-gray-200 rounded-2xl text-left">
          <p className="text-sm font-semibold text-gray-700 mb-1.5">
            Comments section placeholder
          </p>
          <p className="text-xs text-gray-400 tracking-wide">
            {data.kids && data.kids.length > 0
              ? `Found ${data.kids.length} root comments to render here later by their IDs.`
              : 'There are no comments on this story yet.'}
          </p>
        </div>
      </section>
    </div>
  );
};
