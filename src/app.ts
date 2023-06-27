import express from "express";
import type { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "success" });
});

app.listen(8888, null, () => {
  console.log("server is running on port 8888");
});
