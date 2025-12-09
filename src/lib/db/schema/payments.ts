import { pgEnum, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { z } from 'zod';
import { relations } from "drizzle-orm";
import { orders } from "./orders";

export const paymentMethodEnum = pgEnum('payment_method', ['stripe', 'paypal', 'cod']);
export const paymentStatusEnum = pgEnum('payment_status', ['initiated', 'completed', 'failed']);


export const payments = pgTable('payments', {
    id: uuid('id').primaryKey().defaultRandom(),
    orderId: uuid('order_id').references(() => orders.id, { onDelete: 'cascade' }).notNull(),
    paymentMethod: paymentMethodEnum('payment_method').notNull(),
    paymentStatus: paymentStatusEnum('payment_status').notNull().default('initiated'),
    paidAt: timestamp('paid_at'),
    transactionId: text('transaction_id'),
});

export const insertPaymentSchema = z.object({
    orderId: z.string().uuid(),
    paymentMethod: z.enum(['stripe', 'paypal', 'cod']),
    paymentStatus: z.enum(['initiated', 'completed', 'failed']).optional(),
    paidAt: z.date().optional().nullable(),
    transactionId: z.string().optional().nullable(),
});

export const selectPaymentSchema = insertPaymentSchema.extend({
    id: z.string().uuid(),
});

export type InsertPayment = z.infer<typeof insertPaymentSchema>;
export type SelectPayment = z.infer<typeof selectPaymentSchema>;