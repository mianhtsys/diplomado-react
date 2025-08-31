// src/components/users/type.ts

export type UserFilterStatusType = 'active' | 'inactive' | 'all';

export type UserType = {
  id: number;
  username: string;
  status: 'active' | 'inactive';
};

