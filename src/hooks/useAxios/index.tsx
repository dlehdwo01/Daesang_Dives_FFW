import axios from 'axios';

export type axiosOptions<T, R> = {
  inData: T;
  onSuccess?: (responseData: R) => void;
  onError?: (err: any) => void;
};

const apiUrl = import.meta.env.VITE_API_URL;

export const useAxios = () => {
  console.log(apiUrl);
  const send = async <T, R>(url: string, axiosOptions: axiosOptions<T, R>) => {
    const { inData, onError, onSuccess } = axiosOptions;
    try {
      const response = await axios.post<R>(apiUrl + url, inData);
      onSuccess?.(response.data);
    } catch (err: any) {
      onError?.(err);
    }
  };

  return { send };
};
