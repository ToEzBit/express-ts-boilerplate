import { ValidationError } from "zod-validation-error";
export const ERROR_CODES = {
  BAD_REQUEST: 400,
  INTERNAL_SERVER_ERROR: 500,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_SUPPORTED: 405,
  TIMEOUT: 408,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
} as const;

type ErrorCodesType = keyof typeof ERROR_CODES;

type SendHttpError = {
  code: ErrorCodesType;
  message: string | ValidationError;
};

export const sendHttpError = ({ code, message }: SendHttpError): Response => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const error = new Error(message);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  error.httpStatusCode = ERROR_CODES[code];
  throw error;
};
