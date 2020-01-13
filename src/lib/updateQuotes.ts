import { balkaneumDatasource } from '../datasource';
import { getAllSelectedCryptoCurrencies, getOneCryptoCurrency, saveCryptoCurrency, saveQuote } from '../services';
import { CryptoCurrency } from '../models';

const QUOTE_INTERVAL = 60 * 1000;

export async function startQuotesTimers(): Promise<void> {
  const selectedCryptoCurrencies = await getAllSelectedCryptoCurrencies();

  selectedCryptoCurrencies.map(processSelectedCryptoCurrency);
}

async function processSelectedCryptoCurrency(cryptoCurrency: CryptoCurrency): Promise<void> {
  await fetchNewQuote(cryptoCurrency.symbol);
  setInterval(() => fetchNewQuote(cryptoCurrency.symbol), QUOTE_INTERVAL);
}

async function fetchNewQuote(symbol: string): Promise<void> {
  const cryptoCurrencyUpdated = await balkaneumDatasource.getOne(symbol);
  await saveQuote(cryptoCurrencyUpdated.quotes[0]);

  const cryptoCurrency = await getOneCryptoCurrency(cryptoCurrencyUpdated.id);

  if (!!cryptoCurrency) {
    cryptoCurrency.rank = cryptoCurrencyUpdated.rank;
    cryptoCurrency.quotes = [...cryptoCurrency.quotes, cryptoCurrencyUpdated.quotes[0]];
    await saveCryptoCurrency(cryptoCurrency);
  }
}