import { axiosOptions, useAxios } from '../hooks/useAxios';

export const callLogin = () => {
  const tr = useAxios();
  const getPulicKey = (
    axiosOptions: axiosOptions<
      {}, //inData Type
      { publicKey: string } //outData Type
    >,
  ) => {
    tr.send('getPulicKey', axiosOptions);
  };

  const login = (
    axiosOptions: axiosOptions<
      { id: string; password: string }, //inData Type
      { result: string } //outData Type
    >,
  ) => {
    tr.form('login', axiosOptions);
  };

  return { getPulicKey, login };
};
