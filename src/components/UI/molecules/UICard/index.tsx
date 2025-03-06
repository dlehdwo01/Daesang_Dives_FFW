import { ReactNode } from 'react';
import { UIFlex } from '../../atoms/UIFlex';
import { UIText } from '../../atoms/UIText';
import { UIProps } from '../../UIProps';
type UICardProps = UIProps & {
  title?: string;
  message?: string;
  children: ReactNode;
};

export const UICard = ({ children, className, title, message }: UICardProps) => {
  return (
    <div
      className={`bg-white px-4 pb-4 pt-8  rounded-3xl shadow shadow-neutral-400 ${className ?? ''}`}
    >
      <UIFlex.Column className="gap-3">
        {title && <UIText.Header>{title}</UIText.Header>}
        {message && <UIText className="break-words">{message}</UIText>}
        {children}
      </UIFlex.Column>
    </div>
  );
};
