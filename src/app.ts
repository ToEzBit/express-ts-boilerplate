import express from "express";
import type { Request, Response } from "express";

import errorMiddleware from "./middlewares/errorMiddleware.js";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "success" });
});

app.use(errorMiddleware);

app.listen(8888, null, () => {
  // eslint-disable-next-line no-console
  console.log("server is running on port 8888");
});
