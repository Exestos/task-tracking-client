import {
  FC, useContext, useEffect
} from 'react';
import { useAuth } from '../../hooks/auth.hook';
import { IPageProps } from '../pages.types';


const Profile: FC<IPageProps> = (props) => {
  const { token, userId } = useAuth();

  useEffect(() => {
    document.title = "Профиль"
  }, []);
  return (
    <>
     <span>Профиль</span>
    </>
  );
};

export default Profile;
