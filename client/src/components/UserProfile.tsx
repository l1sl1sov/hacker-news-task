import type { UserI } from '@typesal/userTypes';
import { ComeBackBtn } from '@components/ComeBackBtn';
import { getUserInitials, formatRegistrationDate } from '@utils/formatUser';
import { SafeHtml } from '@components/UI/SafeHtml';

interface UserProfileProps {
  data: UserI;
}

export const UserProfile = ({ data }: UserProfileProps) => {
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="flex items-center w-full">
        <ComeBackBtn />
      </div>

      <div className="w-full bg-white border border-gray-100 rounded-2xl p-8 md:p-12 min-h-105 flex flex-col justify-between shadow-xs">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start w-full">
          <div className="shrink-0 w-24 h-24 rounded-full bg-primary-light/10 text-primary border border-primary/20 flex items-center justify-center text-3xl font-black tracking-wider select-none shadow-inner mx-auto md:mx-0">
            {getUserInitials(data.id)}
          </div>

          <div className="flex flex-col gap-6 w-full text-center md:text-left">
            <div>
              <h1 className="text-3xl md:text-4xl font-black text-gray-950 tracking-tight mb-2">
                {data.id}
              </h1>
              <p className="text-xs font-semibold text-gray-400">
                On Hacker News since{' '}
                <span className="text-gray-600 font-bold">
                  {formatRegistrationDate(data.created)}
                </span>
              </p>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-8 border-y border-gray-100 py-4 w-full">
              <div className="flex flex-col pr-8 border-r border-gray-100 text-left">
                <span className="text-2xl font-black text-gray-950 leading-none">
                  {data.karma.toLocaleString()}
                </span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mt-1.5">
                  Karma Points
                </span>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-2xl font-black text-gray-950 leading-none">
                  {data.submitted?.length ?? 0}
                </span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mt-1.5">
                  Submissions
                </span>
              </div>
            </div>

            <div className="text-left mt-2 w-full">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                Biography
              </h3>
              {data.about ? (
                <SafeHtml html={data.about} />
              ) : (
                <p className="text-sm italic text-gray-400">
                  This user prefers to keep a low profile and hasn't added a bio
                  yet.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
