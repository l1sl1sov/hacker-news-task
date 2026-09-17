import { Link } from 'react-router';

interface UserLinkProps {
  username?: string;
}

export const UserLink = ({ username }: UserLinkProps) => {
  if (!username) {
    return (
      <span className="font-bold text-gray-400 bg-gray-50 px-2.5 py-1 rounded-md">
        anonymous
      </span>
    );
  }

  return (
    <Link
      to={`/user/${username}`}
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
      <span>{username}</span>
    </Link>
  );
};
