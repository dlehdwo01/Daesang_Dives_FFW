import { UIProps } from '../../UIProps';

export const UIText = ({ children, className }: UIProps) => {
  return <span className={`text-sm font-medium text-gray-800 ${className ?? ''}`}>{children}</span>;
};

UIText.Title = ({ children, className }: UIProps) => {
  return <UIText className={`!font-bold !text-base ${className ?? ''}`}>{children}</UIText>;
};

UIText.Header = ({ children, className }: UIProps) => {
  return <UIText className={`!font-bold !text-2xl ${className ?? ''}`}>{children}</UIText>;
};
