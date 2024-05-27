import { ContactUseCase, DealUseCase } from '../application/use-cases';
import { TBatchResponse } from '../core/shared/response';
import { IBatchCallerResponse } from './interfaces';
import axios, { Axios } from 'axios';
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
      let cmd: any = [];
      const keys = Object.keys(methods);

      keys.forEach((el) => {
        cmd.push(
          `cmd[${el}]=${methods[el].method}%3F${new URLSearchParams(methods[el].params).toString()}%3F`,
        );
      });

      cmd = cmd.join('&') + '';

      try {
        const { data } = await this.api.post(`${Methods.BATCH}?${cmd}`);

        return data;
      } catch (error) {
        throw new Error();
      }
    };
  }
}
