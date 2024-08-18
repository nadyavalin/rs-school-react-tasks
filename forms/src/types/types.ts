export interface FormState {
  id: number;
  name: string;
  age: string;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  country: string;
  picture: string | null;
  terms?: boolean | undefined;
  isNew?: boolean;
}

export interface ErrorState {
  name?: string;
  age?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  gender?: string;
  country?: string;
  picture?: string;
  terms?: boolean;
}
