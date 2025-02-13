import { UIFlex } from '@/components/UI/atoms/UIFlex';
import { ReactNode } from 'react';
import { UILayout } from '.';
import { UIText } from '../../atoms/UIText';
import { SideCategoryItem } from './side';

export const UIAdminLayout = () => {
  return (
    <>
      <div></div>
    </>
  );
};

// 관리자 화면 레이아웃
UIAdminLayout.Basic = ({
  title,
  message,
  children,
}: {
  title: string;
  message?: string;
  children: ReactNode;
}) => {
  return (
    <UIFlex.Row className="flex-grow overflow-hidden">
      <UILayout.Side>
        {adminCategory.map((item, index) => (
          <SideCategoryItem key={index} item={item} />
        ))}
      </UILayout.Side>

      <UIFlex.Column className="p-5 gap-5 flex-grow overflow-hidden">
        {/* <UIText>관리자</UIText>
          <br /> */}
        <UIText.Header className="!text-3xl">{title}</UIText.Header>
        {message && <UIText>{message}</UIText>}
        {children}
      </UIFlex.Column>
    </UIFlex.Row>
  );
};

export const adminCategory = [
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
    label: '유저관리',
    url: '/admin/user',
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
