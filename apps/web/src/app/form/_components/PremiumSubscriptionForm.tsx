"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Button,
  Checkbox,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@eds/components";

const formSchema = z.object({
  name: z.string().min(1, "Must provide a name."),
  email: z.string().email(),
  yearly: z.boolean(),
});

export type FormSchema = z.infer<typeof formSchema>;

export const PremiumSubscriptionForm: React.FC = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      yearly: false,
    },
  });

  const submitHandler = useMemo(() => {
    const onSubmit = (data: FormSchema) => {
      Object.entries(data).forEach(([key, value]) => {
        console.log(`${key}: ${value}`);
      });
    };

    return form.handleSubmit(onSubmit);
  }, [form]);

  return (
    <Form {...form}>
      <form onSubmit={submitHandler}>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder='Shandy' {...field} />
              </FormControl>
              <FormDescription>This is your name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder='shandysulen@gmail.com' {...field} />
              </FormControl>
              <FormDescription>This is your email.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='yearly'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Yearly for 0.5 ETH?</FormLabel>
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormDescription>This is your email.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  );
};
