import { Router, Request, Response } from "express";
import TaskController from "../controllers/TaskController";

const router = Router()
const taskController = new TaskController()

router.get("/task", )
router.get("/task/:id")
router.post("/task", taskController.add)
router.put("/task/:id")
router.delete("/task/:id")

export default router
