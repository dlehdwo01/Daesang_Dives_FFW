import { UIProps } from '../../UIProps';

type ButtonProps = UIProps & {
  onClick?: () => void;
};

export const UIButton = ({ className, children, onClick }: ButtonProps) => {
  return (
    <button
      className={`cursor-pointergroup relative flex w-full justify-center rounded-md border border-transparent bg-gray-400 px-4 py-2 text-sm font-medium text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:cursor-wait disabled:opacity-50 ${className}`}
      onClick={() => onClick?.()}
    >
      {children}
    </button>
  );
};

UIButton.Red = ({ className, children, onClick }: ButtonProps) => {
  return (
    <UIButton
      className={`bg-red-300 hover:bg-red-400  focus:ring-red-400 ${className}`}
      onClick={onClick}
    >
      {children}
    </UIButton>
  );
};

UIButton.Submit = ({ className, children, onClick }: ButtonProps) => {
  return (
    <UIButton
      className={`!bg-[#695fbf] !hover:bg-[#5a51a6]  !focus:ring-[#695fbf] ${className}`}
      onClick={onClick}
    >
      {children}
    </UIButton>
  );
};
