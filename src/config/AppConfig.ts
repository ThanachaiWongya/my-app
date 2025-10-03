import type { LocalizationResource } from '@clerk/types';
import type { LocalePrefixMode } from 'next-intl/routing';
import { enUS, thTH } from '@clerk/localizations';

const localePrefix: LocalePrefixMode = 'always';

// App Configuration
export const AppConfig = {
  name: 'BAM',
  locales: ['en', 'th'],
  defaultLocale: 'en',
  localePrefix,
};

const supportedLocales: Record<string, LocalizationResource> = {
  en: enUS,
  th: thTH,
};

export const ClerkLocalizations = {
  defaultLocale: enUS,
  supportedLocales,
};

// API Configuration
export type ApiService = {
  name: string;
  baseURL: string;
  timeout?: number;
  headers?: Record<string, string>;
};

export type ApiConfig = {
  services: Record<string, ApiService>;
  defaultService: string;
  enableMocking: boolean;
};

export const apiConfig: ApiConfig = {
  services: {
    strapi: {
      name: 'strapi',
      baseURL: process.env.NEXT_PUBLIC_STRAPI_API_BASE_URL || 'https://strapi.co.th',
      timeout: 10000,
    },
    main: {
      name: 'Main API',
      baseURL: process.env.NEXT_PUBLIC_BASE_URL || 'https://api.bam.co.th',
      timeout: 10000,
    },
  },
  defaultService: 'main',
  enableMocking: process.env.NODE_ENV === 'development' && process.env.NEXT_PUBLIC_ENABLE_MOCKS === 'true',
};

export const getServiceConfig = (serviceName: keyof typeof apiConfig.services): ApiService => {
  const service = apiConfig.services[serviceName];
  if (!service) {
    throw new Error(`Service "${serviceName}" not found in API configuration`);
  }
  return service;
};

export const getAllServices = (): Record<string, ApiService> => {
  return apiConfig.services;
};

// Helper to extract origin from URL
const getOrigin = (url: string): string => {
  try {
    return new URL(url).origin;
  } catch {
    return url;
  }
};

// External Domains for Preconnect/DNS Prefetch
export const externalDomains = {
  strapi: apiConfig.services.strapi.baseURL ? getOrigin(apiConfig.services.strapi.baseURL) : null,
  main: apiConfig.services.main.baseURL ? getOrigin(apiConfig.services.main.baseURL) : null,
  oneTrust: 'https://cdn.cookielaw.org',
  googleFonts: 'https://fonts.googleapis.com',
  googleFontsStatic: 'https://fonts.gstatic.com',
};
