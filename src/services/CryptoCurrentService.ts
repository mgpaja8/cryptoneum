import { getRepository } from 'typeorm';
import { CryptoCurrency } from '../models';

export async function getAllCryptoCurrencies(): Promise<CryptoCurrency[]> {
  const ccRepository = getRepository(CryptoCurrency);

  return ccRepository.find();
}

export async function getAllSelectedCryptoCurrencies(): Promise<CryptoCurrency[]> {
  const ccRepository = getRepository(CryptoCurrency);

  let currencies = await ccRepository.find({ where: { selected: true }, relations: ['quotes']});

  currencies = currencies.map(currency => {
    currency.quotes = [currency?.quotes[currency.quotes.length - 1]];
    return currency;
  });

  return currencies;
}

export async function getOneCryptoCurrency(id: number): Promise<CryptoCurrency | undefined> {
  const ccRepository = getRepository(CryptoCurrency);

  const currency = await ccRepository.findOne(id, { relations: ['quotes']});

  if (!!currency) {
    currency.quotes = [currency?.quotes[currency.quotes.length - 1]];
  }

  return currency;
}

export async function saveBulkCryptoCurrencies(data: CryptoCurrency[]): Promise<CryptoCurrency[]> {
  const ccRepository = getRepository(CryptoCurrency);

  return ccRepository.save(data);
}

export async function saveCryptoCurrency(data: CryptoCurrency): Promise<CryptoCurrency> {
  const ccRepository = getRepository(CryptoCurrency);

  return ccRepository.save(data);
}
