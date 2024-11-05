"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo } from "react";
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
import { trpc } from "@/app/_trpc/client";

const formSchema = z.object({
  name: z.string().min(1, "Must provide a name."),
  email: z.string().email(),
});

export type FormSchema = z.infer<typeof formSchema>;

export const PremiumSubscriptionForm: React.FC = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const submitForm = trpc.form.submit.useMutation({
    onMutate: () => {
      console.log("submitting");
    },
    onSuccess: () => {
      console.log("success");
    },
    onError: (err) => {
      console.log("error", err);
    },
  });

  const submitHandler = useMemo(() => {
    const onSubmit = (data: FormSchema) => {
      submitForm.mutate(data);
    };

    return form.handleSubmit(onSubmit);
  }, [form]);

  return (
    <Form {...form}>
      <form onSubmit={submitHandler} className='flex flex-col gap-6'>
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
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  );
};
