import { balkaneumDatasource } from '../datasource';
import { saveBulkCryptoCurrencies } from '../services';
import { startQuotesTimers } from './updateQuotes';

export async function onServerStart(): Promise<void> {
  await updateCryptoCurrencies();
  await startQuotesTimers();
}

async function updateCryptoCurrencies(): Promise<void> {
  const data = await balkaneumDatasource.getAll();

  await saveBulkCryptoCurrencies(data);
}
