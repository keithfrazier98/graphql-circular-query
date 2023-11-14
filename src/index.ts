import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { authorsResolvers, booksResolvers } from "./resolvers";
import { readFileSync } from "fs";
import { dataSources } from "./data";
import type { Context } from "./types";
import {
  simpleEstimator,
  createComplexityRule,
} from "graphql-query-complexity";

const typeDefs = readFileSync("dist/schema.graphql", { encoding: "utf-8" });

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.

const server = new ApolloServer<Context>({
  typeDefs,
  resolvers: [authorsResolvers, booksResolvers],
  validationRules: [
    createComplexityRule({
      estimators: [
        simpleEstimator({ defaultComplexity: 1 }),
      ],
      maximumComplexity: 1000,
      onComplete: (complexity: number) => {
        console.log("Query Complexity:", complexity);
      },
    }),
  ],
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests

// @ts-ignore
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async () => ({ dataSources }),
});

console.log(`🚀  Server ready at: ${url}`);
