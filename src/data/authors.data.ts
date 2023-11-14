import { DataSourceAuthor } from "types";

export const authors: DataSourceAuthor[] = [
  {
    name: "Kate Chopin",
    id: 1,
    books: [1,3],
    rating: 4.7,
    publishers: ["Good Books & Co.", "Better Books Inc."], 
    bestSellers: [1]
  },
  {
    name: "Paul Auster",
    id: 2,
    books: [2,4],
    rating: 3.8,
    publishers: ["We Love Books LLC", "We Make Books Inc."], 
    bestSellers: [4]
  },
];
