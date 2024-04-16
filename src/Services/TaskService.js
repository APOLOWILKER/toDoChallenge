import { randomUUID } from "node:crypto";
import { Database } from "../db/database.js";

export class TaskService {
  constructor() {
    this.db = new Database();
  }

  async listTasks() {
    try {
      const tasks = await this.db.select('tasks');

      if(!tasks || tasks.length === 0) {
        return [];
      }

      return tasks;
    } catch (error) {
      console.error('Error listing tasks:', error);
      throw new Error('Failed to list tasks');
    }
  }

  async createTask(title, description) {
    const task = {
      id: randomUUID(), // Geração de ID aleatório (simulação)
      title,
      description,
      completed_at: null,
      created_at: new Date(),
      updated_at: new Date()
    };

    try {
      await this.db.insert('tasks', task);
      return task;
    } catch (error) {
      console.error('Error creating task:', error);
      throw new Error('Failed to create task');
    }
  }
}
