import { MigrationInterface } from 'typeorm';
import { balkaneumDatasource } from '../datasource';
import { saveBulkCryptoCurrencies } from '../services';

export class DefaultSelectedCryptoCurrencies1578865921200 implements MigrationInterface {
  public async up(): Promise<any> {
    const btc = await balkaneumDatasource.getOne('BTC');
    const eth = await balkaneumDatasource.getOne('ETH');
    const blu = await balkaneumDatasource.getOne('BLU');
    const sfx = await balkaneumDatasource.getOne('SFX');

    btc.selected = true;
    eth.selected = true;
    blu.selected = true;
    sfx.selected = true;

    await saveBulkCryptoCurrencies([btc, eth, blu, sfx]);
  }

  public async down(): Promise<any> {
    throw new Error('Not implemented.');
  }
}
