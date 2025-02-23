import { axiosOptions, useAxios } from '../hooks/useAxios';

export const callTest = () => {
  const tr = useAxios();
  const test = (
    axiosOptions: axiosOptions<
      {}, //inData Type
      {} //outData Type
    >,
  ) => tr.post('admin/test', axiosOptions);

  const getTest = (
    axiosOptions: axiosOptions<
      {}, //inData Type
      {} //outData Type
    >,
  ) => tr.get('admin/test', axiosOptions);

  const getTest2 = (
    id: string,
    axiosOptions: axiosOptions<
      {}, //inData Type
      {} //outData Type
    >,
  ) => tr.get(`admin/test/${id}`, axiosOptions);

  const putTest = (
    id: string,
    axiosOptions: axiosOptions<
      {}, //inData Type
      {} //outData Type
    >,
  ) => tr.put(`admin/test/${id}`, axiosOptions);

  const patchTest = (
    id: string,
    axiosOptions: axiosOptions<
      {}, //inData Type
      {} //outData Type
    >,
  ) => tr.put(`admin/test/${id}`, axiosOptions);

  const deleteTest = (
    id: string,
    axiosOptions: axiosOptions<
      {}, //inData Type
      {} //outData Type
    >,
  ) => tr.del2te(`admin/test/${id}`, axiosOptions);

  return { test };
};
