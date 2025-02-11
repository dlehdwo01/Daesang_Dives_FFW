import { ReactNode } from 'react';
import { UISide } from '../UISide';
import { UILayout } from '.';

export const UIMainLayout = () => {
  return (
    <>
      <div></div>
    </>
  );
};

// 관리자 화면 레이아웃
UIMainLayout.Admin = ({ title, children }: { title: string; children: ReactNode }) => {
  return (
    <UILayout.Row>
      <UISide />
      <div className="flex flex-col p-5 gap-16 flex-grow overflow-y-auto">
        <div>
          <div>관리자</div>
          <div className="font-extrabold text-3xl">{title}</div>
        </div>
        {children}
      </div>
    </UILayout.Row>
  );
};
