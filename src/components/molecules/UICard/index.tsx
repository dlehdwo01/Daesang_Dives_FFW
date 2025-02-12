import { UIProps } from '../../UIProps';

export const UICard = ({ children, className }: UIProps) => {
  return (
    <div
      className={`bg-white px-4 pb-4 pt-8  sm:rounded-3xl sm:px-10 sm:pb-6 sm:shadow shadow-neutral-400 ${className ?? ''}`}
    >
      {children}
    </div>
  );
};
