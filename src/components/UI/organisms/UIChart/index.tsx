import { Bar, Doughnut, Pie } from 'react-chartjs-2';
import { chartProps } from './type';
// chatjs 사용할때 그래프 표현에 필요한 import 설정 부분
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { UICard } from '../../molecules/UICard';
import { UIFlex } from '../../atoms/UIFlex';
import { UIText } from '../../atoms/UIText';
import { UIButton } from '../../atoms/UIButton';
import ChartDataLabels from 'chartjs-plugin-datalabels'; // 추가
// Chart.js 등록
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  //ChartDataLabels, -> 막대에 text 삽입
);

export const UIChart = ({
  title,
  labels,
  datasets,
  onDetailClick,
  ChartType,
}: chartProps & { ChartType: any }) => {
  const chartData = {
    labels,
    datasets,
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: title,
      },
    },

    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <UICard className="h-fit">
      <UIFlex.Row.Between>
        <UIText.Title>{title}</UIText.Title>
        {onDetailClick && (
          <div>
            <UIButton onClick={onDetailClick} className="text-sm">
              상세 보기
            </UIButton>
          </div>
        )}
      </UIFlex.Row.Between>

      <div className="bg-white text-black p-4 mt-3 border-1 border-zinc-300 rounded h-[300px]">
        <ChartType type={ChartType} options={options} data={chartData} />
      </div>

      <UIFlex.Row.Between className="mt-4">테스트</UIFlex.Row.Between>
    </UICard>
  );
};
