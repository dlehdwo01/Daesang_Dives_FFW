import { ReactNode } from 'react';

type UILayoutProps = {
  children: ReactNode;
  className?: string;
};

export const UILayout = ({ children, className }: UILayoutProps) => {
  return <div className={`flex overflow-hidden flex-grow ${className}`}>{children}</div>;
};

UILayout.PageContainer = ({ children, className }: UILayoutProps) => {
  return (
    <UILayout className={`min-w-[1024px] flex flex-col h-[100vh] ${className}`}>
      {children}
    </UILayout>
  );
};

UILayout.Row = ({ children, className }: UILayoutProps) => {
  return <UILayout className={`${className}`}>{children}</UILayout>;
};
UILayout.Column = ({ children, className }: UILayoutProps) => {
  return <UILayout className={`flex-col ${className}`}>{children}</UILayout>;
};

UILayout.Center = ({ children, className }: UILayoutProps) => {
  return (
    <UILayout className={`w-full items-center justify-center ${className}`}>{children}</UILayout>
  );
};

UILayout.Between = ({ children, className }: UILayoutProps) => {
  return <UILayout className={` items-center justify-between ${className}`}>{children}</UILayout>;
};
