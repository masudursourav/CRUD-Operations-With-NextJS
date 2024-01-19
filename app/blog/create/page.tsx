/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import { createBlog } from '@/app/lib/actions';
import { useRef } from 'react';
import { useFormState } from 'react-dom';
export default function Page() {
  const initialState = { message: null, errors: {} };

  // eslint-disable-next
  const ref = useRef<HTMLFormElement>(null);

  const handleClick = (e: { preventDefault: () => void }) => {
    ref.current?.reset();
  };
  const [state, dispatch] = useFormState(createBlog, initialState);
  return (
    <>
      <form className='m-40' action={dispatch}>
        <label htmlFor='title'> Write The Title Here: </label>
        <input
          type='text'
          aria-label='input'
          id='title'
          name='title'
          className='mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='Enter the title'
          required
        />
        <label htmlFor='content'>Write The Content Here : </label>
        <input
          type='text'
          id='content'
          name='content'
          aria-label='input 2'
          className='bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='Enter the content'
          required
        />
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10'
          type='submit'
        >
          Create
        </button>
        <button
          onClick={handleClick}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10 ml-10'
          type='reset'
        >
          Reset
        </button>
      </form>
    </>
  );
}
