import { Link, useNavigate } from 'react-router-dom';
import { callTest } from '../../api/test';
import { useConfirmStore } from '../../components/UI/organisms/UIConfirm/store';
import { UIFlex } from '../../components/UI/atoms/UIFlex';
import { UIButton } from '../../components/UI/atoms/UIButton';
import { UIChart } from '../../components/UI/organisms/UIChart';
import { ChangePwdModal } from '../../components/ChangePwdModal';
import { usePopup } from '@/hooks/usePopup';
import { Doughnut } from 'react-chartjs-2';

const Home = () => {
  const navigator = useNavigate();
  const confirm = useConfirmStore();
  const { test } = callTest();
  const changePwdModal = usePopup();

  const chartDataSet = [
    {
      label: '테스트1', // 데이터 레이블 (예:'목표 막대기 ','실적 막대기')
      data: [100, 120, 115, 134, 168, 180], // 실제 데이터 배열
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
      ], //  그래프 색
    },
  ];

  return (
    <>
      <UIFlex.Row.BaseLine>
        <div>
          <UIButton
            onClick={() =>
              confirm.open({
                title: '안내',
                message: '아이디 또는 비밀번호가 일치하지 않습니다',
                // cancelText: 'asd',
                onConfirm: () => {
                  console.log('asdf');
                },
              })
            }
          >
            모달 오픈
          </UIButton>
          <UIButton
            onClick={() => {
              test({
                inData: { test: 'test' },
                onError: (err) => {
                  console.log(err);
                },
              });
            }}
          >
            api 연결
          </UIButton>
          <UIButton onClick={changePwdModal.open}>비밀번호 변경</UIButton>
          <ChangePwdModal isOpen={changePwdModal.isOpen} close={changePwdModal.close} />
        </div>
      </UIFlex.Row.BaseLine>

      <div className="p-5 overflow-y-auto">
        <div className="grid grid-cols-3 gap-4">
          <UIChart
            ChartType={Doughnut}
            title="asdf"
            datasets={chartDataSet}
            labels={['상품1', '상품2', '상품3', '상품4', '상품5']}
            onDetailClick={() => {
              console.log('자세히보기 클릭');
            }}
          ></UIChart>
        </div>
      </div>
    </>
  );
};

export default Home;
