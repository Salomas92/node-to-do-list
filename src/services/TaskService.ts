import { Task } from "../models/Task"
import TaskRepository from "../repositories/TaskRepository"

const taskRespository = new TaskRepository()

class TaskService {
  constructor() {

  }
  get(status: string) {
      const result = taskRespository.get()
      const task: Task[] = []
      result.map((item) => {
        if (item.status === status) {
          task.push(item)
        }
      })
      return task
  }

  getById(id: string): Task | {} {
    const result = taskRespository.get()
    let task = {}
    result.map((item) => {
      if (item.id === id) {
        task = item
      }
    })
    return task
  }

  getIndexById(id_task: string): number {
    const result = taskRespository.get()

    let position: number = 9999

    result.map((item, index) => {
      if (item.id === id_task) {
        position = index
      }
    })
    return position
  }

  add(data: Task): Task{
    return taskRespository.add(data)
  }

  update(data: Task, id_task: string) {
    const position = this.getIndexById(id_task)

    if(position !== 9999) {
      return taskRespository.update(data, position)
    }else{
      return {}
    }
  }

  delete(id: string){
    const position = this.getIndexById(id)
    if(position !== 9999) {
      return taskRespository.delete(position)
    }else{
      return {}
    }
  }
}

export default TaskService