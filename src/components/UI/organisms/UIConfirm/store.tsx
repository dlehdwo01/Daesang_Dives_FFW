import { create } from 'zustand';
import { confirmProps } from './type';

type ConfirmStore = {
  isOpen: boolean;
  data: confirmProps;
  open: (props: confirmProps) => void;
  close: () => void;
};

export const useConfirmStore = create<ConfirmStore>((set) => ({
  isOpen: false,
  data: {
    message: '',
  },
  open: (props: confirmProps) => {
    set({ isOpen: true, data: props });
  },
  close: () => set({ isOpen: false }),
}));
