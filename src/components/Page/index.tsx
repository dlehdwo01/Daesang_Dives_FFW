import { useUserStore } from '@/stores/userStore';
import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { UIHeader } from '../UI/organisms/UIHeader';
import { UILayout } from '../UI/organisms/UILayout';

const Page = ({ children }: { children: ReactNode }) => {
  const path = useLocation();
  const userStore = useUserStore();
  // const [auth, setAuth] = useState(true);
  // const navigator = useNavigate();
  useEffect(() => {
    console.log('현재 페이지=>', path.pathname);
    userStore.setUrl(path.pathname);
  }, [path]);

  return (
    <UILayout.Page>
      <UIHeader />
      {children}
    </UILayout.Page>
  );
};
export default Page;
