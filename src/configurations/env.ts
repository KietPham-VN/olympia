import * as dotenv from "dotenv";
import { join } from "path";

dotenv.config({ path: join(__dirname, "../../.env") });

function getEnvVar(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
}

export const DB_HOST = getEnvVar("DB_HOST");
export const DB_PORT = getEnvVar("DB_PORT");
export const DB_USER = getEnvVar("DB_USER");
export const DB_PASSWORD = getEnvVar("DB_PASSWORD");
export const DB_NAME = getEnvVar("DB_NAME");
export const DATABASE_URL = getEnvVar("DATABASE_URL");
