import { getRepository } from 'typeorm';
import { CryptoCurrency } from '../models';

export async function getAllCryptoCurrencies(): Promise<CryptoCurrency[]> {
  const ccRepository = getRepository(CryptoCurrency);

  return ccRepository.find();
}

export async function saveBulkCryptoCurrencies(data: CryptoCurrency[]): Promise<CryptoCurrency[]> {
  const ccRepository = getRepository(CryptoCurrency);

  return ccRepository.save(data);
}
