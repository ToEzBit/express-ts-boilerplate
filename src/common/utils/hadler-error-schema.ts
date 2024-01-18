import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

import { sendHttpError } from "./send-http-error";

export const handlerErrorSchema = (zodError: ZodError) => {
  const validationError = fromZodError(zodError);

  sendHttpError({ code: "BAD_REQUEST", message: validationError });
};
