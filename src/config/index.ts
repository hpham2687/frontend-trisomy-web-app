import devConfigs from './dev';
import prodConfigs from './prod';

let configs = {};

if (REACT_APP_ENV === 'prod') {
  console.log('prod', REACT_APP_ENV);

  configs = prodConfigs;
} else if (REACT_APP_ENV === 'dev') {
  configs = devConfigs;
}

export default Object.freeze({ ...configs });
