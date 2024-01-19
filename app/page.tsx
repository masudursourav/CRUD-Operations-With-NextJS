import { getAllPosts } from './lib/api';
import Card from './ui/card';
export default async function Home() {
  const posts = await getAllPosts();
  return (
    <main className='flex flex-col items-center justify-between p-24'>
      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
        {posts.map((post) => (
          <Card key={post.id} id={post.id} title={post.title}></Card>
        ))}
      </div>
    </main>
  );
}
