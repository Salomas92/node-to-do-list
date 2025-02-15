import { Request, Response } from "express"
import TaskService from "../services/TaskService";

const taskService = new TaskService()

class TaskController {
  constructor() {

  }

  add(req: Request, res: Response) {
    const {id, descricao, data, status} = req.body;
    if (id && descricao && data && status) {
      const result = taskService.add(req.body)
      res.json(result)
      res.status(201)
    }else {
      res.json({error: "Invalid parameters"})
      res.status(401)
    }
  }

}

export default TaskController