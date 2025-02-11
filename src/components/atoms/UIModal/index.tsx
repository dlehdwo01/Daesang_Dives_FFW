import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

export const UIModal = ({ isOpen, children }: { isOpen: boolean; children: ReactNode }) => {
  const root = document.getElementById('modal-root');

  return (
    <>
      {root &&
        isOpen &&
        createPortal(
          <div className="fixed z-50 top-0 left-0  w-screen h-screen bg-[rgba(0,0,0,0.05)] items-center flex justify-center">
            {children}
          </div>,
          root,
        )}
    </>
  );
};
