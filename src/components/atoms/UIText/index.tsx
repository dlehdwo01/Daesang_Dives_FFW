import { UIType } from '../../UIType';

export const UIText = ({ children, className }: UIType) => {
  return <span className={`text-zinc-800 ${className}`}>{children}</span>;
};

UIText.Title = ({ children, className }: UIType) => {
  return <UIText className={`font-bold text-lg ${className}`}>{children}</UIText>;
};
