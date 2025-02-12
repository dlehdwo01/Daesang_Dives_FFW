// 차트 데이터셋 타입 정의
export type chartDataSet = {
  label?: string; // 데이터 레이블 (예:'목표 막대기 ','실적 막대기')
  data: number[]; // 실제 데이터 배열
  backgroundColor: string; //  그래프 색
};

// 차트 컴포넌트의 props 타입 정의
export type chartProps = {
  title?: string; // 차트 제목
  labels?: string[]; // x축 레이블
  datasets: chartDataSet[]; // chartDataSet 배열
  onDetailClick?: () => void; // 상세보기 클릭 핸들러
};
