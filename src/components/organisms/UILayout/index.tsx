import { ReactNode } from 'react';

type UILayoutProps = {
  children: ReactNode;
  className?: string;
};

export const UILayout = ({ children, className }: UILayoutProps) => {
  return <div className={`flex overflow-hidden flex-grow ${className}`}>{children}</div>;
};

UILayout.Page = ({ children, className }: UILayoutProps) => {
  return (
    <UILayout className={`min-w-[1024px] flex flex-col h-[100vh] ${className}`}>
      {children}
    </UILayout>
  );
};
