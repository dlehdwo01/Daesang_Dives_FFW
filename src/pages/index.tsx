import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigator = useNavigate();
  return (
    <div>
      로그인화면
      <div>
        <button
          className="bg-red-500"
          onClick={() => {
            navigator('/home');
          }}
        >
          홈으로 클릭
        </button>
      </div>
    </div>
  );
};
export default Login;
