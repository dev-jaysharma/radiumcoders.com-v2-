import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const ContactFormSchema = sqliteTable("contact_form", {
  id: int().primaryKey({ autoIncrement: true }),
  companyName: text().notNull(),
  name: text().notNull(),
  title: text().notNull(),
  phone: text().notNull(),
});
