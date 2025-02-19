import { axiosOptions, useAxios } from '../hooks/useAxios';

export const callLogin = () => {
  const tr = useAxios();
  const getPublicKey = (
    axiosOptions: axiosOptions<
      {}, //inData Type
      { publicKey: string } //outData Type
    >,
  ) => {
    tr.send('publicKey', axiosOptions);
  };

  const login = (
    axiosOptions: axiosOptions<
      { username: string; password: string }, //inData Type
      { result: string } //outData Type
    >,
  ) => {
    tr.form('login', axiosOptions);
  };

  return { getPublicKey, login };
};
