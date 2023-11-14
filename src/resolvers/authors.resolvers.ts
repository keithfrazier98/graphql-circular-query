// Resolvers define how to fetch the types defined in your schema.
import { Author, Resolvers } from "types/generated/graphql";
import { Context, DataSourceAuthor } from "types";

const mapAuthorToResolverType = (author: DataSourceAuthor): Author => {
  return {
    ...author,
    books: author.books.map((id) => ({ id })),
    bestSellers: author.bestSellers.map((id) => ({ id })),
  };
};

// This resolver retrieves authors from the "authors" array above.
export const resolvers: Resolvers = {
  Query: {
    authors(_, __, { dataSources }: Context) {
      return dataSources.authors.map(mapAuthorToResolverType);
    },
    author(_, args, { dataSources }: Context) {
      const author = dataSources.authors.find(
        (record) => record.id === args.id
      );
      return mapAuthorToResolverType(author);
    },
  },
  Book: {
    author(parent, __, { dataSources }: Context) {
      const author = dataSources.authors.find(
        (author) => author.id === parent.author.id
      );
      return mapAuthorToResolverType(author);
    },
  },
};
