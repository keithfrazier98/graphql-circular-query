export interface DataSourceBook {
  id: number;
  pages: number;
  genre: string;
  rating: number; 
  title: string;
  author: number;
}

export interface DataSourceAuthor {
  id: number;
  books: number[];
  name: string;
  rating: number; 
  bestSellers: number[]; 
  publishers: string[];
}
