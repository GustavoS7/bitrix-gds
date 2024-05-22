import Bitrix24 from '.';

const app = Bitrix24(
  'https://edmurimoveis.bitrix24.com.br/rest/81591/cnju4yercyqek55s',
);

describe('App', () => {
  it('Should execute call method', async () => {
    const teste = await app.call('CRM_CONTACT_ADD', {});

    // expect
  });
});
