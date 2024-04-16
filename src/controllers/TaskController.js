// aqui ficam as regras de negocio que ficariam no handler
export class TaskController {
  listTasks(request, response) {
    console.log('e isso ai listando tarefas');
  }

  createTask(request, response) {
    console.log('Criando tarefas')
  }
}
