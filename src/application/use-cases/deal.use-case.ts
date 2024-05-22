import { DealMethods } from '../../core/shared/methods/deal/deal-interface.methods';

export class DealUseCase {
  private call: any;

  constructor({ call }: any) {
    this.call = call;
  }

  async add<T>({ fields, params }: any) {
    return await this.call(DealMethods.CRM_DEAL_ADD, { fields, params });
  }

  async delete({ id }: any) {
    return await this.call(DealMethods.CRM_DEAL_DELETE, { id });
  }

  async fields() {
    return await this.call(DealMethods.CRM_DEAL_FIELDS, {});
  }

  async get({ id }: any) {
    return await this.call(DealMethods.CRM_DEAL_GET, { id });
  }

  async list({ order, filter, select, start }: any) {
    return await this.call(DealMethods.CRM_DEAL_LIST, {
      order,
      filter,
      select,
      start,
    });
  }

  async update({ id, fields, params }: any) {
    return await this.call(DealMethods.CRM_DEAL_LIST, {
      id,
      fields,
      params,
    });
  }
}
