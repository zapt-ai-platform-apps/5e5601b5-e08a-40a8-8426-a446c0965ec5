import { initializeZapt } from '@zapt/zapt-js';
import * as Sentry from '@sentry/node';

Sentry.init({
  dsn: process.env.VITE_PUBLIC_SENTRY_DSN,
  environment: process.env.VITE_PUBLIC_APP_ENV,
  initialScope: {
    tags: {
      type: 'backend',
      projectId: process.env.VITE_PUBLIC_APP_ID
    }
  }
});

const { supabase } = initializeZapt(process.env.VITE_PUBLIC_APP_ID);

export async function authenticateUser(req) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      throw new Error('Missing Authorization header');
    }

    const token = authHeader.split(' ')[1];
    const { data: { user }, error } = await supabase.auth.getUser(token);

    if (error) {
      console.error('Auth error:', error);
      throw new Error('Invalid token');
    }

    return user;
  } catch (error) {
    console.error('Authentication error:', error);
    Sentry.captureException(error);
    throw error;
  }
}

export async function createDbConnection() {
  try {
    const postgres = await import('postgres');
    const { drizzle } = await import('drizzle-orm/postgres-js');
    
    const client = postgres.default(process.env.COCKROACH_DB_URL);
    const db = drizzle(client);
    
    return { db, client };
  } catch (error) {
    console.error('Database connection error:', error);
    Sentry.captureException(error);
    throw error;
  }
}

export const captureError = Sentry.captureException;