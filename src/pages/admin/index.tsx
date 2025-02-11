import { Link } from 'react-router-dom';
import { UIButton } from '../../components/atoms/UIButton';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

const Admin = () => {
  return (
    <div className="flex flex-grow overflow-hidden">
      {/* side */}
      <div className="w-2xs  border-r border-zinc-300 flex-col flex gap-1 overflow-y-auto">
        {[1, 2, 3, 4, 5].map((item) => (
          <div
            key={item}
            className="flex justify-between p-4 pr-2 cursor-pointer hover:bg-zinc-100 items-center"
            onClick={() => {
              console.log('관리자 카테고리 클릭=>', item);
            }}
          >
            <span className="font-bold">관리자 카테고리{item}</span>
            <span>
              <SlArrowRight strokeWidth={90} color="rgba(0,0,0,0.6)" />
            </span>
          </div>
        ))}
      </div>
      {/* contents */}
      <div className="flex flex-col p-5 gap-16 flex-grow overflow-y-auto">
        <h1 className="font-extrabold text-3xl">카테고리 타이틀</h1>
        <div className="flex-grow flex flex-col gap-2">
          <div className="flex justify-between items-center">
            {/* 검색영역 */}
            <div className="flex gap-2">
              검색
              <input className="border rounded"></input>
            </div>
            {/* 버튼영역 */}
            <div className="flex gap-2">
              <UIButton>수정</UIButton>
              <UIButton>삭제</UIButton>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="border-2 border-zinc-300 rounded h-[539px] overflow-auto">
              <table className="w-full talbe-fixed h-max">
                <tr className="text-center border-b border-zinc-300 bg-zinc-100 ">
                  <th className="border-r-zinc-300 border-r p-2">컬럼1</th>
                  <th className="border-r-zinc-300 border-r p-2">컬럼2</th>
                  <th className="border-r-zinc-300 border-r p-2">컬럼3</th>
                  <th className="border-r-zinc-300 border-r p-2">컬럼4</th>
                  <th className="border-r-zinc-300 border-r p-2">컬럼5</th>
                  <th className="border-r-zinc-300 border-r p-2">컬럼6</th>
                  <th className=""></th>
                </tr>
                {/* , 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 */}
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item, index) => {
                  const last = index == 14 ? '' : 'border-b';
                  return (
                    <tr className={`text-center border-zinc-300 h-[30px] ${last}`}>
                      <td className="border-r-zinc-300 border-r p-1">1</td>
                      <td className="border-r-zinc-300 border-r p-1">머시기</td>
                      <td className="border-r-zinc-300 border-r p-1">머시기</td>
                      <td className="border-r-zinc-300 border-r p-1">머시기</td>
                      <td className="border-r-zinc-300 border-r p-1">머시기</td>
                      <td className="border-r-zinc-300 border-r p-1">머시기</td>
                      <td className=" text-center p-1">
                        <input type="checkbox"></input>
                      </td>
                    </tr>
                  );
                })}
              </table>
            </div>
            <div className="items-center flex gap-2 justify-center mt-3">
              <Link to={'/admin'} className="font-bold text-zinc-600">
                {'<'}
              </Link>
              <Link to={'/admin'} className="font-bold text-zinc-600">
                1
              </Link>
              <Link to={'/admin'} className="font-bold text-zinc-600">
                2
              </Link>
              <Link to={'/admin'} className="font-bold text-zinc-600">
                3
              </Link>
              <Link to={'/admin'} className="font-bold text-zinc-600">
                {'>'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Admin;
