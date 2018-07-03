import { makeExecutableSchema } from "graphql-tools";
// import AllTypeDefs from "../../allTypeDefs";
import FilmTypeDef from "./filmType";
import resolvers from "./resolvers";

const RootQuery = `
  type Query {
    allFilms: [Film]
  }
`;

const SchemaDefinition = `
  schema {
    query: Query
  }
`;

export default makeExecutableSchema({
  typeDefs: [SchemaDefinition, RootQuery, FilmTypeDef],
  resolvers
});
