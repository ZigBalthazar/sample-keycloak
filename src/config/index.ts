import { config } from 'dotenv';
config({ path: `.env.${process.env.NODE_ENV || 'dev'}` });

export const CREDENTIALS = process.env.CREDENTIALS === 'true';
export const { NODE_ENV, PORT, ORIGIN } =
  process.env;
