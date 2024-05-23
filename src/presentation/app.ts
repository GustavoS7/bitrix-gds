import { TBatchResponse } from '../core/shared/response';
import axios, { Axios } from 'axios';
import {
  Methods,
  MethodsString,
  TMethodParams,
  TMethodResponse,
} from '../core/shared/methods/';
import {
  IDealCallerResponse,
  IContactCallerResponse,
  IBatchCallerResponse,
} from './interfaces';

export class App {
  private api: Axios;
  private call: <M extends Methods>(
    method: M,
    params: TMethodParams<M>,
  ) => Promise<TMethodResponse<M>>;

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
  }

  deals(): IDealCallerResponse {
    return {
      add: <T extends TMethodParams<Methods.CRM_DEAL_ADD>>({
        fields,
        params,
      }: {
        fields?: T['fields'];
        params?: T['params'];
      }): Promise<TMethodResponse<Methods.CRM_DEAL_ADD>> =>
        this.call(Methods.CRM_DEAL_ADD, { fields, params }),

      delete: <T extends TMethodParams<Methods.CRM_DEAL_DELETE>>({
        id,
      }: {
        id: T['id'];
      }): Promise<TMethodResponse<Methods.CRM_DEAL_DELETE>> =>
        this.call(Methods.CRM_DEAL_DELETE, { id }),

      fields: (): Promise<TMethodResponse<Methods.CRM_DEAL_FIELDS>> =>
        this.call(Methods.CRM_CONTACT_FIELDS, {}),

      get: <T extends TMethodParams<Methods.CRM_DEAL_GET>>({
        id,
      }: {
        id: T['id'];
      }): Promise<TMethodResponse<Methods.CRM_DEAL_GET>> =>
        this.call(Methods.CRM_DEAL_GET, { id }),

      list: <T extends TMethodParams<Methods.CRM_DEAL_LIST>>({
        filter,
        order,
        select,
        start,
      }: {
        order?: T['order'];
        filter?: T['filter'];
        select?: T['select'];
        start?: T['start'];
      }): Promise<TMethodResponse<Methods.CRM_DEAL_LIST>> =>
        this.call(Methods.CRM_DEAL_LIST, { filter, order, select, start }),

      update: <T extends TMethodParams<Methods.CRM_DEAL_UPDATE>>({
        id,
        fields,
        params,
      }: {
        id: T['id'];
        fields?: T['fields'];
        params?: T['params'];
      }): Promise<TMethodResponse<Methods.CRM_DEAL_UPDATE>> =>
        this.call(Methods.CRM_DEAL_UPDATE, { id, fields, params }),
    };
  }

  contacts(): IContactCallerResponse {
    return {
      add: <T extends TMethodParams<Methods.CRM_CONTACT_ADD>>({
        fields,
        params,
      }: {
        fields?: T['fields'];
        params?: T['params'];
      }): Promise<TMethodResponse<Methods.CRM_CONTACT_ADD>> =>
        this.call(Methods.CRM_CONTACT_ADD, { fields, params }),

      delete: <T extends TMethodParams<Methods.CRM_CONTACT_DELETE>>({
        id,
      }: {
        id: T['id'];
      }): Promise<TMethodResponse<Methods.CRM_CONTACT_DELETE>> =>
        this.call(Methods.CRM_CONTACT_DELETE, { id }),

      fields: (): Promise<TMethodResponse<Methods.CRM_CONTACT_FIELDS>> =>
        this.call(Methods.CRM_CONTACT_FIELDS, {}),

      get: <T extends TMethodParams<Methods.CRM_CONTACT_GET>>({
        id,
      }: {
        id: T['id'];
      }): Promise<TMethodResponse<Methods.CRM_CONTACT_GET>> =>
        this.call(Methods.CRM_CONTACT_GET, { id }),

      list: <T extends TMethodParams<Methods.CRM_CONTACT_LIST>>({
        filter,
        order,
        select,
        start,
      }: {
        order?: T['order'];
        filter?: T['filter'];
        select?: T['select'];
        start?: T['start'];
      }): Promise<TMethodResponse<Methods.CRM_CONTACT_LIST>> =>
        this.call(Methods.CRM_CONTACT_LIST, { filter, order, select, start }),

      update: <T extends TMethodParams<Methods.CRM_CONTACT_UPDATE>>({
        id,
        fields,
        params,
      }: {
        id: T['id'];
        fields?: T['fields'];
        params?: T['params'];
      }): Promise<TMethodResponse<Methods.CRM_CONTACT_UPDATE>> =>
        this.call(Methods.CRM_CONTACT_UPDATE, { id, fields, params }),
    };
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
