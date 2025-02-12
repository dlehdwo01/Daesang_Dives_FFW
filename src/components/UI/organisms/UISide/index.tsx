import { SlArrowRight } from 'react-icons/sl';
import { UIText } from '../../atoms/UIText';
import { UIFlex } from '../../atoms/UIFlex';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

const UICategoryItem = ({ item }: { item: { label: string; url: string } }) => {
  return (
    <Link to={item.url}>
      <UIFlex.Row.Between className="p-4 pr-2 cursor-pointer hover:bg-zinc-100 ">
        <UIText.Title>{item.label}</UIText.Title>
        <SlArrowRight strokeWidth={90} size={15} color="rgba(0,0,0,0.6)" />
      </UIFlex.Row.Between>
    </Link>
  );
};

export const UISide = ({ children }: { children: ReactNode }) => {
  return (
    <UIFlex.Column className="w-2xs border-r border-zinc-300 gap-1 overflow-y-auto">
      {children}
    </UIFlex.Column>
  );
};

UISide.Admin = () => {
  const category = [
    {
      label: '관리자 홈',
      url: '/admin',
    },
    {
      label: '영업실적 등록',
      url: '/admin/sales/insert',
    },
    {
      label: '영업실적 조회',
      url: '/admin/sales/result',
    },
    {
      label: '관리자 카테고리3',
      url: '/admin',
    },
    {
      label: '관리자 카테고리4',
      url: '/admin',
    },
    {
      label: '관리자 카테고리5',
      url: '/admin',
    },
    {
      label: '관리자 카테고리5',
      url: '/admin',
    },
    {
      label: '관리자 카테고리5',
      url: '/admin',
    },
    {
      label: '관리자 카테고리5',
      url: '/admin',
    },
    {
      label: '관리자 카테고리5',
      url: '/admin',
    },
    {
      label: '관리자 카테고리5',
      url: '/admin',
    },
    {
      label: '관리자 카테고리5',
      url: '/admin',
    },
  ];
  return (
    <UISide>
      {category.map((item, index) => (
        <UICategoryItem key={index} item={item} />
      ))}
    </UISide>
  );
};
