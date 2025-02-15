import { Router, Request, Response } from "express";
import TaskController from "../controllers/TaskController";

const router = Router()
const taskController = new TaskController()

router.get("/task", taskController.get)
router.get("/task/:id", taskController.getById)
router.post("/task", taskController.add)
router.put("/task/:id_task", taskController.update)
router.delete("/task/:id", taskController.delete)

export default router
