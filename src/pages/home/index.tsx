import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigator = useNavigate();
  return (
    <div>
      <div className="p-5">
        <div className="grid grid-cols-3 gap-4">
          <div className=" p-4 border-zinc-300 border-1 rounded">
            {/* "자세히 보기" 버튼을 우측 상단에 배치 */}
            <div className="absolute top-2 right-2 bg-gray-800 p-2 rounded cursor-pointer">
              자세히 보기
            </div>

            {/* "차트가 보이는 영역"을 네모나게 */}
            <div className="bg-white text-black p-4 mt-8 h-48 border-1 border-zinc-300 rounded">
              차트가 보이는 영역
            </div>

            {/* "목표 달성 건" 텍스트를 차트 아래에 위치 */}
            <div className="mt-4">목표 달성 건</div>
          </div>
          <div className="bg-green-500 text-white p-4">항목 2</div>
          <div className="bg-red-500 text-white p-4">항목 3</div>
        </div>
      </div>
    </div>
  );
};
export default Home;
