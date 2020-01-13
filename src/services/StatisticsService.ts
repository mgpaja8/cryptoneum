import { getRepository } from 'typeorm';
import { getAllQuotesForCryptoCurrency } from './QuoteService';
import { calculateChange } from '../lib';
import { CryptoCurrency } from '../models';

export interface Stats {
  id: number;
  current: StatItem;
  5: StatItem;
  10: StatItem;
  15: StatItem;
  20: StatItem;
  25: StatItem;
  30: StatItem;
}

export interface StatItem {
  available: boolean;
  change?: number;
  price?: number;
}

export async function getStats(id: number): Promise<Stats | undefined> {
  const ccRepository = getRepository(CryptoCurrency);

  const currency = await ccRepository.findOne(id, { relations: ['quotes']});
  const quotes = currency?.quotes.reverse();

  if (!quotes) {
    return undefined;
  }

  const currentPrice = quotes[0].price;

  const stats: StatItem[] = [1, 5, 10, 15, 20, 25, 30].map(period => {
    if (quotes.length > period) {
      return {
        available: true,
        price: quotes[period].price,
        change: calculateChange(currentPrice, quotes[period].price)
      };
    } else {
      return { available: false };
    }
  });

  return {
    id,
    current: stats[0],
    5: stats[1],
    10: stats[2],
    15: stats[3],
    20: stats[4],
    25: stats[5],
    30: stats[6]
  };
}
