import { ReactNode } from 'react';
import { UIProps } from '../../UIProps';

type FlexType = UIProps & {
  children: ReactNode;
};

export const UIFlex = ({ children, className }: FlexType) => {
  return <div className={`flex bg-white ${className ?? ''}`}>{children}</div>;
};
const Column = ({ children, className }: FlexType) => (
  <UIFlex className={`flex-col  ${className ?? ''}`}>{children}</UIFlex>
);

Column.Center = ({ children, className }: FlexType) => (
  <UIFlex.Column className={`items-center justify-center  ${className ?? ''}`}>
    {children}
  </UIFlex.Column>
);
Column.Between = ({ children, className }: FlexType) => (
  <UIFlex.Column className={`items-center justify-between ${className ?? ''}`}>
    {children}
  </UIFlex.Column>
);
Column.BaseLine = ({ children, className }: FlexType) => (
  <UIFlex.Column className={`items-center justify-baseline  ${className ?? ''}`}>
    {children}
  </UIFlex.Column>
);

UIFlex.Column = Column;

const Row = ({ children, className }: FlexType) => (
  <UIFlex className={`flex-row  ${className ?? ''}`}>{children}</UIFlex>
);
Row.Center = ({ children, className }: FlexType) => (
  <UIFlex.Row className={` items-center justify-center ${className ?? ''}`}>{children}</UIFlex.Row>
);
Row.Between = ({ children, className }: FlexType) => (
  <UIFlex.Row className={` items-center justify-between ${className ?? ''}`}>{children}</UIFlex.Row>
);
Row.BaseLine = ({ children, className }: FlexType) => (
  <UIFlex.Row className={` items-center justify-baseline ${className ?? ''}`}>
    {children}
  </UIFlex.Row>
);
Row.End = ({ children, className }: FlexType) => (
  <UIFlex.Row className={` items-center justify-end ${className ?? ''}`}>{children}</UIFlex.Row>
);

UIFlex.Row = Row;
