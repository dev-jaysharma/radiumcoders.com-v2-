import { z } from "zod";

const ContactFormSchema = z.object({
  companyName: z.string(),
  name: z.string(),
  title: z.string(),
  phone: z.string(),
});

export { ContactFormSchema };
export type ContactFormSchemaType = z.infer<typeof ContactFormSchema>;
