import { useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UIFlex } from '../../atoms/UIFlex';
import { UIButton } from '../../atoms/UIButton';
import { UIText } from '../../atoms/UIText';
import { UILogo } from '../../atoms/UILogo';

export const UIHeader = () => {
  const path = useLocation();
  const noRender = ['/']; // 미출력 주소 입력 (로그인)

  // 로그아웃 클릭시
  const logout = useCallback(() => {
    console.log('로그아웃 클릭');
  }, []);

  return (
    <>
      {noRender.some((str) => path.pathname !== str) && (
        <UIFlex.Row.Between className="border-b-1 border-zinc-300">
          <UIFlex.Row className="gap-x-10 ">
            <Link to="/home" className="p-5 w-[220px]">
              <UILogo />
            </Link>
            <HeaderUl />
          </UIFlex.Row>
          <div className="mr-5">
            <UIButton onClick={logout}>로그아웃</UIButton>
          </div>
        </UIFlex.Row.Between>
      )}
    </>
  );
};

// 헤더 카테고리 영역
const HeaderUl = () => {
  const category = [
    { label: '로그인화면으로', url: '/' },
    { label: '관리자화면으로', url: '/admin' },
    { label: '홈화면으로', url: '/home' },
  ];
  return (
    <ul className="list-none flex gap-x-5 items-center ">
      {category.map((item, index) => (
        <HeaderLi label={item.label} url={item.url} key={index} />
      ))}
    </ul>
  );
};

const HeaderLi = ({ label, url }: { label: string; url: string }) => {
  const navigator = useNavigate();

  return (
    <li
      className="font-bold text-zinc-800  px-5 items-center flex h-[100%] cursor-pointer"
      onClick={() => {
        navigator(url);
      }}
    >
      <UIText.Title>{label}</UIText.Title>
    </li>
  );
};
