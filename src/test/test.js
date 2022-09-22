import request from "supertest";
import { expect } from "chai";
import { app } from "../js/index.js";

describe("Server checks", () => {
  it("App is running without errors", (done) => {
    request(app).get("/").expect(200, done);
  });
});

describe("auth routes", () => {
  it("/auth responds with 200", (done) => {
    request(app).get("/auth").expect(200, done);
  });
});
