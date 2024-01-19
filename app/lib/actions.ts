'use server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { v4 as uuid } from 'uuid';
import { z } from 'zod';
import { BlogT } from './type';

const baseUrl = 'http://localhost:3001/';
export type State = {
  errors?: {
    title?: string[];
    content?: string[];
  };
  message?: string | null;
};
const blogCreateSchema = z.object({
  id: z.string(),
  title: z.string({
    invalid_type_error: 'Please enter the title',
  }),
  content: z.string({
    invalid_type_error: 'Please enter the content',
  }),
});
const CreteBlog = blogCreateSchema.omit({ id: true });
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function createBlog(prevState: State, payload: FormData): Promise<any> {
  const validatedFields = CreteBlog.safeParse({
    title: payload.get('title'),
    content: payload.get('content'),
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing title/content. Failed to create post.',
    };
  }
  const { title, content } = validatedFields.data;

  const newData: BlogT = {
    id: '',
    title: '',
    content: '',
  };

  newData.id = uuid();
  newData.title = title;
  newData.content = content;
  try {
    await fetch(`${baseUrl}blogs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    });
  } catch (error) {
    // If a database error occurs, return a more specific error.
    return {
      message: 'Database Error: Failed to Create Invoice.',
    };
  }
  //revalidatePath('/');
  //redirect(`/blog/view/${newData.id}`);
  redirect('/');
}

const EditPost = blogCreateSchema.omit({ id: true });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function editPost(id: string, prevState: State, formData: FormData): Promise<any> {
  //console.log(id);
  //console.log(formData);
  const validatedFields = EditPost.safeParse({
    title: formData.get('title'),
    content: formData.get('content'),
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Something is wrong',
    };
  }
  const { title, content } = validatedFields.data;
  const newData: BlogT = {
    id: '',
    title: '',
    content: '',
  };
  newData.id = id;
  newData.title = title;
  newData.content = content;
  console.log('hello');
  console.log(newData);
  try {
    await fetch(`${baseUrl}blogs/${newData.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    });
  } catch (error) {
    // If a database error occurs, return a more specific error.
    return {
      message: 'Database Error: Failed to Create Invoice.',
    };
  }
  revalidatePath('/');
  redirect(`/blog/view/${newData.id}`);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function deletePost(id: string): Promise<void> {
  await fetch(`${baseUrl}blogs/${id}`, {
    method: 'DELETE',
  });
  revalidatePath('/');
  redirect('/');
}
