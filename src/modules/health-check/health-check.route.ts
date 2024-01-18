import express, { Router } from "express";

import * as controller from "@modules/health-check/health-check.controller";

const router: Router = express.Router();

router.get("/", controller.getHealthCheck);

export const healthCheckRouter: Router = router;
