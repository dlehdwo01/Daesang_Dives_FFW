import { axiosOptions, useAxios } from '../hooks/useAxios';

export const callTest = () => {
  const tr = useAxios();
  const test = (
    axiosOptions: axiosOptions<
      {}, //inData Type
      {} //outData Type
    >,
  ) => {
    tr.send('test', axiosOptions);
  };

  return { test };
};
