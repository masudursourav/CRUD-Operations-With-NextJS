/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import { createBlog } from '@/app/lib/actions';
import ShowForm from '@/app/ui/showForm';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useFormState } from 'react-dom';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const formSchema = z.object({
  title: z
    .string()
    .min(2, {
      message: 'This field is required',
    })
    .transform((value) => value.replace(/\s+/g, ''))
    .pipe(z.string().min(1, { message: 'Title must be at least 2 characters.' })),
  content: z.string().min(5, {
    message: 'Content must be at least 5 characters.',
  }),
});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function CreateForm({ onClose }: { onClose: any }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      content: '',
    },
    mode: 'all',
  });
  const [show, setShow] = useState(false);
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    setShow(!show);
    onClose();
  }

  const initialState = { message: null, errors: {} };
  // eslint-disable-next
  const [state, dispatch] = useFormState(createBlog, initialState);
  return (
    <div className='mt-40 p-20'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder='Tile' {...field} />
                </FormControl>
                <FormDescription>This is your Content Title.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='content'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Content</FormLabel>
                <FormControl>
                  <Input placeholder='Content' {...field} />
                </FormControl>
                <FormDescription>This is your Content.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit'>Submit</Button>
          <Button
            type='button'
            onClick={() => {
              form.reset();
            }}
          >
            Reset
          </Button>
        </form>
      </Form>
      {show && <ShowForm forValues={form.getValues()} />}
    </div>
  );
}
