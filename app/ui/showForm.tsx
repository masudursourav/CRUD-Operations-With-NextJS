'use client';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useState } from 'react';

interface ShowFormProps {
  title: string;
  content: string;
}
export default function ShowForm({ forValues }: { forValues: ShowFormProps }) {
  const [open, setOpen] = useState(true);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your account and remove your
            data from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogHeader>
          <DialogTitle>Title</DialogTitle>
          <DialogDescription>{forValues.title}</DialogDescription>
        </DialogHeader>
        <DialogHeader>
          <DialogTitle>Content</DialogTitle>
          <DialogDescription>{forValues.content}</DialogDescription>
        </DialogHeader>
      </DialogContent>
      
    </Dialog>
  );
}
