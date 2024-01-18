import { Response } from "express";

const SUCCESS_CODE = {
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NO_CONTENT: 204,
} as const;

export type SuccessCodesType = keyof typeof SUCCESS_CODE;

type SendHttpResponse<T> = {
  code: SuccessCodesType;
  payload?: T | null;
  res: Response;
};

export const sendHttpResponse = <T>({
  code,
  payload,
  res,
}: SendHttpResponse<T>): Response => {
  return res.status(SUCCESS_CODE[code]).json({
    status: "SUCCESS",
    payload: payload,
  });
};
