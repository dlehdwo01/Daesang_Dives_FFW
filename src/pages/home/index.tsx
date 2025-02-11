import { Link, useNavigate } from 'react-router-dom';
import { UIModal } from '../../components/atoms/UIModal';
import { usePopup } from '../../hooks/usePopup';
import { UIButton } from '../../components/atoms/UIButton';

const Home = () => {
  const navigator = useNavigate();
  const popup = usePopup();

  // popup.open();
  return (
    <div>
      <UIModal isOpen={popup.isOpen}>
        <div className="bg-white p-5 rounded flex flex-col gap-3 ">
          <div className="font-bold text-lg">title</div>
          <div className="text-md max-w-2xl break-words">aa</div>
          <div className="flex gap-5 mt-2">
            <UIButton>확인</UIButton>
            <UIButton.Red>취소</UIButton.Red>
          </div>
        </div>
      </UIModal>
      <button onClick={() => popup.open()}>모달 오픈</button>
      <div className="p-5">
        <div className="grid grid-cols-3 gap-4">
          {/* Contents 1 Box */}
          <div className=" p-4 border-zinc-300 border-1 rounded">
            {/* Top */}
            <div className="flex justify-between items-center">
              <div className="font-bold">타이틀</div>
              <Link to={'/home'} className="text-sm">
                자세히 보기
              </Link>
            </div>

            {/* Mid */}
            <div className="bg-white text-black p-4 mt-3  border-1 border-zinc-300 rounded">
              차트가 보이는 영역
            </div>

            {/* Bottom */}
            <div className="mt-4">
              <span>목표 달성 건 현재 실적 건</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
