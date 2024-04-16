import { TaskController } from "../controllers/TaskController.js";

const taskController = new TaskController();

export const routes = [
  {
    method: 'GET',
    path: '/tasks',
    handler: taskController.listTasks
  },
  {
    method: 'POST',
    path: '/tasks',
    handler: taskController.createTask
  }
]
