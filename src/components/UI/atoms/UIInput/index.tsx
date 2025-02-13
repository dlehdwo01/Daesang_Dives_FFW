import { RefObject, useEffect, useState } from 'react';

export const UIInput = ({ ref }: { ref: RefObject<string> }) => {
  const [input, setInput] = useState<string>('');
  useEffect(() => {
    ref.current = input;
  }, [input]);
  return (
    <input
      className="block w-full rounded-md border appearance-none  border-gray-300 px-3 py-2 placeholder-gray-500 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-gray-400 "
      onChange={(e) => {
        setInput(e.target.value);
      }}
    />
  );
};
