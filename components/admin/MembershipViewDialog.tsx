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

type MembershipRegistration = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  date_of_birth: string;
  gender: string;
  address: string;
  city: string;
  pincode: string;
  emergency_contact_name: string;
  emergency_contact_phone: string;
  emergency_contact_relation: string;
  has_health_conditions: boolean;
  health_conditions_details?: string;
  membership_type: string;
  start_date: string;
  referral_source?: string;
  fitness_goals?: string;
  created_at: string;
  is_read: boolean;
};

interface MembershipViewDialogProps {
  membership: MembershipRegistration;
};

export default function MembershipViewDialog({ membership }: MembershipViewDialogProps) {
  const [open, setOpen] = useState(false);

  // Function to format membership type for display
  const formatMembershipType = (type: string) => {
    switch (type) {
      case 'starter':
        return 'Starter';
      case 'proPlus':
        return 'Pro Plus';
      case 'elite':
        return 'Elite';
      default:
        return type;
    }
  };

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

      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Membership Registration Details</DialogTitle>
          <div className="text-xs text-muted-foreground">
            Registered on {formatDate(membership.created_at)}
          </div>
        </DialogHeader>

        <ScrollArea className="max-h-[60vh] mt-4">
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-2">
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">Status</h4>
                <div>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${membership.is_read ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100' : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100'}`}
                  >
                    {membership.is_read ? 'Processed' : 'New'}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-base font-semibold border-b pb-2 mb-3">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">Name</h4>
                  <p className="text-sm">{`${membership.first_name} ${membership.last_name}`}</p>
                </div>

                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">Email</h4>
                  <p className="text-sm">{membership.email}</p>
                </div>

                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">Phone</h4>
                  <p className="text-sm">{membership.phone}</p>
                </div>

                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">Date of Birth</h4>
                  <p className="text-sm">{formatDate(membership.date_of_birth)}</p>
                </div>

                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">Gender</h4>
                  <p className="text-sm capitalize">{membership.gender}</p>
                </div>

                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">Address</h4>
                  <p className="text-sm">{`${membership.address}, ${membership.city}, ${membership.pincode}`}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-base font-semibold border-b pb-2 mb-3">Emergency Contact</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">Name</h4>
                  <p className="text-sm">{membership.emergency_contact_name}</p>
                </div>

                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">Phone</h4>
                  <p className="text-sm">{membership.emergency_contact_phone}</p>
                </div>

                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">Relation</h4>
                  <p className="text-sm">{membership.emergency_contact_relation}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-base font-semibold border-b pb-2 mb-3">Health Information</h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">Health Conditions</h4>
                  <p className="text-sm">{membership.has_health_conditions ? 'Yes' : 'No'}</p>
                </div>

                {membership.has_health_conditions && membership.health_conditions_details && (
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">Details</h4>
                    <p className="text-sm whitespace-pre-wrap">{membership.health_conditions_details}</p>
                  </div>
                )}
              </div>
            </div>

            <div>
              <h3 className="text-base font-semibold border-b pb-2 mb-3">Membership Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">Membership Type</h4>
                  <p className="text-sm">{formatMembershipType(membership.membership_type)}</p>
                </div>

                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">Start Date</h4>
                  <p className="text-sm">{formatDate(membership.start_date)}</p>
                </div>

                {membership.referral_source && (
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">Referral Source</h4>
                    <p className="text-sm">{membership.referral_source}</p>
                  </div>
                )}

                {membership.fitness_goals && (
                  <div className="space-y-1 md:col-span-2">
                    <h4 className="text-sm font-semibold">Fitness Goals</h4>
                    <p className="text-sm whitespace-pre-wrap">{membership.fitness_goals}</p>
                  </div>
                )}
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