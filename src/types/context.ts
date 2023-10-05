import { DataSourceAuthor, DataSourceBook } from "types/models";

export interface Context {
  dataSources: {
    books: DataSourceBook[];
    authors: DataSourceAuthor[];
  };
}
