import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import { config } from "dotenv";

export const app: Application = express();
const port = process.env.PORT || 3000;

config();
app.use(cors());

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send({ message: "App is running." });
});

app.get("/auth", (req: Request, res: Response, next: NextFunction) => {
  res.send({ message: "TESTE" });
});

app.listen(port, () => console.log("http://localhost:" + port));
