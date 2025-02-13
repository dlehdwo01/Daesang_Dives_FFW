import { ReactNode } from 'react';
import { UICard } from '../UICard';
import { UIProps } from '../../UIProps';

export const UITable = ({ children }: { children: ReactNode }) => {
  return (
    <UICard className="!p-0  overflow-y-auto">
      <table className="w-full h-max ">
        {children}
        {/* <thead className="sticky top:0 inset-0">
          <tr className="text-center border-b border-zinc-300 bg-zinc-100 ">
            {thead.map((item, index) => (
              <th key={index} className="border-r-zinc-300 border-r p-2">
                {item}
              </th>
            ))}
            <th className=""></th>
          </tr>
        </thead>
        <tbody className="overflow-y-auto">
          {tbody.map((record, index) => {
            return (
              <tr className={`text-center border-zinc-300  `} key={index}>
                {record.map((item, index2) => {
                  return (
                    <td
                      className="border-r-zinc-300 border-b-zinc-300 border-b  border-r p-1 max-w-[50px] truncate "
                      key={index + '-' + index2}
                    >
                      {item}
                    </td>
                  );
                })}
                <td className="text-center p-1 border-b-zinc-300 border-b">
                  <input type="checkbox"></input>
                </td>
              </tr>
            );
          })}
        </tbody> */}
      </table>
    </UICard>
  );
};

export const UITableHead = ({ children, className }: UIProps) => {
  return (
    <thead className={`sticky top:0 inset-0 bg-zinc-100 ${className ?? ''}`}>{children}</thead>
  );
};

export const UITableBody = ({ children, className }: UIProps) => {
  return <tbody className={`overflow-y-auto ${className ?? ''}`}>{children}</tbody>;
};

export const UITh = ({ children, className }: UIProps) => {
  return <th className={`border-r-zinc-300 border-r p-2 ${className ?? ''}`}>{children}</th>;
};

export const UITr = ({ children, className }: UIProps) => {
  return <tr className={`text-center border-b border-zinc-300  ${className ?? ''}`}>{children}</tr>;
};

export const UITd = ({ children, className }: UIProps) => {
  return (
    <td
      className={`border-r-zinc-300 border-b-zinc-300 border-b  border-r p-1 max-w-[50px] truncate  ${className ?? ''}`}
    >
      {children}
    </td>
  );
};
