import dayjs from "dayjs";
import { z } from "zod";

const base = z.object({
  id: z.number(),
  name: z.string().max(4),
  email: z.string().email({}),
  age: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

const create = z.object({
  id: z.number().default(Math.random()),
  name: z.string().max(4),
  email: z.string().email({}),
  age: z.number(),
  createdAt: z.date().default(() => dayjs().toDate()),
  updatedAt: z.date().default(() => dayjs().toDate()),
});

export const userSchema = {
  base,
  create,
};
