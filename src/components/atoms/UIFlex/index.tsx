import { JSX, ReactNode } from 'react';

type UIFlexType = {
  children: ReactNode;
  className?: string;
};
export const UIFlex = ({ children, className }: UIFlexType) => {
  return <div className={`flex flex-grow ${className}`}>{children}</div>;
};
const Column = ({ children, className }: UIFlexType) => (
  <UIFlex className={`flex-col ${className}`}>{children}</UIFlex>
);

Column.Center = ({ children, className }: UIFlexType) => (
  <UIFlex.Column className={`items-center justify-center  ${className}`}>{children}</UIFlex.Column>
);
Column.Between = ({ children, className }: UIFlexType) => (
  <UIFlex.Column className={`items-center justify-between ${className}`}>{children}</UIFlex.Column>
);
Column.BaseLine = ({ children, className }: UIFlexType) => (
  <UIFlex.Column className={`items-center justify-baseline  ${className}`}>
    {children}
  </UIFlex.Column>
);

UIFlex.Column = Column;

const Row = ({ children, className }: UIFlexType) => (
  <UIFlex className={`flex-row  ${className}`}>{children}</UIFlex>
);
Row.Center = ({ children, className }: UIFlexType) => (
  <UIFlex.Row className={`items-center justify-center ${className}`}>{children}</UIFlex.Row>
);
Row.Between = ({ children, className }: UIFlexType) => (
  <UIFlex.Row className={`items-center justify-between ${className}`}>{children}</UIFlex.Row>
);
Row.BaseLine = ({ children, className }: UIFlexType) => (
  <UIFlex.Row className={`items-center justify-baseline ${className}`}>{children}</UIFlex.Row>
);

UIFlex.Row = Row;
