import { Quote } from '../../models';

export function getQuote(data: any): Quote {
  const quote = new Quote();
  quote.price = data.price;
  quote.marketCap = data.market_cap;
  quote.lastUpdated = data.last_updated;

  return quote;
}
