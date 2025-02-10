import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigator = useNavigate();
  return (
    <div>
      <div>홈입니다</div>
      <button
        className="bg-blue-500"
        onClick={() => {
          navigator('/');
        }}
      >
        로그인화면으로 클릭
      </button>
    </div>
  );
};
export default Home;
