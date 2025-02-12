import { useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UIFlex } from '../../atoms/UIFlex';
import { UIButton } from '../../atoms/UIButton';
import { UIText } from '../../atoms/UIText';

export const UIHeader = () => {
  const navigator = useNavigate();
  const path = useLocation();
  const noRender = ['/'];

  // 로그아웃 클릭시
  const logout = useCallback(() => {
    console.log('로그아웃 클릭');
  }, []);

  // 카테고리 클릭시
  const categoryClick = useCallback((data: any) => {
    console.log('카테고리 클릭=>', data);
  }, []);
  return (
    <>
      {noRender.some((str) => path.pathname !== str) && (
        <UIFlex.Row.Between className="border-b-1 border-zinc-300">
          <UIFlex.Row className="gap-x-10 ">
            <Link to="/home" className="p-5 w-[220px]">
              <img src="logo.png"></img>
            </Link>
            <ul className="list-none flex gap-x-5 items-center ">
              <li
                className="font-bold text-zinc-800  px-5 items-center flex h-[100%] cursor-pointer"
                onClick={() => navigator('/')}
              >
                <UIText.Title>로그인화면으로(임시)</UIText.Title>
              </li>
              <li
                className="font-bold text-zinc-800  px-5 items-center flex h-[100%] cursor-pointer"
                onClick={() => {
                  navigator('/admin');
                }}
              >
                <UIText.Title>관리자(홈)</UIText.Title>
              </li>
              <li
                className="font-bold text-zinc-800  px-5 items-center flex h-[100%] cursor-pointer"
                onClick={() => {
                  navigator('/admin/user');
                  categoryClick({});
                }}
              >
                <UIText.Title>관리자(유저관리)</UIText.Title>
              </li>
            </ul>
          </UIFlex.Row>

          <UIButton className=" mr-32" onClick={logout}>
            로그아웃
          </UIButton>
        </UIFlex.Row.Between>
      )}
    </>
  );
};
