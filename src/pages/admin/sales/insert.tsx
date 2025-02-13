import { UIButton } from '../../../components/UI/atoms/UIButton';
import { UIFlex } from '../../../components/UI/atoms/UIFlex';
import {
  UITable,
  UITableBody,
  UITableHead,
  UITd,
  UITh,
  UITr,
} from '../../../components/UI/molecules/UITable/UITable';
import { UIAdminLayout } from '../../../components/UI/organisms/UILayout/admin';

const SalesInsert = () => {
  return (
    <UIAdminLayout.Basic title="영업실적 등록" message="엑셀파일을 등록하여 편하게 등록하삼">
      <UIFlex.Column className="overflow-hidden p-2 gap-2">
        <UIFlex.Row.End>
          <UIFlex.Row className="gap-3">
            <UIButton.Green>Excel 등록</UIButton.Green>
            <UIButton.Red>선택 삭제</UIButton.Red>
          </UIFlex.Row>
        </UIFlex.Row.End>
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
        <UIFlex.Row.End>
          <UIButton.Submit className="!w-fit">등록하기</UIButton.Submit>
        </UIFlex.Row.End>
      </UIFlex.Column>
    </UIAdminLayout.Basic>
  );
};
export default SalesInsert;
