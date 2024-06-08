import { buildSchema, graphql } from "graphql";
import rowSchema from "schemas/schema.graphql";
import resolver from "./resolvers";

const schema = buildSchema(rowSchema);

export const graphqlServer = (query: string) => {
  return graphql({
    schema,
    source: query,
    rootValue: resolver,
  });
};
