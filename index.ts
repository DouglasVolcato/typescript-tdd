import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import { config } from "dotenv";
import bodyParser from "body-parser";
export const app: Application = express();
config();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send({ message: "App is running." });
});

app.get("/dashboard", (req: Request, res: Response, next: NextFunction) => {
  res.send({ message: "Dashboard." });
});

app.post("/post", (req: Request, res: Response, next: NextFunction) => {
  const note: string = req.body.note;
  res.send({ note: note });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("http://localhost:" + port));
