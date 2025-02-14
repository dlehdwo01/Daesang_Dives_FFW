import { RefObject, useState } from 'react';

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

UIInput.CheckBox = ({
  ref,
  label,
  id,
  name,
  value,
}: {
  ref: RefObject<HTMLInputElement | null>;
  label?: string;
  id: string;
  name: string;
  value: string;
}) => {
  const [check, setCheck] = useState(ref?.current?.checked ?? false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheck(e.target.checked);
    if (ref && ref.current && check) {
      ref.current.checked = check;
    }
  };
  return (
    <>
      <input
        ref={ref}
        id={id}
        name={name}
        value={value}
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 disabled:cursor-wait disabled:opacity-50"
        checked={check}
        onChange={(e) => {
          onChange(e);
        }}
      />
      {label && (
        <label htmlFor={id} className="ml-2 block text-sm text-gray-700 ">
          {label}
        </label>
      )}
    </>
  );
};
