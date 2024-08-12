/* eslint-disable no-void */
import { ContactUseCase, DealUseCase } from '../application/use-cases';
import { TBatchResponse } from '../core/shared/response';
import { IBatchCallerResponse } from './interfaces';
import axios, { Axios } from 'axios';
import qs from 'qs';
import {
  Methods,
  MethodsString,
  TMethodParams,
  TMethodResponse,
} from '../core/shared/methods/';

export class App {
  private api: Axios;
  private call: <M extends Methods>(
    method: M,
    params: TMethodParams<M>,
  ) => Promise<TMethodResponse<M>>;

  deals: DealUseCase;
  contacts: ContactUseCase;

  constructor(baseURL: string) {
    this.api = axios.create({
      baseURL,
      headers: {
        'User-Agent': '@gds/bitrix-lib',
      },
      responseType: 'json',
    });

    this.call = async <M extends Methods>(method: M, params: any) => {
      try {
        const { data } = await this.api.post(method, params);

        return data;
      } catch (error: any) {
        if (error?.response?.data?.error_description) {
          throw new Error(`Error - ${error.response.data.error_description}`);
        }
        throw new Error('Error');
      }
    };

    this.deals = new DealUseCase({ call: this.call });
    this.contacts = new ContactUseCase({ call: this.call });
  }

  batch(): IBatchCallerResponse {
    return async (methods: {
      [key: string]: {
        method: MethodsString;
        params?: Record<string, any>;
      };
    }): Promise<TBatchResponse<any>> => {
      const cmd = Object.entries(methods).reduce(
        (calls, [name, { method, params }]) => {
          const stringifiedParams = params ? `?${qs.stringify(params)}` : '';

          return {
            ...calls,
            [name]: `${method}${stringifiedParams}`,
          };
        },
        {},
      );

      try {
        const { data } = await this.api.post(`${Methods.BATCH}`, { cmd });
        return data;
      } catch (error) {
        throw new Error();
      }
    };
  }

  // Native toQuery code
  // private isObj(a: any) {
  //   if (!!a && a.constructor === Object) {
  //     return true;
  //   }
  //   return false;
  // }

  // private _st(z: any, g: any) {
  //   return '' + (g !== '' ? '[' : '') + z + (g !== '' ? ']' : '');
  // }

  // private toQuery(params: any, skipobjects?: any, prefix?: any) {
  //   if (skipobjects === void 0) {
  //     skipobjects = false;
  //   }
  //   if (prefix === void 0) {
  //     prefix = '';
  //   }
  //   let result = '';
  //   if (typeof params !== 'object') {
  //     return prefix + '=' + encodeURIComponent(params) + '&';
  //   }
  //   for (const param in params) {
  //     const c = '' + prefix + this._st(param, prefix);
  //     if (this.isObj(params[param]) && !skipobjects) {
  //       result += this.toQuery(params[param], false, '' + c);
  //     } else if (Array.isArray(params[param]) && !skipobjects) {
  //       params[param].forEach((item, ind) => {
  //         result += this.toQuery(item, false, c + '[' + ind + ']');
  //       });
  //     } else {
  //       result += c + '=' + encodeURIComponent(params[param]) + '&';
  //     }
  //   }
  //   return result;
  // }
}
