import { UIFlex } from '@/components/UI/atoms/UIFlex';
import { UIChart } from '@/components/UI/organisms/UIChart';
import { UIAdminLayout } from '@/components/UI/organisms/UILayout/admin';
import { Bar } from 'react-chartjs-2';

const Admin = () => {
  // const searchVal = useRef(''); // 검색어

  // 검색버튼 클릭시
  // const onSearch = () => {};

  // 수정버튼 클릭시
  // const onEdit = () => {};

  // 삭제버튼 클릭시
  // const onDelete = () => {};
  const data = [
    {
      label: 'asd',
      data: [1, 2, 3, 4, 5],
      backgroundColor: 'blue',
      borderColor: 'black',
    },
  ];
  return (
    <UIAdminLayout.Basic title={'관리자 홈'} message="관리자 홈입니다">
      <UIFlex.Row className="flex-wrap gap-5 overflow-y-auto p-2">
        <UIChart
          ChartType={Bar}
          title="asdf"
          datasets={data}
          labels={['1', '2', '3', '4', '5']}
          onDetailClick={() => {
            console.log('자세히보기 클릭');
          }}
        ></UIChart>
        <UIChart
          ChartType={Bar}
          title="asdf"
          datasets={data}
          labels={['1', '2', '3', '4', '5']}
          onDetailClick={() => {
            console.log('자세히보기 클릭');
          }}
        ></UIChart>
        <UIChart
          ChartType={Bar}
          title="asdf"
          datasets={data}
          labels={['1', '2', '3', '4', '5']}
          onDetailClick={() => {
            console.log('자세히보기 클릭');
          }}
        ></UIChart>
        <UIChart
          ChartType={Bar}
          title="asdf"
          datasets={data}
          labels={['1', '2', '3', '4', '5']}
          onDetailClick={() => {
            console.log('자세히보기 클릭');
          }}
        ></UIChart>
      </UIFlex.Row>
    </UIAdminLayout.Basic>
  );
};
export default Admin;
