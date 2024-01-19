import { BlogT } from './type';
const baseUrl = 'http://localhost:3001/';
export const getAllPosts = async (): Promise<BlogT[]> => {
  const res = await fetch(`${baseUrl}blogs`, { next: { revalidate: 30 } });
  const blog = await res.json();
  return blog;
};

export const getAllPostById = async ({ id }: { id: string }): Promise<BlogT> => {
  console.log(id);
  const res = await fetch(`${baseUrl}blogs/${id}`, { cache: 'no-store' });
  const blog = await res.json();
  return blog;
};
