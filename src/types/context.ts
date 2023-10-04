import { Author, Book } from "generated/graphql";

export interface Context {
  dataSources: {
    books: Book[];
    authors: Author[];
  };
}
