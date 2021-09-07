export type User = {
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

export type TechComponent = {
  id: string;
  adminId: string; // Track which admin has created the TechComponent
  title: string;
  description: string;
  location: string;
  amount: number;
  artNr: string;
  orders?: string[];
  // TODO find out where and how to store the image, until then use a placeholder
  crAt: string;
  leAt: string;
};

export type TechComponentOrder = {
  techComponentId: string;
  amount: number;
};

export type Order = {
  id: string;
  comment?: string;
  returnPeriod?: string;
  status: 'reserved' | 'booked' | 'returned';
  adminId?: string; // Track which admin has accepted the reservation
  studentId: string; // Track to which student the Order belongs
  techComponents: TechComponentOrder[];
  crAt: string;
  leAt: string;
};