import { ReactNode } from 'react';
import { UIProps } from '../../UIProps';
import { UICard } from '../UICard';

type TableProps = UIProps & {
  children: ReactNode;
};

export const UITable = ({ children }: { children: ReactNode }) => {
  return (
    <UICard className="!p-0  overflow-y-auto">
      <table className="w-full h-max ">{children}</table>
    </UICard>
  );
};

export const UITableHead = ({ children, className }: TableProps) => {
  return (
    <thead className={`sticky top:0 inset-0 bg-zinc-100 ${className ?? ''}`}>{children}</thead>
  );
};

export const UITableBody = ({ children, className }: TableProps) => {
  return <tbody className={`overflow-y-auto ${className ?? ''}`}>{children}</tbody>;
};

export const UITh = ({ children, className }: TableProps) => {
  return <th className={`border-r-zinc-300 border-r p-2 ${className ?? ''}`}>{children}</th>;
};

export const UITr = ({ children, className }: TableProps) => {
  return <tr className={`text-center border-b border-zinc-300  ${className ?? ''}`}>{children}</tr>;
};

export const UITd = ({ children, className }: TableProps) => {
  return (
    <td
      className={`border-r-zinc-300 border-b-zinc-300 border-b  border-r p-1 max-w-[50px] truncate  ${className ?? ''}`}
    >
      {children}
    </td>
  );
};
