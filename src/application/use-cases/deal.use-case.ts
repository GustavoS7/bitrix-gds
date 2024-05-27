import {
  Methods,
  TMethodParams,
  TMethodResponse,
} from '../../core/shared/methods';

export class DealUseCase {
  private call: <M extends Methods>(
    method: M,
    params: TMethodParams<M>,
  ) => Promise<TMethodResponse<M>>;

  constructor({ call }: any) {
    this.call = call;
  }

  add<T extends TMethodParams<Methods.CRM_DEAL_ADD>>({
    fields,
    params,
  }: {
    fields?: T['fields'];
    params?: T['params'];
  }): Promise<TMethodResponse<Methods.CRM_DEAL_ADD>> {
    return this.call(Methods.CRM_DEAL_ADD, { fields, params });
  }

  delete<T extends TMethodParams<Methods.CRM_DEAL_DELETE>>({
    id,
  }: {
    id: T['id'];
  }): Promise<TMethodResponse<Methods.CRM_DEAL_DELETE>> {
    return this.call(Methods.CRM_DEAL_DELETE, { id });
  }

  fields(): Promise<TMethodResponse<Methods.CRM_DEAL_FIELDS>> {
    return this.call(Methods.CRM_CONTACT_FIELDS, {});
  }

  get<T extends TMethodParams<Methods.CRM_DEAL_GET>>({
    id,
  }: {
    id: T['id'];
  }): Promise<TMethodResponse<Methods.CRM_DEAL_GET>> {
    return this.call(Methods.CRM_DEAL_GET, { id });
  }

  list<T extends TMethodParams<Methods.CRM_DEAL_LIST>>({
    filter,
    order,
    select,
    start,
  }: {
    order?: T['order'];
    filter?: T['filter'];
    select?: T['select'];
    start?: T['start'];
  }): Promise<TMethodResponse<Methods.CRM_DEAL_LIST>> {
    return this.call(Methods.CRM_DEAL_LIST, { filter, order, select, start });
  }

  update<T extends TMethodParams<Methods.CRM_DEAL_UPDATE>>({
    id,
    fields,
    params,
  }: {
    id: T['id'];
    fields?: T['fields'];
    params?: T['params'];
  }): Promise<TMethodResponse<Methods.CRM_DEAL_UPDATE>> {
    return this.call(Methods.CRM_DEAL_UPDATE, { id, fields, params });
  }
}
