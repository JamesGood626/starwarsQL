import { makeExecutableSchema } from "graphql-tools";
import AllTypeDefs from "../../allTypeDefs";
import resolvers from "./resolvers";

const RootQuery = `
  type Query {
    allPeople: [People]
  }
`;

const SchemaDefinition = `
  schema {
    query: Query
  }
`;

export default makeExecutableSchema({
  typeDefs: [SchemaDefinition, RootQuery, ...AllTypeDefs],
  resolvers
});
