import { Injectable } from '@nestjs/common';
import { CreateTodoListItem } from './dto/CreateTodoListItem';
import { TodoListItem } from './dto/TodoListItem';
import { TodoListItemCreateData } from './dto/TodoListItemCreateData';
import { TodoListRepository } from './TodoListRepository';

@Injectable()
export class TodoListService {
  constructor(private todoListRepository: TodoListRepository) {}

  public async createTodoItem(data: CreateTodoListItem): Promise<TodoListItem> {
    const todoListItemToCreate: TodoListItemCreateData = {
      isCompleted: false,
      title: data.title,
    };

    const savedTodoListItem = await this.todoListRepository.createTodoItem(
      todoListItemToCreate,
    );

    return savedTodoListItem;
  }

  public async getTodoList(): Promise<TodoListItem[]> {
    const todoListItems = await this.todoListRepository.getAll();

    return todoListItems;
  }
}
