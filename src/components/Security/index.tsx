import { useUserStore } from '@/stores/userStore';
import { ReactNode, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UIHeader } from '../UI/organisms/UIHeader';
import { UILayout } from '../UI/organisms/UILayout';

const Security = ({ children }: { children: ReactNode }) => {
  const path = useLocation();
  const noRender = ['/']; // 헤더 미출력 주소 입력 (로그인)
  const userStore = useUserStore();
  // const [auth, setAuth] = useState(true);
  const navigator = useNavigate();
  useEffect(() => {
    userStore.setUrl(path.pathname);
  }, [path]);

  return (
    <UILayout.Page>
      {noRender.some((str) => path.pathname !== str) && <UIHeader />}
      {children}
    </UILayout.Page>
  );
};
export default Security;
