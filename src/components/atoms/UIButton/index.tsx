type ButtonProps = {
  className?: string;
  children: string;
  onClick?: () => void;
};

export const UIButton = ({ className, children, onClick }: ButtonProps) => {
  return (
    <button
      className={`cursor-pointer rounded bg-gray-100 p-2 text-sm border border-zinc-300 hover:bg-gray-200 font-semibold text-gray-800 ${className}`}
      onClick={() => onClick?.()}
    >
      {children}
    </button>
  );
};

UIButton.Red = ({ className, children, onClick }: ButtonProps) => {
  return (
    <UIButton
      className={`bg-red-100 hover:bg-red-200 !border-red-200 ${className}`}
      onClick={onClick}
    >
      {children}
    </UIButton>
  );
};
