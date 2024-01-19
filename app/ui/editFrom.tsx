'use client';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useRef, useState } from 'react';
import { useFormState } from 'react-dom';
import { editPost } from '../lib/actions';
import { BlogT } from '../lib/type';

export default function EditFrom({ post }: { post: BlogT }) {
  const initialState = { message: null, errors: {} };
  const editPostWithId = editPost.bind(null, post.id);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [state, dispatch] = useFormState(editPostWithId, initialState);
  console.log(dispatch);
  console.log(editPostWithId);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLFormElement>(null);
  function handleClick(e: { preventDefault: () => void }) {
    e.preventDefault();
    ref.current?.reset();
  }
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant='outline'>Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when done.
          </DialogDescription>
        </DialogHeader>
        <form
          ref={ref}
          action={async (formData) => {
            dispatch(formData);

            setIsOpen(false);
          }}
        >
          <label htmlFor='title'> Edit The Title Here: </label>
          <input
            type='text'
            aria-label='input'
            id='title'
            name='title'
            className='mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Enter the title'
            defaultValue=''
W          />
          {/* <Select name='select'>
            <SelectTrigger className='w-[180px]'>
              <SelectValue placeholder='Select a fruit' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value='apple'>Apple</SelectItem>
                <SelectItem value='banana'>Banana</SelectItem>
                <SelectItem value='blueberry'>Blueberry</SelectItem>
                <SelectItem value='grapes'>Grapes</SelectItem>
                <SelectItem value='pineapple'>Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select> */}
          <label htmlFor='content'>Edit The Content Here : </label>
          <input
            type='text'
            id='content'
            name='content'
            aria-label='input 2'
            className='bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Enter the content'
            defaultValue={post.content}
          />
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10'
            type='submit'
          >
            Edit
          </button>
          <button
            onClick={handleClick}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10 ml-10'
            type='button'
          >
            Reset
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
