import { Bar } from 'react-chartjs-2';
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
);

//차트 컴포넌트
export const UIChart = ({ title, labels, datasets, onDetailClick }: chartProps) => {
  // 차트 데이터 구조화
  const chartData = {
    labels, //x 축 레이블
    datasets, // 데이터 셋
  };
  //차트 옵션 설정 (여기서 애니메이션,이벤트헨들링 , 플러그인 등등 설정 가능함 .)
  const options = {
    responsive: true, // 반응형 설정
    maintainAspectRatio: false, // 종비 유지 해제

    plugins: {
      // 범례 설정
      legend: {
        position: 'top' as const, // 범례 위치
      },
      title: {
        display: true, // 제목 표시
        text: title, // 제목 텍스트
      },
    },
    // 스케일 설정
    scales: {
      y: {
        beginAtZero: true, // y축 0부터 시작
      },
    },
  };

  return (
    <UICard className="h-fit">
      {/* Top */}
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

      {/* Mid */}
      <div className="bg-white text-black p-4 mt-3 border-1 border-zinc-300 rounded h-[300px]">
        <Bar options={options} data={chartData} />
      </div>

      {/* Bottom */}
      <UIFlex.Row.Between className="mt-4">
        asd
        {/* <UIText>목표: {datasets[0].data[5]}건</UIText>
        <UIText>실적: {datasets[1].data[5]}건</UIText> */}
      </UIFlex.Row.Between>
    </UICard>
  );
};
