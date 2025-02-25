import { useConfirmStore } from '@/components/UI/organisms/UIConfirm/store';
import { useUserStore } from '@/stores/userStore';
import axios, { AxiosError } from 'axios';
import { useCallback } from 'react';

type errorType = {
  code: string;
  message: string;
  status: number;
};

type responseType<R> = {
  code: string;
  message: string;
  status: number;
  data: R;
};

export type axiosOptions<T, R> = {
  inData: T;
  onSuccess?: (outData: responseType<R>) => void;
  onError?: (err: any) => void;
};

export const useAxios = () => {
  const api = axios.create({
    baseURL: '/api',
    withCredentials: true, // 쿠키 포함
  });
  const comfirm = useConfirmStore();
  // const navigator = useNavigate();

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

  //* Response Interceptors
  api.interceptors.response.use(
    //* 정상 응답 그대로 반환
    (response) => {
      return response;
    },
    //* 에러시
    async (error) => {
      const originalRequest = error.config;
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        const response = axiosError.response?.data as errorType;

        //* 액세스 토큰 만료
        //* 재발급처리 되었으니 기존 api 재호출
        if (response.code === 'ERROR-005') {
          console.log('재발급 후 api 재호출!');
          return axios(originalRequest);
        }
        //* 재로그인(리프레쉬토큰 만료)
        else if (response.code === 'ERROR-004') {
          comfirm.open({
            title: '안내',
            message: response.message,
            onConfirm() {
              window.location.href = '/';
              // navigator('/');
            },
          });
          return;
        }
      }
      return Promise.reject(error);
    },
  );
  //*==============================================================

  const post = useCallback(async <T, R>(url: string, axiosOptions: axiosOptions<T, R>) => {
    const { inData, onError, onSuccess } = axiosOptions;
    try {
      const response = await api.post<responseType<R>>(url, inData);
      onSuccess?.(response.data);
    } catch (err) {
      defaultErrorFunction(err, onError);
    }
  }, []);

  const get = useCallback(async <T, R>(url: string, axiosOptions: axiosOptions<T, R>) => {
    const { inData, onError, onSuccess } = axiosOptions;
    try {
      const response = await api.get<responseType<R>>(url, {
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
      const response = await api.put<responseType<R>>(url, inData);
      onSuccess?.(response.data);
    } catch (err) {
      defaultErrorFunction(err, onError);
    }
  }, []);

  const patch = useCallback(async <T, R>(url: string, axiosOptions: axiosOptions<T, R>) => {
    const { inData, onError, onSuccess } = axiosOptions;
    try {
      const response = await api.patch<responseType<R>>(url, inData);
      onSuccess?.(response.data);
    } catch (err) {
      defaultErrorFunction(err, onError);
    }
  }, []);

  const del2te = useCallback(async <T, R>(url: string, axiosOptions: axiosOptions<T, R>) => {
    const { inData, onError, onSuccess } = axiosOptions;
    try {
      const response = await api.delete<responseType<R>>(url, {
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
      const response = await api.post<responseType<R>>(url, inData, {
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
