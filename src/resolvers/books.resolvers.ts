// Resolvers define how to fetch the types defined in your schema.

import { Book, Context, DataSourceBook } from "types";
import { Resolvers } from "../types";

const mapBooksToResolverType = (book: DataSourceBook): Book => ({
  ...book,
  author: { id: book.author },
});

export const resolvers: Resolvers = {
  Query: {
    books: (_, __, { dataSources }: Context) =>
      dataSources.books.map(mapBooksToResolverType),
  },
  Author: {
    books: (parent, _, { dataSources }: Context) =>{
     const books = dataSources.books.filter((book) =>
        parent.books.find(({ id }) => id === book.id)
      )
    
      return books.map(mapBooksToResolverType)
    }

  },
};
