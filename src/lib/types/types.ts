import { ObjectId } from 'mongodb';

export type User = {
  _id: string | ObjectId;
  role: 'admin' | 'student';
  name: string;
  matrNumber: string;
  email: string;
  password: string;
  telephone?: string;
  grpNr?: number;
  grpName?: string;
  orders?: string[]; // Store the id's of the orders
  isDeleted: boolean;
  crAt: string;
  leAt: string;
};

export type UserForFrontend = {
  role: 'admin' | 'student';
  name: string;
  matrNumber: string;
  email: string;
  password: string;
  telephone?: string;
  grpNr?: number;
  grpName?: string;
};

export type TechComponent = {
  _id: string | ObjectId;
  adminId: string; // Track which admin has created the TechComponent
  title: string;
  description: string;
  location: string;
  amount: number;
  artNr: string;
  orders?: string[];
  path?: string;
  mimetype?: string;
  base64Image?: string | null;
  isDeleted: boolean;
  crAt: string;
  leAt: string;
};

export type TechComponentForFrontend = {
  title: string;
  description: string;
  location: string;
  amount: number;
  artNr: string;
  orders?: string[];
  file?: string | Blob;
};

export type TechComponentOrder = {
  techComponentId: string;
  amount: number;
};

export type Order = {
  _id: string | ObjectId;
  comment?: string;
  returnPeriod?: string;
  status: 'reserved' | 'booked' | 'returned';
  adminId?: string; // Track which admin has accepted the reservation
  studentId: string; // Track to which student the Order belongs
  techComponents: TechComponentOrder[];
  crAt: string;
  leAt: string;
};

export type Kpi = {
  reservedAmount: number;
  bookedAmount: number;
  returnedAmount: number;
  techComponentsAmount?: number;
};
