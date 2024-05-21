import { App } from './presentation/api';

export const Bitrix24 = (baseUrl: string) => {
  const { call } = new App(baseUrl);

  return {
    call,
  };
};

export default Bitrix24;
