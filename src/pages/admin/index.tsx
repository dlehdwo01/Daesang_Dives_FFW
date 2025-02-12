import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { Link } from 'react-router-dom';
import { UIButton } from '../../components/atoms/UIButton';
import { UIFlex } from '../../components/atoms/UIFlex';
import { UIAdminLayout } from '../../components/organisms/UILayout/admin';
import { UIInput } from '../../components/atoms/UIInput';
import { UISearchBar } from '../../components/molecules/UISearchBar';
import { useRef } from 'react';
import { UITabel } from '../../components/molecules/UITable/UITable';

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
      <UIFlex.Column className="flex-grow gap-2 bg-amber-500 overflow-hidden">
        <UIFlex.Row.Between>
          {/* 검색영역 */}
          <UISearchBar
            ref={searchVal}
            title={'검색'}
            btn={'조회'}
            onSearch={onSearch}
            options={[{ label: 'aa', value: 'aa' }]}
          />
          {/* 버튼영역 */}
          <UIFlex.Row className="gap-2">
            <UIButton onClick={onEdit}>수정</UIButton>
            <UIButton onClick={onDelete}>삭제</UIButton>
          </UIFlex.Row>
        </UIFlex.Row.Between>
        <UIFlex.Column className="overflow-hidden">
          {/* h-[539px]  */}
          <UITabel
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
            ]}
          />
          {/* paging */}
          <UIFlex.Row.Center className="gap-2 mt-3 font-bold text-zinc-400">
            <Link to={'/admin'}>
              <SlArrowLeft size={13} strokeWidth={80} />
            </Link>

            {/* 반복부분 */}
            <Link to={'/admin'}>1</Link>
            <Link to={'/admin'} className="text-zinc-700">
              2
            </Link>
            <Link to={'/admin'}>3</Link>

            <Link to={'/admin'}>
              <SlArrowRight size={13} strokeWidth={80} />
            </Link>
          </UIFlex.Row.Center>
        </UIFlex.Column>
      </UIFlex.Column>
    </UIAdminLayout.Basic>
  );
};
export default Admin;
