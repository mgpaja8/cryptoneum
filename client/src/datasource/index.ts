import { CryptoneumDatasource, CryptoneumDatasourceConfig } from './CryptoneumDatasource';

const cryptoneumDatasourceConfig: CryptoneumDatasourceConfig = {
  baseURL: 'http://localhost:8080'
};
export const cryptoneumDatasource = new CryptoneumDatasource(cryptoneumDatasourceConfig);
