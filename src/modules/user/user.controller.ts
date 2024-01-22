import type { RequestHandler } from "express";

import { handlerErrorSchema } from "@common/utils/hadler-error-schema";
import { sendHttpError } from "@common/utils/send-http-error";
import { sendHttpResponse } from "@common/utils/send-http-response";
import { userSchema } from "@modules/user/user.schema";
import { userService } from "@modules/user/user.service";
import { logger } from "@src/server";

const getAllUsers: RequestHandler = async (_req, res, next) => {
  try {
    const users = await userService.findAll();

    sendHttpResponse({
      code: "OK",
      payload: users,
      res,
    });
  } catch (error) {
    logger.error(`ERROR_GET_ALL_USER_CONTROLLER = ${error}`);
    next(error);
  }
};

const getUserById: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await userService.findById(parseInt(id));

    if (!user)
      sendHttpError({
        code: "NOT_FOUND",
        message: "no user found with provided id",
      });

    sendHttpResponse({ code: "OK", payload: user, res });
  } catch (error) {
    logger.error(`ERROR_GET_USER_BY_ID_CONTROLLER = ${error}`);
    next(error);
  }
};

const createUser: RequestHandler = async (req, res, next) => {
  try {
    const { name, email, age } = req.body;

    const validatedUserSchema = userSchema.create.safeParse({
      name,
      email,
      age,
    });

    if (!validatedUserSchema.success) {
      return handlerErrorSchema(validatedUserSchema.error);
    }

    const createdUser = userService.createUser(validatedUserSchema.data);

    sendHttpResponse({
      code: "CREATED",
      payload: createdUser,
      res,
    });
  } catch (error) {
    logger.error(`ERROR_CREATE_USER_CONTROLLER = ${error}`);
    next(error);
  }
};

export const userController = {
  getAllUsers,
  getUserById,
  createUser,
};
