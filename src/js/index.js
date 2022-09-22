import express from "express";
import cors from "cors";
import { config } from "dotenv";
import bodyParser from "body-parser";
export const app = express();
config();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/", (req, res, next) => {
    res.send({ message: "App is running." });
});
app.get("/dashboard", (req, res, next) => {
    res.send({ message: "Dashboard." });
});
app.post("/post", (req, res, next) => {
    const note = req.body.note;
    res.send({ note: note });
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log("http://localhost:" + port));
