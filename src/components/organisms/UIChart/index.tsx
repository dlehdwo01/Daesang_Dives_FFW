import { Bar } from 'react-chartjs-2';
import { chartProps } from './type';
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

//차트 컴포넌트
export const UIChart = ({ title, labels, datasets, onDetailClick }: chartProps) => {
  // 차트 데이터 구조화
  const chartData = {
    labels, //x 축 레이블
    datasets, // 데이터 셋
  };
  //차트 옵션 설정
  const options = {
    responsive: true, // 반응형 설정
    maintainAspectRatio: false, // 종비 유지 해제
    plugins: {
      legend: {
        position: 'top' as const, // 범례 위치
      },
      title: {
        display: true, // 제목 표시
        text: title, // 제목 텍스트
      },
    },
    scales: {
      y: {
        beginAtZero: true, // y축 0부터 시작
      },
    },
  };

  return (
    <div className="p-4 border-zinc-300 border-1 rounded">
      {/* Top */}
      <div className="flex justify-between items-center">
        <div className="font-bold">{title}</div>
        <button onClick={onDetailClick} className="text-sm">
          자세히 보기
        </button>
      </div>

      {/* Mid */}
      <div className="bg-white text-black p-4 mt-3 border-1 border-zinc-300 rounded h-[300px]">
        <Bar options={options} data={chartData} />
      </div>

      {/* Bottom */}
      {/*
      <div className="mt-4">
        <div className="flex justify-between text-sm">
          <span>목표: {datasets[0].data[5]}건</span>
          <span>실적: {datasets[1].data[5]}건</span>
        </div>
      </div>
       */}
    </div>
  );
};
