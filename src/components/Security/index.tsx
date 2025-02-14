import Login from '@/pages';
import { ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UIHeader } from '../UI/organisms/UIHeader';

const Security = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState(true);
  const navigator = useNavigate();
  useEffect(() => {
    console.log('로그인');
    if (!auth) {
      // navigator('/', { replace: true });
    }
  }, [navigator]);

  return auth ? (
    <>
      <UIHeader />
      {children}
    </>
  ) : (
    <Login />
  );
};
export default Security;
