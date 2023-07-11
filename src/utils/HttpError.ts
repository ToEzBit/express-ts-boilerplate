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

export type ErrorCodesType = keyof typeof ERROR_CODES;

/**
 * Represents an HTTP error that can be thrown to indicate a specific HTTP status code.
 * @class HttpError
 * @extends Error
 * @param {Object} opts - Options for the HTTP error.
 * @param {string} opts.code - The error code. Must be one of the predefined error codes.
 * @param {string} [opts.message] - Custom error message.
 * @throws {HttpError} Thrown when an HTTP error occurs.
 * @example
 * throw new HttpError({ code: "UNAUTHORIZED" });
 * throw new HttpError({ code: "UNAUTHORIZED" ,message:'foo'});
 */

class HttpError extends Error {
  public readonly httpStatusCode: number;

  public readonly message: string;

  constructor(opts: { code: ErrorCodesType; message?: string }) {
    const message = opts.message ?? opts.code;
    super();
    this.httpStatusCode = ERROR_CODES[opts.code];
    this.message = message;
  }
}

export default HttpError;
