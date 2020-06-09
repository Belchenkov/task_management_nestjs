import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks = [
    {
      id: 1,
      title: 'Make Get Controller'
    }
  ];

  getAllTasks(): any {
    return this.tasks;
  }
}
