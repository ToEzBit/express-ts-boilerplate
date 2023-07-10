import type { RequestHandler } from "express";
import { z } from "zod";

export const getFoo: RequestHandler = async (req, res, next) => {
  try {
    res.json({ message: "Foo" });
  } catch (err) {
    next(err);
  }
};

export const createFoo: RequestHandler = async (req, res, next) => {
  try {
    const createFooSchema = z.object({
      username: z.string(),
      email: z.string().email(),
      password: z.string().max(4),
      memberType: z.enum(["SUBSCRIPTION", "LIFETIME"]).optional().nullable(),
      isAccept: z.boolean(),
    });

    const createFooData = createFooSchema.parse(req.body);

    res.status(201).json({
      message: "SUCCESS",
      payload: {
        createFooData,
      },
    });
  } catch (err) {
    next(err);
  }
};
