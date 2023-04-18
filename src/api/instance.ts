import axios from 'axios';

export const BASE_URL = 'https://fx.ggos3.xyz/api';

export const API_SUFFIX = {
  SIGN_IN: '/register/',
};

export const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/*',
  },
});

export type APIResponseStatusType = 'SUCCESS' | 'FAILED';

export interface APIResponse<T = unknown> {
  status: APIResponseStatusType;
  status_code: number;
  message: string;
  result: T;
}

export interface APIErrorResponse {
  status: APIResponseStatusType;
  status_code: number;
  message: string;
  result?: null;
}

export const setAPIAccessToken = (token: string) => {
  if (token) {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete instance.defaults.headers.common.Authorization;
  }
};
