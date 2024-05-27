import Bitrix24 from '.';

describe('d', () => {
  it('Should call a method', async () => {
    const bitrix = new Bitrix24(
      'https://edmurimoveis.bitrix24.com.br/rest/81591/cnju4yercyqek55s',
    );

    const data = await bitrix.deals.fields();

    console.log(data);
  });
});
