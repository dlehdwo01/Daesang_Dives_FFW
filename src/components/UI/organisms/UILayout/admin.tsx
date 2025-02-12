import { ReactNode } from 'react';
import { UIFlex } from '../../atoms/UIFlex';
import { UIText } from '../../atoms/UIText';
import { UISide } from '../UISide';

export const UIAdminLayout = () => {
  return (
    <>
      <div></div>
    </>
  );
};

// 관리자 화면 레이아웃
UIAdminLayout.Basic = ({ title, children }: { title: string; children: ReactNode }) => {
  return (
    <UIFlex.Row className="flex-grow overflow-hidden">
      <UISide.Admin />
      <UIFlex.Column className="p-5 gap-5 flex-grow overflow-hidden">
        {/* <UIText>관리자</UIText>
          <br /> */}
        <UIText.Header className="!text-3xl">{title}</UIText.Header>
        {children}
      </UIFlex.Column>
    </UIFlex.Row>
  );
};
