import express from "express";
import { handler } from "./index";

const app = express();

app.use(express.json());

app.head("/", (_, res) => res.status(200).end());

app.post("/", async (req, res) =>
  handler(req.body.message).then(() => res.status(200).end())
);

const port = process.env.PORT ?? 8000;

app.listen(port, () => console.log(`Server started at port ${port}`));
