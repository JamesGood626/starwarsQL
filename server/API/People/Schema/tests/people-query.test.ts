import * as request from "supertest";
import { app } from "../../../../app";

describe("Successfully queries people", () => {
  let createdRequest;
  let server;

  beforeAll(async done => {
    server = await app.listen(done);
    createdRequest = await request.agent(server);
  });

  afterAll(async done => {
    await server.close(done);
  });

  test("to get a list of all films", async done => {
    const postData = {
      query: `{ allPeople { name, birth_year, films } }`
    };
    const response = await createdRequest
      .post("/graphql")
      .set("Accept", "application/json")
      .send(postData)
      .expect(200);
    done();
  });
});

// This is what the API returns for a linked resource
// How can I further query this after the first?
// console.log(
//       "THIS IS THE ALL PEOPLE RESPONSE: ",
//       response.body.data.allPeople[0].films
//     );
