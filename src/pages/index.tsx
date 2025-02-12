import { useState } from 'react';
import { UIFlex } from '../components/atoms/UIFlex';
import { UILoading } from '../components/organisms/UILoading';
import { UIButton } from '../components/atoms/UIButton';
import { UICard } from '../components/molecules/UICard';

const Login = () => {
  const [formData, setFormData] = useState({
    id: '',
    password: '',
    rememberMe: false,
  });

  return (
    <UIFlex.Row.Center className="flex-grow">
      <UILoading />
      <div className="flex min-h-[80vh] flex-col justify-center py-12 sm:px-6 lg:px-8">
        <img className="mx-auto h-16 w-auto" src="/logo.png" alt="대상 로고" />
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <UICard>
            <form className="space-y-6">
              <div>
                <label htmlFor="id" className="block text-sm font-medium text-gray-800 ">
                  사원번호
                </label>
                <div className="mt-1">
                  <input
                    id="id"
                    type="text"
                    data-testid="username"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500  sm:text-sm"
                    value={formData.id}
                    onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  비밀번호
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    data-testid="password"
                    autoComplete="current-password"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
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
                </div>
                {/* 이 부분은 로그인 실패시 안내 생각 해보기 */}
                <div className="text-xs ml-6">
                  <a href="#" className="font-medium text-gray-500 hover:text-gray-400">
                    계정이 없다면 관리자에게 문의해주세요.
                  </a>
                </div>
              </div>
              <div>
                <UIButton.Submit>Login</UIButton.Submit>
              </div>
            </form>
          </UICard>
        </div>
      </div>
    </UIFlex.Row.Center>
  );
};

export default Login;
