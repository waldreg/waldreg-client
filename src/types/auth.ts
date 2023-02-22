export interface SignupBasicFormData {
  name: string;
  userId: string;
  userPassword: string;
  phoneNumber: string;
}

export type SignupFormData = SignupBasicFormData;

export interface NewUser {
  name: string;
  user_id: string;
  user_password: string;
  phone_number: string;
}
