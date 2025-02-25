import { UIProps } from '../../UIProps';

export const UISelect = ({ children, className }: UIProps) => {
  return (
    <select
      className={`block w-full  rounded-md border border-gray-300 px-3 py-2 placeholder-gray-500 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-gray-400 ${className}`}
    >
      {children}
    </select>
  );
};
