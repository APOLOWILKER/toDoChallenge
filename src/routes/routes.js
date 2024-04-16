import { TaskController } from "../controllers/TaskController.js";


export const routes = [
  {
    method: 'GET',
    path: '/tasks',
    handler: () => {
      console.log('é uma fraude')
    }
  },
  {
    method: 'POST',
    path: '/tasks',
    handler: TaskController.createTask
  }
]
