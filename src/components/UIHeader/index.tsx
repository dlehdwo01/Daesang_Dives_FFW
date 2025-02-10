import { Link, useNavigate } from 'react-router-dom';

export const UIHeader = () => {
  const navigator = useNavigate();
  const logout = () => {
    console.log('로그아웃 클릭');
  };
  const categoryClick = (data: any) => {
    console.log('카테고리 클릭=>', data);
  };
  return (
    <div className="flex  items-center justify-between bg-white border-b-1 border-zinc-300">
      <div className="flex gap-x-10 ">
        <Link to="/home" className="p-5 w-[220px]">
          <img src="logo.png"></img>
        </Link>
        <ul className="list-none flex gap-x-5 items-center ">
          <li
            className="font-bold text-zinc-800  px-5 items-center flex h-[100%] cursor-pointer"
            onClick={() => navigator('/')}
          >
            로그인화면으로(임시)
          </li>
          <li
            className="font-bold text-zinc-800  px-5 items-center flex h-[100%] cursor-pointer"
            onClick={() => {
              categoryClick({});
            }}
          >
            대분류2
          </li>
          <li
            className="font-bold text-zinc-800  px-5 items-center flex h-[100%] cursor-pointer"
            onClick={() => {
              categoryClick({});
            }}
          >
            대분류3
          </li>
        </ul>
      </div>

      <button
        className=" mr-32 text-md font-semibold p-1 border-b-1 text-zinc-800 cursor-pointer"
        onClick={logout}
      >
        로그아웃
      </button>
    </div>
  );
};
