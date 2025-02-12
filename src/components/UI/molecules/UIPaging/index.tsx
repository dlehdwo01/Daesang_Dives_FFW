import { Link } from 'react-router-dom';
import { UIFlex } from '../../atoms/UIFlex';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';

export const UIPaging = ({}) => {
  return (
    <UIFlex.Row.Center className="gap-2 mt-3 font-bold text-zinc-400">
      <Link to={'/admin'}>
        <SlArrowLeft size={13} strokeWidth={80} />
      </Link>

      {/* 반복부분 */}
      <Link to={'/admin'}>1</Link>
      <Link to={'/admin'} className="text-zinc-700">
        2
      </Link>
      <Link to={'/admin'}>3</Link>

      <Link to={'/admin'}>
        <SlArrowRight size={13} strokeWidth={80} />
      </Link>
    </UIFlex.Row.Center>
  );
};
