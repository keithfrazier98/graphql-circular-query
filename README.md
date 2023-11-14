# GraphQL Query Limit Example

This project is just an example of how to implement simple query complexity limitation in Apollo Server with the [graphql-query-complexity](https://www.npmjs.com/package/graphql-query-complexity) package. 

Some overview bullets on the PoC

- Datasources are static JSON files
- Types are generated using [GraphQL Codegen](https://the-guild.dev/graphql/codegen)

The schema includes a circular reference between the Book and Author types (in the GQL Schema). Query complexity is calculated by the amount of fields that a client queries, regardless of the depth. Each field has the value of 1 and the max complexity is capped at 1000.

> Still looking to include depth limitation and find out how to prevent the client from being able to query in a circular way. I'd like this to somehow integrate with introspection, where when you build your query introspection will know to prevent you from querying a field that has already been resolved as a parent in the same chain. 
