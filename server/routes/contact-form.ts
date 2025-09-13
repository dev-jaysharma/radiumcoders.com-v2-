import { os } from "@orpc/server";
import db from "@/server/db";
import { ContactFormSchema as ContactFormTable } from "@/server/db/schema/contact-db-schema";
import { ContactFormSchema } from "@/server/db/schema/contact-form-schema";

export const addContactForm = os
  .input(ContactFormSchema)
  .output(ContactFormSchema)
  .handler(async ({ input }) => {
    const result = await db.insert(ContactFormTable).values(input).returning();
    return result[0];
  });
