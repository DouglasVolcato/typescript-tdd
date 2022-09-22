import request from "supertest";
import { app } from "../js/index.js";

describe("Server checks", () => {
  it("App is running without errors", (done) => {
    request(app).get("/").expect(200, done);
  });
});

describe("Dashboard response", () => {
  it("/dashboard responds with 200", (done) => {
    request(app).get("/dashboard").expect(200, done);
  });
});

describe("Post response", () => {
  it("/post responds with 200", (done) => {
    request(app)
      .post("/post")
      .set("Accept", "application/json")
      .send({ note: "Note here" })
      .expect(200, done);
  });
});
