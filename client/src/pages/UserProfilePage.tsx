import { useParams } from 'react-router';
import { useUser } from '@hooks/useUser';
import { NotFoundPage } from '@pages/NotFoundPage';
import { UserProfile } from '@components/UserProfile';

export const UserProfilePage = () => {
  const { username } = useParams<{ username: string }>();
  const stringUsername = username ? String(username) : '';

  const { userData, isLoadingUser, error } = useUser(stringUsername);

  if (isLoadingUser) return <div>Loading...</div>;
  if (error || !userData || !username) return <NotFoundPage />;

  return <UserProfile data={userData} />;
};
