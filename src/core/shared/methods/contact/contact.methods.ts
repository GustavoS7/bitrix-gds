import { TGetResponse, TListResponse } from '../../response';
import { Contact } from '../../../entities/contact.entity';
import { Methods } from '../methods';

export type TContactMethods = {
  [Methods.CRM_CONTACT_ADD]: {
    response: TGetResponse<number>;
    data: {
      fields: Partial<Contact>;
      params?: {
        REGISTER_SONET_EVENT: 'Y' | 'N';
      };
    };
  };

  [Methods.CRM_CONTACT_DELETE]: {
    response: TGetResponse<number>;
    data: {
      id: string;
    };
  };

  [Methods.CRM_CONTACT_FIELDS]: {
    response: TGetResponse<
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
    data?: any;
  };

  [Methods.CRM_CONTACT_GET]: {
    response: TGetResponse<Contact>;
    data: {
      id: string;
    };
  };

  [Methods.CRM_CONTACT_LIST]: {
    response: TListResponse<Contact>;
    data: {
      order?: { [key: string]: string };
      filter?: { [key: string]: string | number };
      select?: string[];
      start?: number;
    };
  };

  [Methods.CRM_CONTACT_UPDATE]: {
    response: TGetResponse<number>;
    data: {
      id: string;
      fields: { [key: string]: string };
      params?: {
        REGISTER_SONET_EVENT: 'Y' | 'N';
      };
    };
  };
};
