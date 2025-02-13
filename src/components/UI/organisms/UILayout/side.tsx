import { Link } from 'react-router-dom';
import { UIFlex } from '../../atoms/UIFlex';
import { SlArrowRight } from 'react-icons/sl';
import { UIText } from '../../atoms/UIText';

export const SideCategoryItem = ({ item }: { item: { label: string; url: string } }) => {
  return (
    <Link to={item.url}>
      <UIFlex.Row.Between className="p-4 pr-2 cursor-pointer hover:bg-zinc-100 ">
        <UIText.Title>{item.label}</UIText.Title>
        <SlArrowRight strokeWidth={90} size={15} color="rgba(0,0,0,0.6)" />
      </UIFlex.Row.Between>
    </Link>
  );
};
