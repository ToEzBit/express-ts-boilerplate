import { ErrorRequestHandler, RequestHandler } from "express";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const unexpectedRequest: ErrorRequestHandler = (err, _req, res, _next) => {
  res
    .status(err?.httpStatusCode || 500)
    .json({ status: "FAILED", message: err.message });
};

const notFoundRequest: RequestHandler = (_req, res) => {
  res
    .status(404)
    .json({ status: "FAILED", message: "Resource Not Found On This Server" });
};

export const errorHandlers = () => [unexpectedRequest, notFoundRequest];
