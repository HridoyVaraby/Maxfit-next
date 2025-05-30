'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { LuEye } from 'react-icons/lu';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from '@/components/ui/dialog';
import { formatDate } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';

type ContactSubmission = {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  created_at: string;
  is_read: boolean;
};

interface ContactViewDialogProps {
  contact: ContactSubmission;
}

export default function ContactViewDialog({ contact }: ContactViewDialogProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Button
        variant="ghost"
        size="sm"
        className="h-8 w-8 p-0"
        onClick={() => setOpen(true)}
      >
        <LuEye className="h-4 w-4" />
      </Button>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Contact Submission Details</DialogTitle>
          <div className="text-xs text-muted-foreground">
            Submitted on {formatDate(contact.created_at)}
          </div>
        </DialogHeader>

        <ScrollArea className="max-h-[60vh] mt-4">
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-2">
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">Status</h4>
                <div>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${contact.is_read ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100' : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100'}`}
                  >
                    {contact.is_read ? 'Read' : 'Unread'}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2">
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">Name</h4>
                <p className="text-sm">{contact.name}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2">
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">Email</h4>
                <p className="text-sm">{contact.email}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2">
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">Phone</h4>
                <p className="text-sm">{contact.phone}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2">
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">Subject</h4>
                <p className="text-sm">{contact.subject}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2">
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">Message</h4>
                <p className="text-sm whitespace-pre-wrap">{contact.message}</p>
              </div>
            </div>
          </div>
        </ScrollArea>

        <div className="flex justify-end mt-4">
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}