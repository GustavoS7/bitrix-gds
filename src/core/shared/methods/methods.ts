import { TContactMethods } from './contact/contact.methods';
import { TDealsMethods } from './deal/deal.methods';

export type MethodsString =
  | 'batch'
  | 'crm.deal.add'
  | 'crm.deal.delete'
  | 'crm.deal.fields'
  | 'crm.deal.get'
  | 'crm.deal.list'
  | 'crm.deal.update'
  | 'crm.contact.add'
  | 'crm.contact.delete'
  | 'crm.contact.fields'
  | 'crm.contact.get'
  | 'crm.contact.list'
  | 'crm.contact.update';

export enum Methods {
  BATCH = 'batch',

  CRM_DEAL_ADD = 'crm.deal.add',
  CRM_DEAL_DELETE = 'crm.deal.delete',
  CRM_DEAL_FIELDS = 'crm.deal.fields',
  CRM_DEAL_GET = 'crm.deal.get',
  CRM_DEAL_LIST = 'crm.deal.list',
  CRM_DEAL_UPDATE = 'crm.deal.update',

  // To implement
  // CRM_DEAL_RECURRING_ADD = 'crm.deal.recurring.add',
  // CRM_DEAL_RECURRING_DELETE = 'crm.deal.recurring.delete',
  // CRM_DEAL_RECURRING_EXPOSE = 'crm.deal.recurring.expose',
  // CRM_DEAL_RECURRING_FIELDS = 'crm.deal.recurring.fields',
  // CRM_DEAL_RECURRING_GET = 'crm.deal.recurring.get',
  // CRM_DEAL_RECURRING_LIST = 'crm.deal.recurring.list',
  // CRM_DEAL_RECURRING_UPDATE = 'crm.deal.recurring.update',

  // CRM_DEAL_USERFIELD_ADD = 'crm.deal.userfield.add',
  // CRM_DEAL_USERFIELD_GET = 'crm.deal.userfield.get',
  // CRM_DEAL_USERFIELD_UPDATE = 'crm.deal.userfield.update',
  // CRM_DEAL_USERFIELD_DELETE = 'crm.deal.userfield.delete',
  // CRM_DEAL_USERFIELD_LIST = 'crm.deal.userfield.list',

  // CRM_DEAL_CONTACT_ADD = 'crm.deal.contact.add',
  // CRM_DEAL_CONTACT_FIELDS = 'crm.deal.contact.fields',

  // CRM_DEAL_CONTACT_ITEMS_GET = 'crm.deal.contact.items.get',
  // CRM_DEAL_CONTACT_ITEMS_SET = 'crm.deal.contact.items.set',
  // CRM_DEAL_CONTACT_ITEMS_DELETE = 'crm.deal.contact.items.delete',

  // CRM_DEAL_CONTACT_DELETE = 'crm.deal.contact.delete',

  CRM_CONTACT_ADD = 'crm.contact.add',
  CRM_CONTACT_DELETE = 'crm.contact.delete',
  CRM_CONTACT_FIELDS = 'crm.contact.fields',
  CRM_CONTACT_GET = 'crm.contact.get',
  CRM_CONTACT_LIST = 'crm.contact.list',
  CRM_CONTACT_UPDATE = 'crm.contact.update',

  // To implement
  // CRM_CONTACT_COMPANY_ADD = 'crm.contact.company.add',
  // CRM_CONTACT_COMPANY_DELETE = 'crm.contact.company.add',
  // CRM_CONTACT_COMPANY_FIELDS = 'crm.contact.company.fields',

  // CRM_CONTACT_COMPANY_ITEMS_GET = 'crm.contact.company.items.get',
  // CRM_CONTACT_COMPANY_ITEMS_SET = 'crm.contact.company.items.set',
  // CRM_CONTACT_COMPANY_ITEMS_DELETE = 'crm.contact.company.items.delete',

  // CRM_CONTACT_USERFIELD_ADD = 'crm.contact.userfield.add',
  // CRM_CONTACT_USERFIELD_GET = 'crm.contact.userfield.get',
  // CRM_CONTACT_USERFIELD_UPDATE = 'crm.contact.userfield.update',
  // CRM_CONTACT_USERFIELD_LIST = 'crm.contact.userfield.list',
  // CRM_CONTACT_USERFIELD_DELETE = 'crm.contact.userfield.delete',
}

type MethodDataValues<
  MAP extends Record<string, unknown>,
  KEY extends string | number | symbol,
  MAPKEY extends keyof MAP = KEY extends keyof MAP ? KEY : never,
> = MAP[MAPKEY];

export type TMethods = TContactMethods & TDealsMethods;

export type MethodParams<M extends Methods> = MethodDataValues<TMethods, M>;
