import { RefObject, useEffect, useRef } from 'react';

import { callLogin } from '@/api/login';
import * as JSEncrypt from 'jsencrypt';
import { useNavigate } from 'react-router-dom';
import { UIButton } from '../components/UI/atoms/UIButton';
import { UIFlex } from '../components/UI/atoms/UIFlex';
import { UIInput } from '../components/UI/atoms/UIInput';
import { UILink } from '../components/UI/atoms/UILink';
import { UILogo } from '../components/UI/atoms/UILogo';
import { UIText } from '../components/UI/atoms/UIText';
import { UICard } from '../components/UI/molecules/UICard';
import { UILayout } from '../components/UI/organisms/UILayout';
import { UILoading } from '../components/UI/organisms/UILoading';
import { usePopup } from '../hooks/usePopup';
import { useConfirmStore } from '@/components/UI/organisms/UIConfirm/store';

const Login = () => {
  const navigate = useNavigate();
  const confirm = useConfirmStore();
  const username = useRef<HTMLInputElement | null>(null);
  const password = useRef<HTMLInputElement | null>(null);
  const autoLogin = useRef<HTMLInputElement | null>(null);
  const popup = usePopup();
  const publicKey = useRef('');
  // const confirm = useConfirmStore();
  const { getPublicKey, login } = callLogin();

  useEffect(() => {
    getPublicKey({
      inData: {},
      onSuccess: (res) => {
        publicKey.current = res.data.publicKey;
      },
    });
    if (username.current !== null) {
      username.current.focus();
    }
  }, []);

  const encryptPassword = (password: string, publicKey: string) => {
    const encryptor = new JSEncrypt.JSEncrypt();
    encryptor.setPublicKey(publicKey);
    return encryptor.encrypt(password) as string;
  };

  const onEnterKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onLogin();
    }
  };

  const noneInputError = (str: string, ref: RefObject<HTMLInputElement | null>) => {
    setTimeout(() => {
      confirm.open({
        message: `${str}를 입력해 주세요`,
        onConfirm: () => {
          ref.current?.focus();
        },
      });
    }, 100);
  };

  const onLogin = () => {
    console.log(autoLogin.current?.checked);
    if (username.current !== null && password.current !== null) {
      if (username.current.value === '') {
        noneInputError('사원번호', username);
        return;
      }
      if (password.current.value === '') {
        noneInputError('비밀번호', password);
        return;
      }
      login({
        inData: {
          username: username.current.value,
          password: encryptPassword(password.current.value, publicKey.current),
        },
        onSuccess: () => {
          navigate('/home');
        },
      });
    }
  };
  return (
    <UILayout.Center>
      <UILoading isOpen={popup.isOpen} />
      <UIFlex.Column>
        <UILogo />
        <UICard className="space-y-6 mt-8">
          <UIText>사원번호</UIText>
          <UIInput
            ref={username}
            placeholder="사원번호를 입력해주세요."
            onKeyDown={(e) => onEnterKeyDown(e)}
          />
          <UIText>비밀번호</UIText>
          <UIInput
            ref={password}
            type="password"
            placeholder="비밀번호를 입력해주세요."
            onKeyDown={(e) => onEnterKeyDown(e)}
          />
          <UIFlex.Row.Between>
            <UIFlex.Row.Center>
              <input
                ref={autoLogin}
                id="autoLogin"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 disabled:cursor-wait disabled:opacity-50"
              />
              <label htmlFor="autoLogin" className="ml-2 block text-sm text-gray-700 ">
                자동 로그인
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
