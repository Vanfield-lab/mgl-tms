
export enum UserRole {
  ADMIN = 'ADMIN',
  STAFF = 'STAFF',
  DRIVER = 'DRIVER',
  GUEST = 'GUEST'
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar: string;
  designation: string;
}

export interface Trip {
  id: string;
  date: string;
  time: string;
  requester: string;
  destination: string;
  pickup: string;
  status: 'Confirmed' | 'Pending' | 'In Progress' | 'Cancelled' | 'Completed';
  driver?: string;
  vehicle?: string;
}

export interface Vehicle {
  id: string;
  name: string;
  plate: string;
  type: string;
  status: 'Available' | 'In Use' | 'Maintenance';
  fuelLevel: number;
  assignedDriver?: string;
  lastService: string;
  dueDate: string;
}
