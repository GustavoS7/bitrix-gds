import { ContactMethods } from '../../domain/shared/methods/contact/contact.methods';

export class ContactUseCase {
  private call: any;

  constructor({ call }: any) {
    this.call = call;
  }

  async add<T>({ fields, params }: any) {
    return await this.call(ContactMethods.CRM_CONTACT_ADD, { fields, params });
  }

  async delete({ id }: any) {
    return await this.call(ContactMethods.CRM_CONTACT_DELETE, { id });
  }

  async fields() {
    return await this.call(ContactMethods.CRM_CONTACT_FIELDS, {});
  }

  async get({ id }: any) {
    return await this.call(ContactMethods.CRM_CONTACT_GET, { id });
  }

  async list({ order, filter, select, start }: any) {
    return await this.call(ContactMethods.CRM_CONTACT_LIST, {
      order,
      filter,
      select,
      start,
    });
  }

  async update({ id, fields, params }: any) {
    return await this.call(ContactMethods.CRM_CONTACT_LIST, {
      id,
      fields,
      params,
    });
  }
}
