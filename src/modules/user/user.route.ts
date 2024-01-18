import express, { Router } from "express";

import * as controller from "@modules/user/user.controller";

const router: Router = express.Router();

router.get("/", controller.getAllUsers);
router.get("/:id", controller.getUserById);
router.post("/", controller.createUser);

export const userRouter: Router = router;
