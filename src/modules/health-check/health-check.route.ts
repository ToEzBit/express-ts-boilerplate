import express, { Router } from "express";

import { healthCheckController } from "@modules/health-check/health-check.controller";

const router: Router = express.Router();

router.get("/", healthCheckController.getHealthCheck);

export const healthCheckRouter: Router = router;
