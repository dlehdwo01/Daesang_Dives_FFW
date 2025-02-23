import { Link } from 'react-router-dom';
import { UIFlex } from '../../atoms/UIFlex';
import { SlArrowRight } from 'react-icons/sl';
import { UIText } from '../../atoms/UIText';
import React from 'react';

export const SideCategoryItem = React.memo(({ item }: { item: { label: string; url: string } }) => {
  return (
    <Link to={item.url}>
      <UIFlex.Row.Between className="p-4 pr-2 cursor-pointer hover:bg-zinc-100 ">
        <UIText>{item.label}</UIText>
        <SlArrowRight strokeWidth={50} size={15} color="rgba(0,0,0,0.6)" />
      </UIFlex.Row.Between>
    </Link>
  );
});
