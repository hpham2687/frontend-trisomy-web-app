import { baseConfigs } from './base';

const configs = {
  apiUrl: 'http://103.179.191.178:3000',
  appUrl: 'http://103.179.191.178',
};

export default Object.freeze({ ...baseConfigs, ...configs });
