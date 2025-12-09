import { drizzle } from 'drizzle-orm/neon-http';
import 'dotenv/config';
import * as schema from '@/src/lib/db/index';

import * as dotenv from 'dotenv';
import { neon } from '@neondatabase/serverless';

dotenv.config({ path: '.env.local' });

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql, { schema });
