export interface DataSourceBook {
  id: number;
  title: string;
  authorId: number;
}

export interface DataSourceAuthor {
  id: number;
  books: number[];
  name: string;
}
