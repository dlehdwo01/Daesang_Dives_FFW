import { ReactNode } from 'react';
import { UIProps } from '../../UIProps';

type TextType = UIProps & {
  children: ReactNode;
};

export const UIText = ({ children, className }: TextType) => {
  return <span className={`text-sm font-medium text-gray-800 ${className ?? ''}`}>{children}</span>;
};

UIText.Title = ({ children, className }: TextType) => {
  return <UIText className={`!font-bold !text-base ${className ?? ''}`}>{children}</UIText>;
};

UIText.Header = ({ children, className }: TextType) => {
  return <UIText className={`!font-bold !text-xl ${className ?? ''}`}>{children}</UIText>;
};
