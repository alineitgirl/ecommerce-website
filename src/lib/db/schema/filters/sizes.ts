import { pgTable, text, integer, uuid } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { z } from 'zod';
import { productVariants } from "../variants";

export const sizes = pgTable('sizes', {
    id: uuid('id').primaryKey().defaultRandom(),
    name: text('name').notNull(),
    slug: text('slug').notNull().unique(),
    sortOrder: integer('sort_order').notNull(),
});

export const sizeRelations = relations(sizes, ({ many }) => ({
    variants: many(productVariants)
}));

export const insertSizeSchema = z.object({
    name: z.string().min(1),
    slug: z.string().min(1),
    sortOrder: z.number().min(0),
});

export const selectSizeSchema = insertSizeSchema.extend({
    id: z.string().uuid(),
});

export type InsertSize = z.infer<typeof selectSizeSchema>;
export type SelectSize = z.infer<typeof selectSizeSchema>;