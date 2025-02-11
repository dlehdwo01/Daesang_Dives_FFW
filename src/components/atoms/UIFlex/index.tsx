import { ReactNode } from 'react';

type UIFlexType = {
  children: ReactNode;
  className?: string;
};
export const UIFlex = ({ children, className }: UIFlexType) => {
  return <div className={`flex ${className}`}>{children}</div>;
};

UIFlex.Columns = ({ children, className }: UIFlexType) => {
  <UIFlex className={`flex-col ${className}`}>{children}</UIFlex>;
};

UIFlex.Row = ({ children, className }: UIFlexType) => (
  <UIFlex className={`flex-row ${className}`}>{children}</UIFlex>
);
