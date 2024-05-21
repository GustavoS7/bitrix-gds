import { TMethods } from '../domain/shared/methods/methods';
import axios, { Axios } from 'axios';

export class App {
  api: Axios;

  constructor(baseURL: string) {
    this.api = axios.create({
      baseURL,
      headers: {
        'User-Agent': '@gds/bitrix-lib',
      },
      responseType: 'json',
    });
  }

  async call() {
    return <M extends TMethods>(method: M, params: any) =>
      axios.get(method, { params }).then(({ data }) => {
        return data;
      });
  }
}
