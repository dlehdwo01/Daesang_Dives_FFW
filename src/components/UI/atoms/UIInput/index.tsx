import { RefObject, useEffect, useState } from 'react';

export const UIInput = ({
  ref,
  type,
  placeholder,
}: {
  ref: RefObject<string>;
  type?: string;
  placeholder?: string;
}) => {
  const [input, setInput] = useState<string>('');

  return (
    <input
      type={type}
      placeholder={placeholder}
      className="block w-full rounded-md border appearance-none  border-gray-300 px-3 py-2 placeholder-gray-500 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-gray-400 "
      onChange={(e) => {
        setInput(e.target.value);
        ref.current = input;
      }}
    />
  );
};

UIInput.CheckBox = ({}) => {
  return (
    <input
      type="checkbox"
      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 disabled:cursor-wait disabled:opacity-50"
    />
  );
};
