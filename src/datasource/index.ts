import { BalkaneumDatasource, BalkaneumDatasourceConfig } from './BalkaneumDatasource';

const balkaneumDatasourceConfig: BalkaneumDatasourceConfig = {
  baseURL: 'http://balkaneum.com:31226/api/v1'
};
export const balkaneumDatasource = new BalkaneumDatasource(balkaneumDatasourceConfig);
