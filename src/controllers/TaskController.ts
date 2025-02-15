import { Request, Response } from "express"
import TaskService from "../services/TaskService";

const taskService = new TaskService()

class TaskController {
  constructor() {

  }

  get(req: Request, res: Response) {
    const status = req.query.status

    if (status && (status === "in_progress" || status === "completed")) {
      const result = taskService.get(status)
      res.json(result)
      res.status(200)
    }else{
      res.json({error: "invalid status parameter"})
      res.status(401)
    }
  }

  getById(req: Request, res: Response){
    const { id } = req.params

    if (id) {
      const result = taskService.getById(id)
      res.json(result)
    }else {
      res.json({error: "invalid id param"})
      res.status(401)
    }
  }

  add(req: Request, res: Response) {

    const {id, descricao, data, status} = req.body;

    if (id && descricao && data && status) {

      if (status === "in_progress" || status === "completed") {
        const result = taskService.add(req.body)
        res.json(result)
        res.status(201)
      }else{
        res.json({error: "invalid status: completed or in_progress"})
        res.status(401)
      }
    }else {
      res.json({error: "Invalid parameters"})
      res.status(401)
    }
    
  }

  update(req: Request, res: Response) {
    const {id, descricao, data, status} = req.body
    const {id_task} = req.params

    if (id && descricao && data && status && id_task) {
      if (status === "in_progress" || status === "completed") {
        const result = taskService.update(req.body, id_task)
        if (result) {
          res.json(result)
        }else {
          res.json({error: "task not found"})
        }
      }else{
        res.json({error: "invalid status parameter"})
        res.status(401)
      }
    
    }else{
      res.json({error: "invalid parameters"})
      res.status(401)
    }
    
  }

  delete(req: Request, res: Response) {
    const {id} = req.params
    if (id) {
      const result = taskService.delete(id)
      res.json(result)
    }else{
      res.json({error: "id is required in params"})
      res.status(401)
    }
  }

}

export default TaskController