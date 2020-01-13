import { getRepository } from 'typeorm';
import { CryptoCurrency } from '../models';

export async function getAllCryptoCurrencies(): Promise<CryptoCurrency[]> {
  const ccRepository = getRepository(CryptoCurrency);

  return ccRepository.find();
}

export async function getAllSelectedCryptoCurrencies(): Promise<CryptoCurrency[]> {
  const ccRepository = getRepository(CryptoCurrency);

  return ccRepository.find({ where: { selected: true }});
}

export async function getOneCryptoCurrency(id: number): Promise<CryptoCurrency | undefined> {
  const ccRepository = getRepository(CryptoCurrency);

  return ccRepository.findOne(id, { relations: ['quotes']});
}

export async function saveBulkCryptoCurrencies(data: CryptoCurrency[]): Promise<CryptoCurrency[]> {
  const ccRepository = getRepository(CryptoCurrency);

  return ccRepository.save(data);
}

export async function saveCryptoCurrency(data: CryptoCurrency): Promise<CryptoCurrency> {
  const ccRepository = getRepository(CryptoCurrency);

  return ccRepository.save(data);
}
