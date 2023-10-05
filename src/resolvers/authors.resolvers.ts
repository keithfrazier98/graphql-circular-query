// Resolvers define how to fetch the types defined in your schema.
import { Author, Resolvers } from "types/generated/graphql";
import { Context, DataSourceAuthor } from "types";

const mapAuthorToResolverType = (author: DataSourceAuthor): Author => {
 console.log(author);
 
  return {
  ...author,
  books: author.books.map((id) => ({ id })),}
};

// This resolver retrieves authors from the "authors" array above.
export const resolvers: Resolvers = {
  Query: {
    authors: (_, __, { dataSources }: Context) =>
      dataSources.authors.map(mapAuthorToResolverType),
  },
  Book: {
    //@ts-ignore
    author: (parent, __, { dataSources }: Context) => {
      console.log(parent);
      return dataSources.authors.find((author) => author.id === parent.id);
    },
  },
};
