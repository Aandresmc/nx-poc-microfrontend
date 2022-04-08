import { PathUri } from '../utils/path';

export const environment = {
  production: true,
  API_HOST: 'https://example-test',
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
