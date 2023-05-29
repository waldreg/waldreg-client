export interface Board {
  id?: number;
  title: string;
  category: string;
  content: string;
  author: {
    user_id: string;
    name: string;
  };
  created_at: string;
  last_modified_at: string;
  views: number;
  comment_count: number;
  images?: [
    {
      origin: string;
      uuid: string;
    }
  ];
  exist_file: boolean;
  files?: [
    {
      origin: string;
      uuid: string;
    }
  ];
  reactions?: {
    good: number;
    bad: number;
    check: number;
    heart: number;
    smile: number;
    sad: number;
    users: [];
  };
}

export interface BoardLists extends Board {
  max_idx: number;
  boards: Board[];
}

export interface BoardCategory {
  category_id?: number;
  category_name: string;
  category_boards?: number;
}

export interface BoardCategoryLists extends BoardCategory {
  categories: BoardCategory[];
}

export interface BoardComment {
  id?: number;
  content: string;
  name: string;
  created_at: string;
  last_modified_at: string;
}

export interface BoardCommentLists extends BoardComment {
  max_idx: number;
  comments: BoardComment[];
}
