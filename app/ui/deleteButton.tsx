'use client';
import { deletePost } from '../lib/actions';
export default function DeleteButton({ id }: { id: string }) {
  const handleDeleteClick = async () => {
    try {
      await deletePost(id);
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };
  return (
    <div className='ml-10 mt-10'>
      <button
        type='button'
        onClick={handleDeleteClick}
        className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'
      >
        Delete Post
      </button>
    </div>
  );
}
