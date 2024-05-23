import {
  Methods,
  TMethodParams,
  TMethodResponse,
} from '../../core/shared/methods';

export interface IContactCallerResponse {
  add: <T extends TMethodParams<Methods.CRM_CONTACT_ADD>>(params: {
    fields?: T['fields'];
    params?: T['params'];
  }) => Promise<TMethodResponse<Methods.CRM_CONTACT_ADD>>;

  delete: <T extends TMethodParams<Methods.CRM_CONTACT_DELETE>>(params: {
    id: T['id'];
  }) => Promise<TMethodResponse<Methods.CRM_CONTACT_DELETE>>;

  fields: () => Promise<TMethodResponse<Methods.CRM_CONTACT_FIELDS>>;

  get: <T extends TMethodParams<Methods.CRM_CONTACT_GET>>(params: {
    id: T['id'];
  }) => Promise<TMethodResponse<Methods.CRM_CONTACT_GET>>;

  list: <T extends TMethodParams<Methods.CRM_CONTACT_LIST>>(params: {
    order?: T['order'];
    filter?: T['filter'];
    select?: T['select'];
    start?: T['start'];
  }) => Promise<TMethodResponse<Methods.CRM_CONTACT_LIST>>;

  update: <T extends TMethodParams<Methods.CRM_CONTACT_UPDATE>>(params: {
    id: T['id'];
    fields?: T['fields'];
    params?: T['params'];
  }) => Promise<TMethodResponse<Methods.CRM_CONTACT_UPDATE>>;
}
