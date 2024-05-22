import { TTime } from './time.payload';

export type TGetResponse<T> = {
  result: T;
  time: TTime;
};
