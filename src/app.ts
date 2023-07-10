import express from "express";
import bodyParser from "body-parser";

import fooRoutes from "./api/routes/fooRoutes.js";

import errorMiddleware from "./middlewares/errorMiddleware.js";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/foo", fooRoutes);

app.use(errorMiddleware);

app.listen(8888, null, () => {
  // eslint-disable-next-line no-console
  console.log("server is running on port 8888");
});
