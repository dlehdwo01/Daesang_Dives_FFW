import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { UIMainLayout } from '../../components/organisms/UILayout/main';
import { UISide } from '../../components/organisms/UISide';
import { UIButton } from '../../components/atoms/UIButton';
import { Link } from 'react-router-dom';
import { UILayout } from '../../components/organisms/UILayout';

const Admin = () => {
  return (
    <UILayout.Row>
      <UIMainLayout.Admin title={'카테고리 이동재'}>
        <UILayout.Column className="flex-grow flex flex-col gap-2">
          <UILayout.Between>
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
          </UILayout.Between>
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
                      <td className="border-r-zinc-300 border-r p-1 w-[70px]">1</td>
                      <td className="border-r-zinc-300 border-r p-1 max-w-[50px] truncate">
                        머시기머시기머시기머시기머시기머시기머시기기머시기기머시기기머시기기머시기기머시기기머시기기머시기기머시기
                      </td>
                      <td className="border-r-zinc-300 border-r p-1 max-w-[50px] truncate">
                        머시기머시기머시기머시기머시기머시기머시기기머시기기머시기기머시기기머시기기머시기기머시기기머시기기머시기
                      </td>
                      <td className="border-r-zinc-300 border-r p-1 max-w-[50px] truncate">
                        머시기머시기머시기머시기머시기머시기머시기기머시기기머시기기머시기기머시기기머시기기머시기기머시기기머시기
                      </td>
                      <td className="border-r-zinc-300 border-r p-1 max-w-[50px] truncate">
                        머시기머시기머시기머시기머시기머시기머시기기머시기기머시기기머시기기머시기기머시기기머시기기머시기기머시기
                      </td>
                      <td className="border-r-zinc-300 border-r p-1 max-w-[50px] truncate">
                        머시기머시기머시기머시기머시기머시기머시기기머시기기머시기기머시기기머시기기머시기기머시기기머시기기머시기
                      </td>
                      <td className=" text-center p-1">
                        <input type="checkbox"></input>
                      </td>
                    </tr>
                  );
                })}
              </table>
            </div>
            <div className="items-center flex gap-2 justify-center mt-3 font-bold text-zinc-600">
              <Link to={'/admin'}>
                <SlArrowLeft size={13} strokeWidth={80} />
              </Link>
              <Link to={'/admin'}>1</Link>
              <Link to={'/admin'}>2</Link>
              <Link to={'/admin'}>3</Link>
              <Link to={'/admin'}>
                <SlArrowRight size={13} strokeWidth={80} />
              </Link>
            </div>
          </div>
        </UILayout.Column>
      </UIMainLayout.Admin>
    </UILayout.Row>
  );
};
export default Admin;
