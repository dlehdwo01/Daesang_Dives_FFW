import { RefObject, useEffect, useState } from 'react';

export const UIInput = ({
  ref,
  type,
  placeholder,
  onKeyDown,
}: {
  ref: RefObject<HTMLInputElement | null>;
  type?: string;
  placeholder?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}) => {
  const [input, setInput] = useState<string>('');
  useEffect(() => {
    if (ref.current !== null) {
      ref.current.value = input;
    }
  }, [input]);

  return (
    <input
      ref={ref}
      type={type}
      placeholder={placeholder}
      className="block w-full rounded-md border appearance-none  border-gray-300 px-3 py-2 placeholder-gray-500 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-gray-400 "
      onChange={(e) => {
        setInput(e.target.value);
      }}
      onKeyDown={(e) => {
        onKeyDown?.(e);
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
