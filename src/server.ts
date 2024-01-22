import "dotenv/config";

import bodyParser from "body-parser";
import compression from "compression";
import cors from "cors";
import express, { Express } from "express";
import helmet from "helmet";
import { pino } from "pino";

import { middlewares } from "@common/middleware";
import compressFilter from "@common/utils/compress-filter";
import { getEnv } from "@common/utils/get-env";

const logger = pino({ name: "server start" });
const app: Express = express();
const corsOrigin = getEnv.cors();

// Setup Middlewares
app.use(cors({ origin: [corsOrigin], credentials: true }));
app.use(helmet());
app.use(compression({ filter: compressFilter }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(middlewares(app));

export { app, logger };
