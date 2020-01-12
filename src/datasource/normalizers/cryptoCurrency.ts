import { CryptoCurrency } from '../../models';

export function getCryptoCurrencies(data: any): CryptoCurrency[] {
  return (data || []).map(getCryptoCurrency);
}

export function getCryptoCurrency(data: any): CryptoCurrency {
  const cryptoCurrency = new CryptoCurrency();
  cryptoCurrency.id = data.id;
  cryptoCurrency.name = data.name;
  cryptoCurrency.symbol = data.symbol;
  cryptoCurrency.rank = data.cmc_rank;

  return cryptoCurrency;
}
