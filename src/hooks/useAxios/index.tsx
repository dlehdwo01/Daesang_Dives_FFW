import { useConfirmStore } from '@/components/UI/organisms/UIConfirm/store';
import { useUserStore } from '@/stores/userStore';
import axios, { AxiosError } from 'axios';
import { useCallback } from 'react';

type errorType = {
  code: string;
  message: string;
  status: number;
  timestamp: string;
};

export type axiosOptions<T, R> = {
  inData: T;
  onSuccess?: (outData: R) => void;
  onError?: (err: any) => void;
};

export const useAxios = () => {
  const api = axios.create({
    baseURL: '/api',
    withCredentials: true, // 쿠키 포함
  });
  const comfirm = useConfirmStore();

  //* ==================== api intercepror 설정====================
  // Request Interceptor
  api.interceptors.request.use(
    (config) => {
      const userStore = useUserStore.getState();
      config.headers.Accessed_URL = userStore.url;
      return config;
    },
    (error) => Promise.reject(error),
  );

  // 응답데이터 내 토큰 만료시
  // api.interceptors.response.use(
  //   (response) => response, // 정상 응답 그대로 반환
  //   async (error) => {
  //     const originalRequest = error.config;
  //     if (error.response?.status === 401 && !originalRequest._retry) {
  //       try {
  //         // 401 오류 → 토큰 갱신 요청
  //         const refreshResponse = await axios.post(
  //           'refresh토큰으로 새로운 액세스 토큰 발급 api',
  //           {},
  //           { withCredentials: true },
  //         );
  //         localStorage.setItem('access_token', refreshResponse.data.accessToken);
  //         originalRequest.headers.Authorization = `Bearer ${refreshResponse.data.accessToken}`;
  //         return axios(originalRequest);
  //       } catch (refreshError) {
  //         console.error('리프레시 토큰 만료됨. 로그아웃 처리.');
  //         localStorage.removeItem('access_token'); // 토큰 제거
  //         window.location.href = '/'; // 로그인 페이지로 이동
  //       }
  //     }
  //     return Promise.reject(error);
  //   },
  // );
  //*==============================================================

  const post = useCallback(async <T, R>(url: string, axiosOptions: axiosOptions<T, R>) => {
    const { inData, onError, onSuccess } = axiosOptions;
    try {
      const response = await api.post<R>(url, inData);
      onSuccess?.(response.data);
    } catch (err) {
      defaultErrorFunction(err, onError);
    }
  }, []);

  const get = useCallback(async <T, R>(url: string, axiosOptions: axiosOptions<T, R>) => {
    const { inData, onError, onSuccess } = axiosOptions;
    try {
      const response = await api.get<R>(url, {
        params: inData,
      });
      onSuccess?.(response.data);
    } catch (err) {
      defaultErrorFunction(err, onError);
    }
  }, []);

  const put = useCallback(async <T, R>(url: string, axiosOptions: axiosOptions<T, R>) => {
    const { inData, onError, onSuccess } = axiosOptions;
    try {
      const response = await api.put<R>(url, inData);
      onSuccess?.(response.data);
    } catch (err) {
      defaultErrorFunction(err, onError);
    }
  }, []);

  const patch = useCallback(async <T, R>(url: string, axiosOptions: axiosOptions<T, R>) => {
    const { inData, onError, onSuccess } = axiosOptions;
    try {
      const response = await api.patch<R>(url, inData);
      onSuccess?.(response.data);
    } catch (err) {
      defaultErrorFunction(err, onError);
    }
  }, []);

  const del2te = useCallback(async <T, R>(url: string, axiosOptions: axiosOptions<T, R>) => {
    const { inData, onError, onSuccess } = axiosOptions;
    try {
      const response = await api.delete<R>(url, {
        params: inData,
      });
      onSuccess?.(response.data);
    } catch (err) {
      defaultErrorFunction(err, onError);
    }
  }, []);

  const form = useCallback(async <T, R>(url: string, axiosOptions: axiosOptions<T, R>) => {
    const { inData, onError, onSuccess } = axiosOptions;
    try {
      const response = await api.post<R>(url, inData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      onSuccess?.(response.data);
      return response;
    } catch (err: unknown) {
      defaultErrorFunction(err, onError);
    }
  }, []);

  const defaultErrorFunction = (err: unknown, onError?: (err: unknown) => void) => {
    if (axios.isAxiosError(err)) {
      const axiosError = err as AxiosError;
      // 서버 에러 공통 오류 처리
      if (err.status === 500) {
        comfirm.open({
          title: '안내',
          message:
            '요청을 처리하는 중에 오류가 발생했습니다. 문제가 지속되면 고객 지원팀에 문의해 주세요.',
        });
        return;
      }
      const error = axiosError.response?.data as errorType;
      onError?.(error);
      comfirm.open({
        title: '안내',
        message: error.message,
      });
      console.error('❌ 에러 : ', error);
    }
  };

  return { post, form, get, del2te, patch, put };
};
