import { TaskService } from "../Services/TaskService.js";

// aqui ficam as regras de negocio que ficariam no handler

export class TaskController {
  constructor() {
    this.taskService = new TaskService();
  }


  async listTasks(request, response) {
    try{
      const tasks = await this.taskService.listTasks();

      return response.status(200).json(tasks);
    } catch (error) {
      console.error('Error listing tasks:', error);
      response.status(500).json({ error: 'Failed to list tasks' });
    }
  }

  async createTask(request, response) {
    const {title, description } = request.body;

    try{
      const task = await this.taskService.createTask(title, description)

      response.status(201).json(task);

    } catch (error) {
      console.error('Error creating task: ', error);
      response.status(500).json({ error: 'Failed to create task' })
    }
  }
}
