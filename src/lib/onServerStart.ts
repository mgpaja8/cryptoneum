import { balkaneumDatasource } from '../datasource';
import { getAllCryptoCurrencies, saveBulkCryptoCurrencies } from '../services';

export function onServerStart(): void {
  getAllCryptoCurrencies()
    .then(async cryptoCurrencies => {
      // Very naive way to check if we should fetch all currencies again.
      if (cryptoCurrencies.length === 0) {
        const data = await balkaneumDatasource.getAll();

        saveBulkCryptoCurrencies(data)
          .then(() => console.log('Bulk saved Crypto Currencies'))
          .catch(e => console.log(e));
      }
    })
    .catch(e => console.log(e));
}
