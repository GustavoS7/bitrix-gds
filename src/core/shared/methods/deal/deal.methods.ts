import { TGetResponse, TListResponse } from '../../response';
import { Deal } from '../../../entities/deal.entity';
import { Methods } from '../methods';

export type TDealsMethods = {
  [Methods.CRM_DEAL_ADD]: {
    response: TGetResponse<number>;
    data: {
      fields: Partial<Deal>;
      params?: {
        REGISTER_SONET_EVENT: 'Y' | 'N';
      };
    };
  };

  [Methods.CRM_DEAL_DELETE]: {
    response: TGetResponse<number>;
    data: {
      id: string;
    };
  };

  [Methods.CRM_DEAL_FIELDS]: {
    response: TGetResponse<
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
    data?: any;
  };

  [Methods.CRM_DEAL_GET]: {
    response: TGetResponse<Deal>;
    data: {
      id: string;
    };
  };

  [Methods.CRM_DEAL_LIST]: {
    response: TListResponse<Deal>;
    data: {
      order?: { [key: string]: string };
      filter?: { [key: string]: string | number };
      select?: string[];
      start?: number;
    };
  };

  [Methods.CRM_DEAL_UPDATE]: {
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
