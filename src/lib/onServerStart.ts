import { balkaneumDatasource } from '../datasource';
import { saveBulkCryptoCurrencies } from '../services';

export async function onServerStart(): Promise<void> {
  const data = await balkaneumDatasource.getAll();

  await saveBulkCryptoCurrencies(data);
}
