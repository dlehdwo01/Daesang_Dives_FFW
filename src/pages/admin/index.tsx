import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { Link } from 'react-router-dom';
import { UIButton } from '../../components/atoms/UIButton';
import { UIFlex } from '../../components/atoms/UIFlex';
import { UIAdminLayout } from '../../components/organisms/UILayout/admin';
import { UIInput } from '../../components/atoms/UIInput';
import { UISearchBar } from '../../components/molecules/UISearchBar';
import { useRef } from 'react';
import { UITable } from '../../components/molecules/UITable/UITable';
import { UILink } from '../../components/atoms/UILink';

const Admin = () => {
  const searchVal = useRef(''); // 검색어

  // 검색버튼 클릭시
  const onSearch = () => {};

  // 수정버튼 클릭시
  const onEdit = () => {};

  // 삭제버튼 클릭시
  const onDelete = () => {};
  return (
    <UIAdminLayout.Basic title={'카테고리 이동재'}>
      <UIFlex.Column className="flex-grow gap-2 bg-amber-500 overflow-hidden ">
        <UIFlex.Row.Between>
          {/* 검색영역 */}
          <UISearchBar
            ref={searchVal}
            btn={'검색'}
            onSearch={onSearch}
            options={[{ label: 'aa', value: 'aa' }]}
          />
          {/* 버튼영역 */}
          <UIFlex.Row className="gap-2">
            <UIButton onClick={onEdit}>수정</UIButton>
            <UIButton.Red onClick={onDelete}>삭제</UIButton.Red>
          </UIFlex.Row>
        </UIFlex.Row.Between>
        <UIFlex.Column className="overflow-hidden p-1">
          {/* 테이블은 엑셀파일 확인 이후 dataset 수정 예정  */}
          <UITable
            thead={['컬럼1', '컬럼1', '컬럼1', '컬럼1', '컬럼1', '컬럼1', '컬럼1', '컬럼1']}
            tbody={[
              ['내용1', '내용2', '내용3', '내용1', '내용2', '내용3', '컬럼1', '컬럼1'],
              ['내용1', '내용2', '내용3', '내용1', '내용2', '내용3', '컬럼1', '컬럼1'],
              ['내용1', '내용2', '내용3', '내용1', '내용2', '내용3', '컬럼1', '컬럼1'],
              ['내용1', '내용2', '내용3', '내용1', '내용2', '내용3', '컬럼1', '컬럼1'],
              ['내용1', '내용2', '내용3', '내용1', '내용2', '내용3', '컬럼1', '컬럼1'],
              ['내용1', '내용2', '내용3', '내용1', '내용2', '내용3', '컬럼1', '컬럼1'],
              ['내용1', '내용2', '내용3', '내용1', '내용2', '내용3', '컬럼1', '컬럼1'],
              ['내용1', '내용2', '내용3', '내용1', '내용2', '내용3', '컬럼1', '컬럼1'],
              ['내용1', '내용2', '내용3', '내용1', '내용2', '내용3', '컬럼1', '컬럼1'],
              ['내용1', '내용2', '내용3', '내용1', '내용2', '내용3', '컬럼1', '컬럼1'],
              ['내용1', '내용2', '내용3', '내용1', '내용2', '내용3', '컬럼1', '컬럼1'],
              ['내용1', '내용2', '내용3', '내용1', '내용2', '내용3', '컬럼1', '컬럼1'],
              ['내용1', '내용2', '내용3', '내용1', '내용2', '내용3', '컬럼1', '컬럼1'],
              ['내용1', '내용2', '내용3', '내용1', '내용2', '내용3', '컬럼1', '컬럼1'],
              ['내용1', '내용2', '내용3', '내용1', '내용2', '내용3', '컬럼1', '컬럼1'],
              ['내용1', '내용2', '내용3', '내용1', '내용2', '내용3', '컬럼1', '컬럼1'],
              ['내용1', '내용2', '내용3', '내용1', '내용2', '내용3', '컬럼1', '컬럼1'],
              ['내용1', '내용2', '내용3', '내용1', '내용2', '내용3', '컬럼1', '컬럼1'],
              ['내용1', '내용2', '내용3', '내용1', '내용2', '내용3', '컬럼1', '컬럼1'],
              ['내용1', '내용2', '내용3', '내용1', '내용2', '내용3', '컬럼1', '컬럼1'],
              ['내용1', '내용2', '내용3', '내용1', '내용2', '내용3', '컬럼1', '컬럼1'],
              ['내용1', '내용2', '내용3', '내용1', '내용2', '내용3', '컬럼1', '컬럼1'],
              ['내용1', '내용2', '내용3', '내용1', '내용2', '내용3', '컬럼1', '컬럼1'],
              ['내용1', '내용2', '내용3', '내용1', '내용2', '내용3', '컬럼1', '컬럼1'],
            ]}
          />
          {/* paging */}
          <UIFlex.Row.Center className="gap-2 mt-3 font-bold text-zinc-400">
            <UILink to={'/admin'}>
              <SlArrowLeft size={13} strokeWidth={50} color="oklch(0.551 0.027 264.364)" />
            </UILink>

            {/* 반복부분 */}
            <UILink to={'/admin'}>1</UILink>
            <UILink to={'/admin'} className="!font-bold">
              2
            </UILink>
            <UILink to={'/admin'}>3</UILink>

            <UILink to={'/admin'}>
              <SlArrowRight size={13} strokeWidth={50} color="oklch(0.551 0.027 264.364)" />
            </UILink>
          </UIFlex.Row.Center>
        </UIFlex.Column>
      </UIFlex.Column>
    </UIAdminLayout.Basic>
  );
};
export default Admin;
