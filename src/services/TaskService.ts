import { Task } from "../models/Task"
import TaskRepository from "../repositories/TaskRepository"

const taskRespository = new TaskRepository()

class TaskService {
  constructor() {

  }

  add(data: Task): Task{
    return taskRespository.add(data)
  }
}

export default TaskService