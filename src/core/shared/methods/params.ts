import { MethodParams, Methods } from './methods';

export type TMethodParams<M extends Methods> = MethodParams<M>['data'];
