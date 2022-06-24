import {
    FC, useEffect
  } from 'react';
import { useAuth } from '../../hooks/auth.hook';
  import { IPageProps } from '../pages.types';
  
  
  const Settings: FC<IPageProps> = ({updateTitle, title}) => {
    const { token } = useAuth();
    useEffect(() => {
        document.title = "Настройки"
     }, []);

    return (
      <>
       <span>{token}</span>
      </>
    );
  };
  
  export default Settings;
  