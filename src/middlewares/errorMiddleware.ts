import type { Request, Response, NextFunction } from "express";

function errorMiddleware(
  err,
  req: Request,
  res: Response,
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  next: NextFunction,
): void {
  if (process.env.NODE_ENV !== "production") {
    console.log(err);
  }

  if (err?.name === "ZodError") {
    res.status(400).json({ status: "FAILED", message: err.message });
    return;
  }
  res
    .status(err.httpStatusCode || 500)
    .json({ status: "FAILED", message: err.message });
}

export default errorMiddleware;
