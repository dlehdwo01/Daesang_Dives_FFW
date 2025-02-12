import { UIType } from '../../UIType';

export const UIFlex = ({ children, className }: UIType) => {
  return <div className={`flex bg-white ${className ?? ''}`}>{children}</div>;
};
const Column = ({ children, className }: UIType) => (
  <UIFlex className={`flex-col  ${className ?? ''}`}>{children}</UIFlex>
);

Column.Center = ({ children, className }: UIType) => (
  <UIFlex.Column className={`items-center justify-center  ${className ?? ''}`}>
    {children}
  </UIFlex.Column>
);
Column.Between = ({ children, className }: UIType) => (
  <UIFlex.Column className={`items-center justify-between ${className ?? ''}`}>
    {children}
  </UIFlex.Column>
);
Column.BaseLine = ({ children, className }: UIType) => (
  <UIFlex.Column className={`items-center justify-baseline  ${className ?? ''}`}>
    {children}
  </UIFlex.Column>
);

UIFlex.Column = Column;

const Row = ({ children, className }: UIType) => (
  <UIFlex className={`flex-row  ${className ?? ''}`}>{children}</UIFlex>
);
Row.Center = ({ children, className }: UIType) => (
  <UIFlex.Row className={` items-center justify-center ${className ?? ''}`}>{children}</UIFlex.Row>
);
Row.Between = ({ children, className }: UIType) => (
  <UIFlex.Row className={` items-center justify-between ${className ?? ''}`}>{children}</UIFlex.Row>
);
Row.BaseLine = ({ children, className }: UIType) => (
  <UIFlex.Row className={` items-center justify-baseline ${className ?? ''}`}>
    {children}
  </UIFlex.Row>
);

UIFlex.Row = Row;
