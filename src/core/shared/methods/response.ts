import { MethodParams, Methods } from './methods';

export type TMethodResponse<M extends Methods> = MethodParams<M>['response'];
