import { useRef } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

import { UIFlex } from '@/components/UI/atoms/UIFlex';
import { UIAdminLayout } from '@/components/UI/organisms/UILayout/admin';
import { UISearchBar } from '@/components/UI/molecules/UISearchBar';
import { UIButton } from '@/components/UI/atoms/UIButton';
import {
  UITable,
  UITableBody,
  UITableHead,
  UITd,
  UITh,
  UITr,
} from '@/components/UI/molecules/UITable/UITable';
import { UILink } from '@/components/UI/atoms/UILink';

const SalesResult = () => {
  const searchVal = useRef(''); // 검색어

  // 검색버튼 클릭시
  const onSearch = () => {};

  // 수정버튼 클릭시
  const onEdit = () => {};

  // 삭제버튼 클릭시
  const onDelete = () => {};
  return (
    <UIAdminLayout.Basic title={'영업실적 조회'} message="영업실적입니다">
      <UIFlex.Column className="flex-grow gap-2 bg-amber-500 overflow-hidden p-1">
        <UIFlex.Row.Between>
          {/* 검색영역 */}
          <UISearchBar
            ref={searchVal}
            btn={'검색'}
            onSearch={onSearch}
            options={[
              { label: 'aa', value: 'aa' },
              { label: 'qqq', value: 'bb' },
              { label: 'dddddddddddddddddddddddd', value: 'cc' },
              { label: 'qqqqq', value: 'dd' },
            ]}
          />
          {/* 버튼영역 */}
          <UIFlex.Row className="gap-2">
            <UIButton onClick={onEdit}>수정</UIButton>
            <UIButton.Red onClick={onDelete}>삭제</UIButton.Red>
          </UIFlex.Row>
        </UIFlex.Row.Between>
        <UIFlex.Column className="overflow-hidden p-1">
          {/* 테이블은 엑셀파일 확인 이후 dataset 수정 예정  */}
          <UITable>
            <UITableHead>
              <UITr>
                <UITh>d</UITh>
                <UITh>d</UITh>
                <UITh>d</UITh>
                <UITh>d</UITh>
                <UITh>d</UITh>
                <UITh>{''}</UITh>
              </UITr>
            </UITableHead>
            <UITableBody>
              <UITr>
                <UITd>aa</UITd>
                <UITd>aa</UITd>
                <UITd>aa</UITd>
                <UITd>aa</UITd>
                <UITd>aa</UITd>
                <UITd>
                  <input type="checkbox" />
                </UITd>
              </UITr>
            </UITableBody>
          </UITable>
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
export default SalesResult;
