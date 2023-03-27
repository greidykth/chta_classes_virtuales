import { Router } from "express";
import { createMessage, getMessages } from "../controllers/message.controller.js";

const router = Router();

router.get("/messages", getMessages);
router.get("/messages/:id");
router.post("/messages", createMessage);

export default router;
