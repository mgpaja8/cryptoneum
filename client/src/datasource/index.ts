import { CryptoneumDatasource, CryptoneumDatasourceConfig } from './CryptoneumDatasource';
import { CryptoneumWebsocket } from './CryptoneumWebsocket';

const cryptoneumDatasourceConfig: CryptoneumDatasourceConfig = {
  baseURL: 'http://localhost:8080'
};
export const cryptoneumDatasource = new CryptoneumDatasource(cryptoneumDatasourceConfig);

export const cryptoneumWebsocket = new CryptoneumWebsocket();
