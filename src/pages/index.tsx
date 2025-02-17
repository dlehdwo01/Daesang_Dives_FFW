import { useEffect, useRef, useState } from 'react';

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
import { useNavigate } from 'react-router-dom';
import * as JSEncrypt from 'js-encrypt';
import { callLogin } from '@/api/login';
import { useConfirmStore } from '@/components/UI/organisms/UIConfirm/store';

const Login = () => {
  const navigate = useNavigate();
  const id = useRef('');
  const password = useRef('');
  const rememberMe = useRef<HTMLInputElement>(null);
  const popup = usePopup();
  const publicKey = useRef('');
  const confirm = useConfirmStore();
  const { getPulicKey, login } = callLogin();

  useEffect(() => {
    getPulicKey({
      inData: {},
      onSuccess: (data) => {
        publicKey.current = data.publicKey;
      },
    });
  }, []);

  const encryptPassword = (password: string, publicKey: string) => {
    const encryptor = new JSEncrypt.JSEncrypt();
    encryptor.setPublicKey(publicKey);
    return encryptor.encrypt(password) as string;
  };

  const onLogin = () => {
    console.log('로그인 클릭');
    console.log(id.current);
    console.log(password.current);

    login({
      inData: { id: id.current, password: encryptPassword(password.current, publicKey.current) },
      onSuccess: (data) => {
        if (data.result === 'failed') {
          confirm.open({ message: '아이디 또는 비밀번호가 일치하지 않습니다.' });
        } else {
          navigate('/home');
        }
      },
    });
  };
  return (
    <UILayout.Center>
      <UILoading isOpen={popup.isOpen} />
      <UIFlex.Column>
        <UILogo />
        <UICard className="space-y-6 mt-8">
          <UIText>사원번호</UIText>
          <UIInput ref={id} placeholder="사원번호를 입력해주세요." />
          <UIText>비밀번호</UIText>
          <UIInput ref={password} type="password" placeholder="비밀번호를 입력해주세요." />
          <UIFlex.Row.Between>
            <UIFlex.Row.Center>
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 disabled:cursor-wait disabled:opacity-50"
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
