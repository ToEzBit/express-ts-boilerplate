import type { Request, Response } from "express";

function notFoundMiddleWare(req: Request, res: Response) {
  res.status(404).json({ message: "Resource Not Found On This Server" });
}

export default notFoundMiddleWare;
