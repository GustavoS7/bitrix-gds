import { TBatchResponse } from './batch.response';
import { TListResponse } from './list.response';
import { TGetResponse } from './get.response';

export type TResponse<T> =
  | TBatchResponse<T>
  | TGetResponse<T>
  | TListResponse<T>;
