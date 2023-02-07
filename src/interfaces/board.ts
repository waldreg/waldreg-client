export interface Board {
  id: number;
  title: string;
  category: string;
  content: string;
  author: {
    user_id: string;
    name: string;
  };
  created_at: string;
  last_modifed_at: string;
  images: [];
  exist_file: boolean;
  files: [];
  reactions: {
    good: number;
    bad: number;
    check: number;
    heart: number;
    smile: number;
    sad: number;
    users: [];
  };
}

export interface BoardList extends Board {
  max_idx: number;
}
