import { Injectable } from '@nestjs/common';

import { Task, TaskStatus } from './task.model';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: '1',
      title: 'Make Get Controller',
      description: 'Make Description',
      status: TaskStatus.OPEN
    }
  ];

  getAllTasks(): Task[] {
    return this.tasks;
  }
}
