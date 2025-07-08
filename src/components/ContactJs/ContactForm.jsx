"use client";

import React from "react";
import { useForm } from "react-hook-form";
import {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
} from "@/components/ui/form";
import emailjs from "emailjs-com";
import { Result } from "postcss";

function ContactForm() {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  return (
    <Form {...form}>
      <form
        className="space-y-6 max-w-lg mx-auto my-8"
        onSubmit={form.handleSubmit((data) => {
          console.log(data);
          // Handle form submission logic here
          emailjs.send(
            "service_ctv9azi",
            "template_utfvmhx",
            {
              name: data.name,
              email: data.email,
              message: data.message,
            },
            "S232evyeiRVGwFbXN" // Your EmailJS user ID
          ).then(
            (Result) => {
              alert("Message sent successfully!");
            },
              (error) => {
                alert("Oops! Something went wrong. Please try again later.");
              }
          );
        })}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <input
                  type="text"
                  placeholder="Adam Smith"
                  {...field}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <input
                  type="email"
                  placeholder="someone@mail.com"
                  {...field}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>How Can We Help?</FormLabel>
              <FormControl>
                <textarea
                  placeholder="Write your message here..."
                  {...field}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </FormControl>
              <FormDescription>
                We'll be in touch soon
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <button
          type="submit"
          className="mt-4 bg-yellow-400 text-black px-6 py-2 rounded-md hover:bg-yellow-500 transition-colors duration-200"
        >
          Submit
        </button>
      </form>
    </Form>
  );
}

export default ContactForm;
