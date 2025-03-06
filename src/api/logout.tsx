import { axiosOptions, useAxios } from '../hooks/useAxios';

export const callLogout = () => {
  const tr = useAxios();

  const logout = (
    axiosOptions: axiosOptions<
      {}, //inData Type
      {} //outData Type
    >,
  ) => tr.form('logout', axiosOptions);

  return { logout };
};
