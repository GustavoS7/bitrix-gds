import { TGetResponse, TListResponse } from '../../response';
import { Contact } from '../../../entities/contact.entity';
import { ContactMethods } from './contact.methods';

export type TDealsMethds = {
  [ContactMethods.CRM_CONTACT_ADD]: {
    response: TGetResponse<number>;
    data: {
      fields: Partial<Contact>;
      params?: {
        REGISTER_SONET_EVENT: 'Y' | 'N';
      };
    };
  };

  [ContactMethods.CRM_CONTACT_DELETE]: {
    reponse: TGetResponse<number>;
    data: {
      id: string;
    };
  };

  [ContactMethods.CRM_CONTACT_FIELDS]: {
    reponse: TGetResponse<
      Record<
        keyof Contact,
        {
          type: string;
          isRequired: boolean;
          isReadOnly: boolean;
          isImmutable: boolean;
          isMultiple: boolean;
          isDynamic: boolean;
          statusType: string;
          title: string;
        }
      >
    >;
  };

  [ContactMethods.CRM_CONTACT_GET]: {
    reponse: TGetResponse<Contact>;
    data: {
      id: string;
    };
  };

  [ContactMethods.CRM_CONTACT_LIST]: {
    reponse: TListResponse<Contact>;
    data: {
      order?: { [key: string]: string };
      filter?: { [key: string]: string | number };
      select?: string[];
      start?: number;
    };
  };

  [ContactMethods.CRM_CONTACT_UPDATE]: {
    reponse: TGetResponse<number>;
    data: {
      id: string;
      fields: { [key: string]: string };
      params?: {
        REGISTER_SONET_EVENT: 'Y' | 'N';
      };
    };
  };
};
