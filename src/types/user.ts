export interface User {
  id: string;
  name: string;
  email: string;
  created_at: Date;
  updated_at: Date;
}

export interface CreateUserRequest {
  name: string;
  email: string;
  created_at: Date;
  updated_at: Date;
}

export interface UpdateUserRequest {
  name: string;
  email: string;
  updated_at: Date;
}
