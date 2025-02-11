import { useEffect, useState } from 'react';
import { UIModal } from '../../atoms/UIModal';

export const UILoading = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!isLoading && (
        <UIModal isOpen={true}>
          <div className="flex space-x-4">
            <div className="animate-bounce text-pink-400 text-2xl">D</div>
            <div className="animate-bounce text-red-600 text-2xl">A</div>
            <div className="animate-bounce text-orange-600 text-2xl">E</div>
            <div className="animate-bounce text-blue-950 text-2xl">S</div>
            <div className="animate-bounce text-purple-800 text-2xl">A</div>
            <div className="animate-bounce text-orange-400 text-2xl">N</div>
            <div className="animate-bounce text-amber-300 text-2xl">G</div>
          </div>
        </UIModal>
      )}
    </>
  );
};
