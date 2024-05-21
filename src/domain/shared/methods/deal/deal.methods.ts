import { TGetResponse, TListResponse } from '../../response';
import { Deal } from '../../../entities/deal.entity';
import { DealMethods } from './deal-interface.methods';

export type TDealsMethds = {
  [DealMethods.CRM_DEAL_ADD]: {
    response: TGetResponse<number>;
    data: {
      fields: Partial<Deal>;
      params?: {
        REGISTER_SONET_EVENT: 'Y' | 'N';
      };
    };
  };

  [DealMethods.CRM_DEAL_DELETE]: {
    reponse: TGetResponse<number>;
    data: {
      id: string;
    };
  };

  [DealMethods.CRM_DEAL_FIELDS]: {
    reponse: TGetResponse<
      Record<
        keyof Deal,
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

  [DealMethods.CRM_DEAL_GET]: {
    reponse: TGetResponse<Deal>;
    data: {
      id: string;
    };
  };

  [DealMethods.CRM_DEAL_LIST]: {
    reponse: TListResponse<Deal>;
    data: {
      order?: { [key: string]: string };
      filter?: { [key: string]: string | number };
      select?: string[];
      start?: number;
    };
  };

  [DealMethods.CRM_DEAL_UPDATE]: {
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
