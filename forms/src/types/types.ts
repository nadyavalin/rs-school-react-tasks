export interface FormState {
  id: number;
  name: string;
  age: string;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  country: string;
  picture: null | string;
  terms: boolean;
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
