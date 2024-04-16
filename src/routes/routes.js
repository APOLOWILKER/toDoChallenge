import { TaskController } from "../controllers/TaskController.js";

export const routes = [
  {
    method: 'GET',
    path: '/tasks',
    handler: TaskController.listTasks,
  },
  {
    method: 'POST',
    path: '/task',
    handler: TaskController.createTask
  }
]
