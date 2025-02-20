import { create } from 'zustand';

type UserStore = {
  url: string;
  setUrl: (url: string) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  url: '',
  setUrl: (url: string) => set({ url }),
}));
