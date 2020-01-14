import { balkaneumDatasource } from '../datasource';
import {
  getAllSelectedCryptoCurrencies,
  getOneCryptoCurrency,
  getStats,
  saveCryptoCurrency,
  saveQuote
} from '../services';
import { emit, SocketEvents } from '../socket';
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
  const quote = await saveQuote(cryptoCurrencyUpdated.quotes[0]);
  emit('QUOTE_UPDATED', {
    id: cryptoCurrencyUpdated.id,
    quote
  });

  const cryptoCurrency = await getOneCryptoCurrency(cryptoCurrencyUpdated.id);

  if (!!cryptoCurrency) {
    cryptoCurrency.rank = cryptoCurrencyUpdated.rank;
    cryptoCurrency.quotes = [...cryptoCurrency.quotes, cryptoCurrencyUpdated.quotes[0]];
    await saveCryptoCurrency(cryptoCurrency);
  }

  await recalculateStats(cryptoCurrencyUpdated.id);
}

async function recalculateStats(id: number): Promise<void> {
  const stats = await getStats(id);

  emit(SocketEvents.STATS_UPDATED, stats);
}
