import * as request from "supertest";
import { app } from "../../../../app";

describe("Successfully queries films", () => {
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
      query: `{ allFilms { characters, episode_id } }`
    };
    const response = await createdRequest
      .post("/graphql")
      .set("Accept", "application/json")
      .send(postData);
    done();
  });
});
