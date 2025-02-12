import { RefObject } from 'react';
import { UIButton } from '../../atoms/UIButton';
import { UIFlex } from '../../atoms/UIFlex';
import { UIInput } from '../../atoms/UIInput';

export const UISearchBar = ({
  ref,
  onSearch,
  btn,
  options,
}: {
  ref: RefObject<string>;
  onSearch: () => void;
  btn?: string;
  options?: { label: string; value: string }[];
}) => {
  return (
    <UIFlex.Row className="p-2 gap-2 items-center">
      <div>
        <UIInput ref={ref} />
      </div>

      <div>
        {options && (
          <select className="block w-full  rounded-md border border-gray-300 px-3 py-2 placeholder-gray-500 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-gray-400">
            {options?.map((option) => (
              <option value={option.value} className="w-fit">
                {option.label}
              </option>
            ))}
          </select>
        )}
      </div>
      <div>
        <UIButton onClick={onSearch}>{btn ?? '검색'}</UIButton>
      </div>
    </UIFlex.Row>
  );
};
