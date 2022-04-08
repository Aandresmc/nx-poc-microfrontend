import { PathUri } from '../utils/path';

export const environment = {
  production: false,
  API_HOST: 'https://example',
  PORT: '',
};

const core: PathUri = {
  baseUrl: environment.API_HOST,
  port: environment.PORT,
  context: '/g/',
  service: 'service',
};

export const environments = {
  core,
};
