import { Currency } from '../../models';

export function getCurrencies(data: any): Currency[] {
  return (data || []).map(getCurrency);
}

export function getCurrency(data: any): Currency {
  return {
    id: data.id,
    name: data.name,
    symbol: data.symbol,
    rank: data.rank,
    selected: data.selected,
    price: data.quotes && data.quotes[0] && data.quotes[0].price.toFixed(4),
    marketCap: data.quotes && data.quotes[0] && data.quotes[0].marketCap,
    updatedAt: new Date(data.quotes && data.quotes[0] && data.quotes[0].lastUpdated).getTime()
  };
}
