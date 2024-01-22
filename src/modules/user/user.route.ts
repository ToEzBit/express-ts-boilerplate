import express, { Router } from "express";

import { userController } from "@modules/user/user.controller";

const router: Router = express.Router();

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.post("/", userController.createUser);

export const userRouter: Router = router;
