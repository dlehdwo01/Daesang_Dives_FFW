export const UIButton = ({ className, children }: { className?: string; children: string }) => {
  return (
    <button
      className={`cursor-pointer rounded bg-gray-100 p-2 text-sm border-1 border-zinc-300 hover:bg-gray-200 font-semibold text-gray-800 ${className}`}
    >
      {children}
    </button>
  );
};

UIButton.Red = ({ children }: { children: string }) => {
  return <UIButton className="bg-red-100 hover:bg-red-200">{children}</UIButton>;
};
