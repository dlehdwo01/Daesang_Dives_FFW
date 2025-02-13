import axios from 'axios';
import { useCallback } from 'react';

export type axiosOptions<T, R> = {
  inData: T;
  onSuccess?: (responseData: R) => void;
  onError?: (err: any) => void;
};

const apiUrl = import.meta.env.VITE_API_URL;

export const useAxios = () => {
  const send = useCallback(async <T, R>(url: string, axiosOptions: axiosOptions<T, R>) => {
    const { inData, onError, onSuccess } = axiosOptions;
    try {
      const response = await axios.post<R>(apiUrl + url, inData);
      onSuccess?.(response.data);
    } catch (err: any) {
      onError?.(err);
    }
  }, []);

  return { send };
};
