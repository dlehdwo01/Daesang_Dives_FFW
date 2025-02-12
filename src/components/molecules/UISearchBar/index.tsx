import { Ref, RefObject, useRef, useState } from 'react';
import { UIFlex } from '../../atoms/UIFlex';
import { UIInput } from '../../atoms/UIInput';
import { UIText } from '../../atoms/UIText';
import { UIButton } from '../../atoms/UIButton';

export const UISearchBar = ({
  ref,
  onSearch,
  title,
  btn,
  options,
}: {
  ref: RefObject<string>;
  onSearch: () => void;
  title?: string;
  btn?: string;
  options?: { label: string; value: string }[];
}) => {
  return (
    <UIFlex.Row className="gap-2 items-center">
      <UIText className="font-semibold">{title ?? '검색'}</UIText>
      <UIInput ref={ref} />

      {options && (
        <select className="text-xs p-1 border-1 rounded">
          {options?.map((option) => (
            <option value={option.value} className="w-fit">
              {option.label}
            </option>
          ))}
        </select>
      )}
      <UIButton onClick={onSearch} className="!p-1 text-sm">
        {btn ?? '검색'}
      </UIButton>
    </UIFlex.Row>
  );
};
