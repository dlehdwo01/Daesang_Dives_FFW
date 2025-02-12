import { RefObject, useEffect, useState } from 'react';

export const UIInput = ({ ref }: { ref: RefObject<string> }) => {
  const [input, setInput] = useState<string>('');
  useEffect(() => {
    ref.current = input;
  }, [input]);
  return (
    <input
      className="border-1 rounded border-zinc-500 p-1 text-sm"
      onChange={(e) => {
        setInput(e.target.value);
      }}
    />
  );
};
