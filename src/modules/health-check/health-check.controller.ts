import { RequestHandler } from "express";

import { sendHttpResponse } from "@common/utils/send-http-response";
import { logger } from "@src/server";

const getHealthCheck: RequestHandler = async (_req, res, next) => {
  try {
    sendHttpResponse({
      code: "OK",
      payload: "SERVER_IS_HEALTHY",
      res,
    });
  } catch (error) {
    logger.error(`ERROR_HEALTH_CHECK_CONTROLLER = ${error}`);
    next(error);
  }
};

export const healthCheckController = {
  getHealthCheck,
};
