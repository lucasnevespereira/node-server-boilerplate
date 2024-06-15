import * as dotevnv from "dotenv"
dotevnv.config()

type EnvValue = string | number;

const getStringEnv = (key: string, defaultValue?: string): string => {
  return getEnv(key, defaultValue) as string;
}

const getNumberEnv = (key: string, defaultValue?: number): number => {
  return getEnv(key, defaultValue) as number;
}

const getEnv = (key: string, defaultValue?: EnvValue): EnvValue => {
  const value = process.env[key];
  if (value === undefined && defaultValue === undefined) {
    console.error(`Environment variable ${key} is not set and no default value provided.`);
    // In case you prefer to throw an error
    // throw new Error(`Environment variable ${key} is not set and no default value provided.`);
  }
  return value || defaultValue!;
}

export default {
  PORT: getNumberEnv("PORT", 9000),
  APP_NAME: getStringEnv("APP_NAME", "Server"),
  APP_ENV: getStringEnv("APP_ENV", "dev"),
  DB_URL: getStringEnv("DB_URL"),
  DB_NAME: getStringEnv("DB_NAME"),
}