import { z } from "zod";

import { userSchema } from "@modules/user/user.schema";

export type User = z.infer<typeof userSchema.base>;
