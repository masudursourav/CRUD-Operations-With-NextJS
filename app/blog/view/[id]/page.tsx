import { getAllPostById } from '@/app/lib/api';
import DeleteButton from '@/app/ui/deleteButton';
import EditFrom from '@/app/ui/editFrom';
export default async function page({ params }: { params: { id: string } }) {
  const id = params.id;
  const post = await getAllPostById({ id });
  return (
    <div className='mt-40 p-20'>
      <h1 className='mb-5'>ID: {post.id}</h1>
      <h1 className='mb-5'>Title: {post.title}</h1>
      <h1>Content : {post.content}</h1>
      <div className='flex'>
        {/* <Link href={`/blog/view/${id}/edit`}>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10'>
            Edit Blog Post
          </button>
        </Link> */}
        <EditFrom post={post} />
        <DeleteButton id={params.id} />
      </div>
    </div>
  );
}
