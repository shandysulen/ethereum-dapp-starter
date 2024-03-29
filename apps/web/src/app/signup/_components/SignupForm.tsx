"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@eds/components";

const formSchema = z
  .object({
    username: z.string().min(1, "Must provide a name."),
  })
  .required();

export type FormSchema = z.infer<typeof formSchema>;

export const SignupForm: React.FC = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  const submitHandler = useCallback(() => {
    const onSubmit = async (data: FormSchema) => {
      try {
        const response = await fetch("/api/auth", {
          method: "POST",
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error("Failed to signup.");
        }
      } catch (err) {
        console.error(err);
      }
    };

    form.handleSubmit(onSubmit);
  }, [form]);

  return (
    <Form {...form}>
      <form onSubmit={submitHandler}>
        <FormField
          control={form.control}
          name='username'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder='username' {...field} />
              </FormControl>
              <FormDescription>This is your username.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  );
};
