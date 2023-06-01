export interface JoiningpoolUser {
  id: number;
  name: string;
  user_id: string;
}

export interface JoiningpoolUsers {
  max_idx: number;
  users: JoiningpoolUser[];
}
