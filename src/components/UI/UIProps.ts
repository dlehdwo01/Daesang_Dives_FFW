import { ReactNode, RefObject } from 'react';

export type UIProps<T = HTMLElement> = {
  ref?: RefObject<T>;
  className?: string;
  onClick?: () => void;
};
