// Resolvers define how to fetch the types defined in your schema.
import { authors } from "../data/authors.data";

// This resolver retrieves authors from the "authors" array above.
export const resolvers = {
    Query: {
      authors: () => authors,
    },
  };
