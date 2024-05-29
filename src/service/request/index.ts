import { getServiceEnvConfig } from '~/.env-config.ts';
import { createRequest } from './request';

const { url } = getServiceEnvConfig(import.meta.env);

export const request = createRequest({ baseURL: url });

export const mockRequest = createRequest({ baseURL: '/mock' });
