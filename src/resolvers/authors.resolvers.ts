// Resolvers define how to fetch the types defined in your schema.
import { Resolvers } from "generated/graphql";
import { authors } from "../data/authors.data";
import { Context } from "types";

// This resolver retrieves authors from the "authors" array above.
export const resolvers: Resolvers = {
  Query: {
    authors: (_, __, { dataSources }: Context) => dataSources.authors,
  },
  Author: {
    books: (parent, _, { dataSources }: Context) =>
      dataSources.books.filter((book) => book.id === parent.id),
  },
};
