// react-hook-form needs `createContext()`
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/Button";
import { Checkbox } from "@/components/Checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/Form";
import { Input } from "@/components/Input";
import { submit } from "../../_actions/submit";

const formSchema = z
  .object({
    name: z.string().min(1, "Must provide a name."),
    email: z.string().email(),
    yearly: z.boolean(),
  })
  .required();

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

  // => { [k: string]: number }

  // function onSubmit(data: FormSchema) {
  //   Object.entries(data).forEach(([key, value]) => {
  //     console.log(`${key}: ${value}`);
  //   });
  // }

  return (
    <Form {...form}>
      <form action={submit}>
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
