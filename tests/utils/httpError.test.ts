import HttpError, {
  ERROR_CODES,
  ErrorCodesType,
} from "../../src/utils/HttpError.js";

describe("HttpError", () => {
  Object.keys(ERROR_CODES).forEach((errorCode: ErrorCodesType) => {
    it(`should create an HttpError instance for code "${errorCode}"`, () => {
      const error = new HttpError({ code: errorCode });
      expect(error).toBeInstanceOf(HttpError);
      expect(error.httpStatusCode).toBe(ERROR_CODES[errorCode]);
      expect(error.message).toBe(errorCode);
    });
  });

  it("should create an HttpError instance with a custom message", () => {
    const customMessage = "Custom error message";
    const error = new HttpError({ code: "NOT_FOUND", message: customMessage });

    expect(error).toBeInstanceOf(HttpError);
    expect(error.httpStatusCode).toBe(ERROR_CODES.NOT_FOUND);
    expect(error.message).toBe(customMessage);
  });
});
