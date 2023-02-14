export interface User {
  id: number;
  name: string;
  user_id: string;
  phone_number: string;
  character: string;
  created_at: string;
  reward_point: number;
  social_login: string[];
}

export interface Users {
  max_idx: number;
  users: User[];
}
