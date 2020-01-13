import { CryptoCurrency } from '../../models';
import { getQuote } from './quote';

export function getCryptoCurrencies(data: any): CryptoCurrency[] {
  return (data || []).map(getCryptoCurrency);
}

export function getCryptoCurrency(data: any): CryptoCurrency {
  const currencyKey = 'USD';

  const cryptoCurrency = new CryptoCurrency();
  cryptoCurrency.id = data.id;
  cryptoCurrency.name = data.name;
  cryptoCurrency.symbol = data.symbol;
  cryptoCurrency.rank = data.cmc_rank;

  const quote = getQuote(data.quote[currencyKey]);
  cryptoCurrency.quotes = [quote];

  return cryptoCurrency;
}
