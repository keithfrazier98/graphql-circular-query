// Resolvers define how to fetch the types defined in your schema.

import { Context } from "vm";
import { Resolvers } from "../generated/graphql";
// This resolver retrieves books from the "books" array above.
export const resolvers: Resolvers = {
  Query: {
    books: (_, __, { dataSources }: Context) => dataSources.books,
  },
  Book: {
    author: (parent, __, { dataSources }: Context) =>
      dataSources.authors.find((author) => author.id === parent.author),
  },
};
