import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { users } from './user';
import { createInitialRSCPayloadFromFallbackPrerender } from 'next/dist/client/flight-data-helpers';


export const sessions = pgTable('sessions', {
    id: uuid('id').primaryKey(),
    userId: uuid('user_id').references(() => users.id, { onDelete: 'cascade'}).notNull(),
    token: text('token').unique().notNull(),
    ipAdress: text('ip_address'),
    userAgent: text('user_agent'),
    expiresAt: timestamp('expires_at').notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
});