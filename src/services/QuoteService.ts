import { getRepository } from 'typeorm';
import { CryptoCurrency, Quote } from '../models';

export async function getAllQuotesForCryptoCurrency(cryptoCurrency: CryptoCurrency): Promise<Quote[]> {
  const quoteRepository = getRepository(Quote);

  return quoteRepository.find({ where: { cryptoCurrency }});
}

export async function saveQuote(data: Quote): Promise<Quote> {
  const quoteRepository = getRepository(Quote);

  return quoteRepository.save(data);
}
