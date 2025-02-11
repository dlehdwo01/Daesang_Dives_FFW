import { Link, useNavigate } from 'react-router-dom';
import { callTest } from '../../api/test';
import { UIButton } from '../../components/atoms/UIButton';
import { useConfirmStore } from '../../components/organisms/UIConfirm/store';
import { Bar } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Chart.js 등록
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Home = () => {
  const navigator = useNavigate();
  const confirm = useConfirmStore();
  const { test } = callTest();

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

  return (
    <div>
      <UIButton
        onClick={() =>
          confirm.open({
            title: '제목',
            message: '하이',
            cancelText: '취소',
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
      <div className="p-5">
        <div className="grid grid-cols-3 gap-4">
          {/* Contents 1 Box */}
          {[1, 2, 3].map((item) => (
            <div className=" p-4 border-zinc-300 border-1 rounded">
              {/* Top */}
              <div className="flex justify-between items-center">
                <div className="font-bold">예시용 Chart</div>
                <Link to={'/home'} className="text-sm">
                  자세히 보기
                </Link>
              </div>

              {/* Mid */}
              <div className="bg-white text-black p-4 mt-3 border-1 border-zinc-300 rounded h-[300px]">
                <Bar options={options} data={chartData} />
              </div>

              {/* Bottom */}
              <div className="mt-4">
                <div className="flex justify-between text-sm">
                  <span>목표: {chartData.datasets[0].data[5]}건</span>
                  <span>실적: {chartData.datasets[1].data[5]}건</span>
                </div>
              </div>
            </div>
          ))}

          <div className=" p-4 border-zinc-300 border-1 rounded">
            {/* Top */}
            <div className="flex justify-between items-center">
              <div className="font-bold">예시용 Chart</div>
              <Link to={'/home'} className="text-sm">
                자세히 보기
              </Link>
            </div>

            {/* Mid */}
            <div className="bg-white text-black p-4 mt-3 border-1 border-zinc-300 rounded">
              <Bar options={options} data={chartData} />
            </div>

            {/* Bottom */}
            <div className="mt-4">
              <div className="flex justify-between text-sm">
                <span>목표: {chartData.datasets[0].data[5]}건</span>
                <span>실적: {chartData.datasets[1].data[5]}건</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
