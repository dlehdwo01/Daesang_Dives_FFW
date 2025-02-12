import { useRef } from 'react';

import { UIGrid } from '@/components/UI/atoms/UIGrid';
import { UICard } from '@/components/UI/molecules/UICard';
import { UIChart } from '@/components/UI/organisms/UIChart';
import { UIAdminLayout } from '@/components/UI/organisms/UILayout/admin';
import { UILayout } from '@/components/UI/organisms/UILayout';

const Admin = () => {
  const searchVal = useRef(''); // 검색어

  // 검색버튼 클릭시
  const onSearch = () => {};

  // 수정버튼 클릭시
  const onEdit = () => {};

  // 삭제버튼 클릭시
  const onDelete = () => {};
  const data = [
    {
      label: 'asd',
      data: [1, 2, 3, 4, 5],
      backgroundColor: 'blue',
      borderColor: 'black',
    },
  ];
  return (
    <UIAdminLayout.Basic title={'관리자 홈'}>
      <UIGrid className="grid-cols-4 gap-2 overflow-y-auto flex-grow p-2">
        <UIChart
          title="asdf"
          datasets={data}
          labels={['1', '2', '3', '4', '5']}
          onDetailClick={() => {
            console.log('자세히보기 클릭');
          }}
        ></UIChart>
        <UIChart
          title="asdf"
          datasets={data}
          labels={['1', '2', '3', '4', '5']}
          onDetailClick={() => {
            console.log('자세히보기 클릭');
          }}
        ></UIChart>
        <UIChart
          title="asdf"
          datasets={data}
          labels={['1', '2', '3', '4', '5']}
          onDetailClick={() => {
            console.log('자세히보기 클릭');
          }}
        ></UIChart>
        <UIChart
          title="asdf"
          datasets={data}
          labels={['1', '2', '3', '4', '5']}
          onDetailClick={() => {
            console.log('자세히보기 클릭');
          }}
        ></UIChart>
      </UIGrid>
    </UIAdminLayout.Basic>
  );
};
export default Admin;
