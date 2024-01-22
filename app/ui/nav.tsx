'use client';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import Link from 'next/link';
import { useState } from 'react';
import CreateForm from './createFrom';
const Nav = () => {
  const [isDialogOpen, setDialogOpen] = useState(true);

  const openDialog = () => {
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };
  return (
    <nav className=' dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <Link href={'/'}>
          <h1 className='text-white'>Blog with next JS</h1>
        </Link>
        <div className='flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse'>
          {isDialogOpen && (
            <Dialog>
              <DialogTrigger asChild>
                <Button variant='outline' onClick={openDialog}>
                  Create Post
                </Button>
              </DialogTrigger>
              <DialogContent className='sm:max-w-[425px]'>
                <DialogHeader>
                  <DialogTitle>Create Post</DialogTitle>
                  <CreateForm onClose={closeDialog} />
                </DialogHeader>
              </DialogContent>
            </Dialog>
          )}

          <button
            data-collapse-toggle='navbar'
            type='button'
            className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            aria-expanded='false'
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
