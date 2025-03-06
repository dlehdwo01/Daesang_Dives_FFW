import { ReactNode } from 'react';
import { UIProps } from '../../UIProps';

type ButtonProps = UIProps<HTMLButtonElement | null> & {
  onClick?: () => void;
  children: ReactNode;
  onKeyDown?: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
};

export const UIButton = ({
  className,
  children,
  onClick,
  ref,
  onKeyDown,
  disabled,
}: ButtonProps) => {
  return (
    <button
      className={` whitespace-nowrap cursor-pointer group relative flex w-full justify-center items-center rounded-md border border-transparent bg-gray-400 px-4 py-2 text-sm font-medium text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:cursor-wait disabled:opacity-50 ${className ?? ''} `}
      onClick={() => onClick?.()}
      ref={ref}
      onKeyDown={(e) => {
        onKeyDown?.(e);
      }}
      disabled={disabled ?? false}
    >
      {children}
    </button>
  );
};

UIButton.Red = ({ className, children, onClick, ref, onKeyDown, disabled }: ButtonProps) => {
  return (
    <UIButton
      className={` bg-red-300 hover:bg-red-400  focus:ring-red-400  ${className ?? ''}`}
      onClick={onClick}
      ref={ref}
      onKeyDown={(e) => onKeyDown?.(e)}
      disabled={disabled ?? false}
    >
      {children}
    </UIButton>
  );
};

UIButton.Green = ({ className, children, onClick, ref, onKeyDown, disabled }: ButtonProps) => {
  return (
    <UIButton
      className={`bg-green-400 hover:bg-green-500  focus:ring-green-400  ${className ?? ''}`}
      onClick={onClick}
      ref={ref}
      onKeyDown={(e) => onKeyDown?.(e)}
      disabled={disabled ?? false}
    >
      {children}
    </UIButton>
  );
};

UIButton.Submit = ({ className, children, onClick, ref, onKeyDown, disabled }: ButtonProps) => {
  return (
    <UIButton
      className={`!bg-[#695fbf]  focus:ring-indigo-800 ${className ?? ''}`}
      onClick={onClick}
      ref={ref}
      onKeyDown={(e) => onKeyDown?.(e)}
      disabled={disabled ?? false}
    >
      {children}
    </UIButton>
  );
};
