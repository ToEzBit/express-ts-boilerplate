import type { Request, Response, NextFunction } from "express";

import HttpError from "../utils/HttpError.js";

function errorMiddleware(
  err: HttpError,
  req: Request,
  res: Response,
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  next: NextFunction,
): void {
  res.status(err.httpStatusCode || 500).json({ message: err.errorMessage });
}

export default errorMiddleware;
