import "dotenv/config";

import { getEnv } from "@common/utils/get-env";
import { app, logger } from "@src/server";

const port = getEnv.port();

const server = app.listen(port, () =>
  logger.info(`server is running on port ${port}`),
);

const onCloseHandler = () => {
  logger.info("sigint received, server will shutting down");
  server.close(() => {
    logger.info("server closed");
    process.exit();
  });
  setTimeout(() => process.exit(1), 10000).unref();
};

process.on("SIGINT", onCloseHandler);
process.on("SIGTERM", onCloseHandler);
