import { ReactNode } from 'react';
import { UIFlex } from '../../atoms/UIFlex';

type UILayoutProps = {
  children: ReactNode;
  className?: string;
};

export const UILayout = ({ children, className }: UILayoutProps) => {
  return (
    <>
      <div className={`flex overflow-hidden flex-grow   ${className}`}>{children}</div>
    </>
  );
};

UILayout.Page = ({ children, className }: UILayoutProps) => {
  return (
    <UILayout className={`min-w-[1024px] flex flex-col h-[100vh] min-h-[640px] ${className}`}>
      {children}
    </UILayout>
  );
};

UILayout.Center = ({ children, className }: UILayoutProps) => {
  return <UILayout className={`justify-center items-center ${className}`}>{children}</UILayout>;
};

UILayout.Side = ({ children, className }: UILayoutProps) => {
  return (
    <UIFlex.Column
      className={`min-w-3xs w-3xs border-r border-zinc-300 gap-1 overflow-y-auto ${className}`}
    >
      {children}
    </UIFlex.Column>
  );
};
