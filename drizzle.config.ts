import { drizzle} from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import { config } from 'dotenv';

import { defineConfig } from 'drizzle-kit';
config({ path: '.env.local' });

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql);

export default defineConfig({
    schema: './src/lib/db/schema/index.ts',
    out: './migrations',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    },
});

