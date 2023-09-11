import { Injectable } from "@nestjs/common";
import { InterfaceTask } from "./interface/interface-task";

@Injectable()
export class TaskService {
  public tasks: InterfaceTask [] = [];

  public async addTask(task: InterfaceTask): Promise<InterfaceTask> {
    this.tasks.push(task);
    return task;
  }

  public async getTask(task: InterfaceTask): Promise<InterfaceTask> {
    const task = this.tasks.filter(i -> i.id === id);
    return task;
  }

  public async addTask(task: InterfaceTask): Promise<InterfaceTask> {
    this.tasks.push(task);
    return task;
  }
}