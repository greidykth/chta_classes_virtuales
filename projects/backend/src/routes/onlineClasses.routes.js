import { Router } from "express";
import { createOnlineClass, deleteOnlineClass, getOnlineClass, getOnlineClasses, updateOnlineClass } from "../controllers/onlineClass.controller.js";

const router = Router();

router.get("/onlineClasses", getOnlineClasses);
router.get("/onlineClasses/:id", getOnlineClass);
router.put("/onlineClasses/:id", updateOnlineClass);
router.post("/onlineClasses", createOnlineClass);
router.delete("/onlineClasses/:id", deleteOnlineClass);

export default router;
