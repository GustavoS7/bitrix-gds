import {
  Methods,
  TMethodParams,
  TMethodResponse,
} from '../../core/shared/methods';

export interface IDealCallerResponse {
  add: <T extends TMethodParams<Methods.CRM_DEAL_ADD>>(params: {
    fields?: T['fields'];
    params?: T['params'];
  }) => Promise<TMethodResponse<Methods.CRM_DEAL_ADD>>;

  delete: <T extends TMethodParams<Methods.CRM_DEAL_DELETE>>(params: {
    id: T['id'];
  }) => Promise<TMethodResponse<Methods.CRM_DEAL_DELETE>>;

  fields: () => Promise<TMethodResponse<Methods.CRM_DEAL_FIELDS>>;

  get: <T extends TMethodParams<Methods.CRM_DEAL_GET>>(params: {
    id: T['id'];
  }) => Promise<TMethodResponse<Methods.CRM_DEAL_GET>>;

  list: <T extends TMethodParams<Methods.CRM_DEAL_LIST>>(params: {
    order?: T['order'];
    filter?: T['filter'];
    select?: T['select'];
    start?: T['start'];
  }) => Promise<TMethodResponse<Methods.CRM_DEAL_LIST>>;

  update: <T extends TMethodParams<Methods.CRM_DEAL_UPDATE>>(params: {
    id: T['id'];
    fields?: T['fields'];
    params?: T['params'];
  }) => Promise<TMethodResponse<Methods.CRM_DEAL_UPDATE>>;
}
