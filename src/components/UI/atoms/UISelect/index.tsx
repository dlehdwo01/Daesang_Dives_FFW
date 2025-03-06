import { ReactNode } from 'react';
import { UIProps } from '../../UIProps';

type SelectType = UIProps & {
  children: ReactNode;
};
export const UISelect = ({ children, className }: SelectType) => {
  return (
    <select
      className={`block w-full  rounded-md border border-gray-300 px-3 py-2 placeholder-gray-500 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-gray-400 ${className}`}
    >
      {children}
    </select>
  );
};
