import { App } from './presentation/app';
import {
  IDealCallerResponse,
  IContactCallerResponse,
  IBatchCallerResponse,
} from './presentation/interfaces';

export default class Bitrix24 {
  contacts: IContactCallerResponse;
  deals: IDealCallerResponse;
  batch: IBatchCallerResponse;

  constructor(baseUrl: string) {
    const app = new App(baseUrl);

    this.contacts = app.contacts;
    this.deals = app.deals;
    this.batch = app.batch();
  }
}
