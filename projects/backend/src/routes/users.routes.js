import { Router } from "express";
import { createUser, getUsers, login } from "../controllers/user.controller.js";

const router = Router();

router.get("/users", getUsers);
router.post("/users", createUser);
router.post("/users/login", login);

export default router;
