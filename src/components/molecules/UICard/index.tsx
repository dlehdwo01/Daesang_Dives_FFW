import { UIProps } from '../../UIProps';

export const UICard = ({ children, className }: UIProps) => {
  return (
    <div
      className={`bg-white px-4 pb-4 pt-8  rounded-3xl shadow shadow-neutral-400 ${className ?? ''}`}
    >
      {children}
    </div>
  );
};
