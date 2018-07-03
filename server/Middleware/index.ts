import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import { MergedGraphQLSchema } from "../API/GraphQLSchema";

export const initApp = (app: any) => {
  initBodyParser(app);
  initGraphQL(app);
};

const initBodyParser = (app: any) => {
  app.use(cors());
  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: true
    })
  );
};

const initGraphQL = (app: any) => {
  app.use(
    "/graphql",
    // bodyParser.json(),
    graphqlExpress(req => {
      return {
        schema: MergedGraphQLSchema,
        context: {
          req: req ? req : undefined
        }
      };
    })
  );

  app.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));
};
