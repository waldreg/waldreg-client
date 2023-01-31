export interface Posts {
  boards: Post[];
  id: number;
  title: string;
  category: string;
  content: string;
  author: {
    id: string;
    name: string;
  };
  created_at: string;
  last_modified_at: string;
  member_tier: string;
  images: [];
  exist_file: boolean;
  reactions: {
    good: number;
    bad: number;
    check: number;
    heart: number;
    smile: number;
    sad: number;
  };
}

export interface Post {
  id: number;
  title: string;
  category: string;
  content: string;
  author: {
    user_id: string;
    name: string;
  };
  created_at: string;
  last_modified_at: string;
  member_tier: string;
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
