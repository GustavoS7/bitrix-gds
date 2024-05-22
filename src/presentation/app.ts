import { Methods, TMethods } from '../core/shared/methods/methods';
import axios, { Axios } from 'axios';

export type Call = <M extends TMethods>(method: M, params: any) => Promise<any>;

export class App {
  api: Axios;
  private call: <M extends Methods>(method: M, params: any) => Promise<any>;

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
      } catch (error) {
        return null;
      }
    };
  }

  Deal() {
    return {
      fields: () => this.call(Methods.CRM_CONTACT_FIELDS, {}),

      add: <T extends TMethodParams>() => 
    };
  }
}
