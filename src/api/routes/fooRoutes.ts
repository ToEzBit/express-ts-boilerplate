import express from "express";
import * as fooController from "../controllers/fooController.js";

const router = express.Router();

router.get("/", fooController.getFoo);
router.post("/", fooController.createFoo);

export default router;
