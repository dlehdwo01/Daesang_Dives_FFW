import { UIProps } from '../../UIProps';

export const UIFlex = ({ children, className }: UIProps) => {
  return <div className={`flex bg-white ${className ?? ''}`}>{children}</div>;
};
const Column = ({ children, className }: UIProps) => (
  <UIFlex className={`flex-col  ${className ?? ''}`}>{children}</UIFlex>
);

Column.Center = ({ children, className }: UIProps) => (
  <UIFlex.Column className={`items-center justify-center  ${className ?? ''}`}>
    {children}
  </UIFlex.Column>
);
Column.Between = ({ children, className }: UIProps) => (
  <UIFlex.Column className={`items-center justify-between ${className ?? ''}`}>
    {children}
  </UIFlex.Column>
);
Column.BaseLine = ({ children, className }: UIProps) => (
  <UIFlex.Column className={`items-center justify-baseline  ${className ?? ''}`}>
    {children}
  </UIFlex.Column>
);

UIFlex.Column = Column;

const Row = ({ children, className }: UIProps) => (
  <UIFlex className={`flex-row  ${className ?? ''}`}>{children}</UIFlex>
);
Row.Center = ({ children, className }: UIProps) => (
  <UIFlex.Row className={` items-center justify-center ${className ?? ''}`}>{children}</UIFlex.Row>
);
Row.Between = ({ children, className }: UIProps) => (
  <UIFlex.Row className={` items-center justify-between ${className ?? ''}`}>{children}</UIFlex.Row>
);
Row.BaseLine = ({ children, className }: UIProps) => (
  <UIFlex.Row className={` items-center justify-baseline ${className ?? ''}`}>
    {children}
  </UIFlex.Row>
);

UIFlex.Row = Row;
