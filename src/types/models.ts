export interface DataSourceBook {
  id: number;
  title: string;
  author: number;
}

export interface DataSourceAuthor {
  id: number;
  books: number[];
  name: string;
}
