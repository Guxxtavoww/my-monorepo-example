import 'dotenv/config';
import { z } from 'zod';

import {
  stringSchema,
  optionalStringSchema,
  optionalUrlStringSchema,
  optionalStringToIntegerSchema,
} from '@repo/shared/index';

export const envSchema = z.object({
  DATABASE_ROOT_PASSWORD: stringSchema,
  DATABASE_DATABASE_NAME: stringSchema,
  DB_PORT: optionalStringToIntegerSchema.default('5432'),
  DATABASE_HOST: optionalStringSchema.default('localhost'),
  DB_USER: stringSchema,
  JWT_SECRET: stringSchema,
  JWT_REFRESH_SECRET: stringSchema,
  JWT_REFRESH_EXPIRES_IN: stringSchema,
  JWT_ISSUER: optionalUrlStringSchema,
  JWT_AUDIENCE: optionalUrlStringSchema,
  JWT_EXPIRES_IN: stringSchema,
  PORT: optionalStringToIntegerSchema.default('5000'),
  NODE_ENV: z.enum(['production', 'development']).default('development'),
  APP_PREFIX: optionalStringSchema.default('server'),
});

export type EnvType = z.infer<typeof envSchema>;

export const ENV_VARIABLES = envSchema.parse(process.env);

export const IS_DEV_ENV = ENV_VARIABLES.NODE_ENV === 'development';
