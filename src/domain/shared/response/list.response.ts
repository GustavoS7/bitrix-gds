import { TTime } from './time.payload';

export type TListResponse<T> = {
  result: T[];
  total: number;
  next?: number;
  time: TTime;
  error?: {
    error: string;
    error_description: string;
  };
};
