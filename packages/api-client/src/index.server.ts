import { apiClientFactory } from '@vue-storefront/core';
import type { Setttings, Endpoints } from './types';
import axios from 'axios';
import { getProduct } from './api/getProduct';

function onCreate(settings) {
  if (!settings?.client) {
    return init(settings);
  }

  return {
    config: settings,
    client: settings.client
  };
}
const init = (settings) => {
  const client = axios.create({
    baseURL: settings.api.url
  });

  return {
    config: settings,
    client
  };
};

const { createApiClient } = apiClientFactory<Setttings, Endpoints>({
  onCreate,
  api: {
    getProduct
  }
});

export { createApiClient, init };
