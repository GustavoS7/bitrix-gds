import { TTime } from './time.payload';

export type TBatchResponse<T> = {
  result: {
    result: { [Key in keyof T]: T[Key] } | [];
    result_error:
      | {
          [Key in keyof T]: {
            error: string;
            error_description: string;
          };
        }
      | [];
    result_total: { [Key in keyof T]: number } | [];
    result_next: { [Key in keyof T]: number } | [];
    result_time: { [Key in keyof T]: TTime } | [];
  };
  time: TTime;
};
