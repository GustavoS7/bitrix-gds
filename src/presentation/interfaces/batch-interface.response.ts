import { TBatchResponse } from '../../core/shared/response';
import { MethodsString } from '../../core/shared/methods';

export type IBatchCallerResponse = (methods: {
  [key: string]: {
    method: MethodsString;
    params?: Record<string, any>;
  };
}) => Promise<TBatchResponse<any>>;
