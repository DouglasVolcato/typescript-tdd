import chai from "chai";
import chaiHttp from "chai-http";
import { app } from "../js/index.js";

const should = chai.should();
chai.use(chaiHttp);

describe("/ Initiation", () => {
  it("It should initiate the app", (done) => {
    chai
      .request(app)
      .get("/")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property("message").eql("App is running.");
        done();
      });
  });
});

describe("/dashboard", () => {
  it("It should return the dashboard", (done) => {
    chai.request(app).get("/dashboard").end((err,res) => {
      res.should.have.status(200)
      res.body.should.have.property("message")
      done()
    })
  })
})

describe("/post note", () => {
  it("It should post a note", (done) => {
    const note = {
      note: "Note here.",
    };
    chai
      .request(app)
      .post("/post")
      .send(note)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");
        res.body.should.have.property("note");
        done();
      });
  });
});
