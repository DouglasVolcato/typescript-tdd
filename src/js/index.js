import express from "express";
import cors from "cors";
import { config } from "dotenv";
export const app = express();
const port = process.env.PORT || 3000;
config();
app.use(cors());
app.get("/", (req, res, next) => {
    res.send({ message: "App is running." });
});
app.get("/auth", (req, res, next) => {
    res.send({ message: "TESTE" });
});
app.listen(port, () => console.log("http://localhost:" + port));
