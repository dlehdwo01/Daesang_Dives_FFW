import { Link } from 'react-router-dom';
import { UIProps } from '../../UIProps';
import { ReactNode } from 'react';

type LinkProps = UIProps & {
  to: string;
  onClick?: () => void;
  children: ReactNode;
};

export const UILink = ({ children, className, to, onClick }: LinkProps) => {
  return (
    <Link
      to={to}
      className={`font-medium text-gray-500 hover:text-gray-400 ${className}`}
      onClick={(e) => {
        if (to === '#') {
          e.preventDefault();
        }
        onClick?.();
      }}
    >
      {children}
    </Link>
  );
};
