import { Link } from 'react-router-dom';
import { UIProps } from '../../UIProps';

type UILinkProps = UIProps & {
  to: string;
};

export const UILink = ({ children, className, to }: UILinkProps) => {
  return (
    <Link to={to} className={`font-medium text-gray-500 hover:text-gray-400 ${className}`}>
      {children}
    </Link>
  );
};
