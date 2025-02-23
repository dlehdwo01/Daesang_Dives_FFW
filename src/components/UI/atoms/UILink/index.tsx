import { Link } from 'react-router-dom';
import { UIProps } from '../../UIProps';

type UILinkProps = UIProps & {
  to: string;
  onClick?: () => void;
};

export const UILink = ({ children, className, to, onClick }: UILinkProps) => {
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
