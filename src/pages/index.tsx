import { useEffect, useRef, useState } from 'react';
import { UIFlex } from '../components/atoms/UIFlex';
import { UILoading } from '../components/organisms/UILoading';
import { UIButton } from '../components/atoms/UIButton';
import { UICard } from '../components/molecules/UICard';
import { UIInput } from '../components/atoms/UIInput';
import { UIText } from '../components/atoms/UIText';
import { UILink } from '../components/atoms/UILink';
import { UILayout } from '../components/organisms/UILayout';
import { UILogo } from '../components/atoms/UILogo';
import { usePopup } from '../hooks/usePopup';

const Login = () => {
  const [formData, setFormData] = useState({
    id: '',
    password: '',
    rememberMe: false,
  });
  const id = useRef('');
  const password = useRef('');
  // const rememberMe = useRef(false);
  const popup = usePopup();
  useEffect(() => {
    popup.open();
    setTimeout(() => {
      popup.close();
    }, 2000);
  }, []);

  const onLogin = () => {
    console.log('로그인 클릭');
  };
  return (
    <UILayout.Center>
      <UILoading isOpen={popup.isOpen} />
      <UIFlex.Column>
        <UILogo />
        <UICard className="space-y-6 mt-8">
          <UIText>사원번호</UIText>
          <UIInput ref={id} />
          <UIText>비밀번호</UIText>
          <UIInput ref={password} />
          <UIFlex.Row.Between>
            <UIFlex.Row.Center>
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 disabled:cursor-wait disabled:opacity-50"
                checked={formData.rememberMe}
                onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
              />
              <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-700 ">
                Remember me
              </label>
            </UIFlex.Row.Center>
            {/* 이 부분은 로그인 실패시 안내 생각 해보기 */}
            <UILink to="#" className="text-xs ml-6">
              계정이 없다면 관리자에게 문의해주세요.
            </UILink>
          </UIFlex.Row.Between>
          <UIButton.Submit onClick={onLogin}>Login</UIButton.Submit>
        </UICard>
      </UIFlex.Column>
    </UILayout.Center>
  );
};

export default Login;
