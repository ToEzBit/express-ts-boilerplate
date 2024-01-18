import express, { Application, Router } from "express";

import { errorHandlers } from "@common/middleware/error-handlers";
import { requestLogger } from "@common/middleware/request-logger";
import { healthCheckRouter } from "@modules/health-check/health-check.route";
import { userRouter } from "@modules/user/user.route";

export function middlewares(app: Application) {
  const router: Router = express.Router();

  // Request logging
  app.use(requestLogger());

  // HealthCheck endpoint - expose before auth
  app.use("/health-check", healthCheckRouter);

  // Application routes
  app.use("/users", userRouter);

  // Error handlers
  app.use(errorHandlers());

  return router;
}
