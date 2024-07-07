import type {Member} from '@/app/_types/Member';

export type Family = {
  idFamily: string;
  email: string;
  address: string;
  zipCode: string;
  city: string;
  phoneNumber: string;
  members: Member[];
}