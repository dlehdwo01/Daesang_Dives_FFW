import { ReactNode } from 'react';

export const UIButton = ({ className, children }: { className?: string; children: string }) => {
  return (
    <button
      className={`cursor-pointer rounded bg-gray-100 p-2 text-sm border-1 border-[rgba(0,0,0,0.05)] hover:bg-gray-200 font-semibold text-gray-800 ${className}`}
    >
      {children}
    </button>
  );
};
