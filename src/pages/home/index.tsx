import { Link, useNavigate } from 'react-router-dom';
import { callTest } from '../../api/test';
import { useConfirmStore } from '../../components/UI/organisms/UIConfirm/store';
import { UIFlex } from '../../components/UI/atoms/UIFlex';
import { UIButton } from '../../components/UI/atoms/UIButton';
import { UIChart } from '../../components/UI/organisms/UIChart';
import { ChangePwdModal } from '../../components/ChangePwdModal';

const Home = () => {
  const navigator = useNavigate();
  const confirm = useConfirmStore();
  const { test } = callTest();
  {
    /*
  // 차트 데이터
  const chartData = {
    labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    datasets: [
      {
        label: '목표',
        data: [100, 120, 115, 134, 168, 180],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: '실적',
        data: [80, 100, 105, 140, 150, 170],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
    ],
  };

  // 차트 옵션
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: '월별 목표/실적 현황',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
*/
  }
  const chartConfigs = [
    {
      title: '총 실적 표 ',
      labels: [
        '1월',
        '2월',
        '3월',
        '4월',
        '5월',
        '6월',
        '7월',
        '8월',
        '9월',
        '10월',
        '11월',
        '12월',
      ],
      datasets: [
        {
          label: '테스트1',
          data: [100, 120, 115, 134, 168, 180],
          backgroundColor: 'rgba(9999, 99, 00, 8)',
        },
        {
          label: '테스트2',
          data: [80, 100, 105, 140, 150, 170],
          backgroundColor: 'rgba(75, 192, 192, 0.5)',
        },
      ],
    },
  ];

  return (
    <>
      <UIFlex.Row.BaseLine>
        <div>
          <UIButton
            onClick={() =>
              confirm.open({
                title: '알림',
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
        </div>
      </UIFlex.Row.BaseLine>
      <div className="p-5 overflow-y-auto">
        <div className="grid grid-cols-3 gap-4">
          {/* 컴포넌트 차트 */}
          {chartConfigs.map((config, index) => (
            <UIChart
              key={index}
              {...config}
              onDetailClick={() => {
                console.log(`${config.title} 상세 보기`);
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
