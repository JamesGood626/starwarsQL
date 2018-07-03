import { mergeSchemas } from "graphql-tools";
import filmSchema from "./Films/Schema";
import peopleSchema from "./People/Schema";

export const MergedGraphQLSchema = mergeSchemas({
  schemas: [filmSchema, peopleSchema]
});
