import axios from 'axios';
import { useCallback } from 'react';

export type axiosOptions<T, R> = {
  inData: T;
  onSuccess?: (responseData: R) => void;
  onError?: (err: any) => void;
};

export const useAxios = () => {
  const send = useCallback(async <T, R>(url: string, axiosOptions: axiosOptions<T, R>) => {
    const { inData, onError, onSuccess } = axiosOptions;
    const api = axios.create({
      baseURL: '/api',
      withCredentials: true, // 쿠키 포함
    });

    //* ==================== api intercepror 설정====================
    // 매요청시마다 토큰 포함
    api.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('access_token'); // 혹은 sessionStorage
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error),
    );

    // 응답데이터 내 토큰 만료시
    api.interceptors.response.use(
      (response) => response, // 정상 응답 그대로 반환
      async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
          try {
            // 401 오류 → 토큰 갱신 요청
            const refreshResponse = await axios.post(
              'refresh토큰으로 새로운 액세스 토큰 발급 api',
              {},
              { withCredentials: true },
            );
            localStorage.setItem('access_token', refreshResponse.data.accessToken);
            originalRequest.headers.Authorization = `Bearer ${refreshResponse.data.accessToken}`;
            return axios(originalRequest);
          } catch (refreshError) {
            console.error('리프레시 토큰 만료됨. 로그아웃 처리.');
            localStorage.removeItem('access_token'); // 토큰 제거
            window.location.href = '/'; // 로그인 페이지로 이동
          }
        }
        return Promise.reject(error);
      },
    );
    //*==============================================================
    try {
      const response = await api.post<R>(url, inData);
      onSuccess?.(response.data);
      return response;
    } catch (err: any) {
      onError?.(err);
      return err;
    }
  }, []);

  return { send };
};
