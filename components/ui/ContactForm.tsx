"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";
import { client } from "@/lib/client.orpc";
import { ContactFormSchema } from "@/server/db/schema/contact-form-schema";

const formSchema = ContactFormSchema;

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      name: "",
      title: "",
      phone: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      client.contactForm.add(values);
      toast.success("Form submitted successfully!");
    } catch (error) {
      toast.error(`Failed to submit the form. Please try again. error ==> ${error}`);
    }
  }

  return (
    <Form {...form}>
      <form
        className="mx-auto w-full space-y-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Name</FormLabel>
              <FormControl>
                <Input placeholder="e.g. RadiumCoders" type="text" {...field} />
              </FormControl>
              <FormDescription>company name</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="e.g. John Doe" type="text" {...field} />
              </FormControl>
              <FormDescription>Your name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Service Title</FormLabel>
              <FormControl>
                <Input
                  placeholder="e.g. Web Developer"
                  type="text"
                  {...field}
                />
              </FormControl>
              <FormDescription>The service you want.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="flex flex-col items-start">
              <FormLabel>Phone number</FormLabel>
              <FormControl className="w-full">
                <PhoneInput
                  placeholder="9xxxx9xxxx"
                  {...field}
                  defaultCountry="IN"
                />
              </FormControl>
              <FormDescription>Enter your phone number.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          className="mt-2 w-full py-2 text-base sm:text-lg md:text-xl"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
