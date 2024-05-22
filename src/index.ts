import { App } from './presentation/app';

export const Bitrix24 = (baseUrl: string) => {
  const { call } = new App(baseUrl);

  return {
    // call: Call(),
    call,
  };
};

export default Bitrix24;
