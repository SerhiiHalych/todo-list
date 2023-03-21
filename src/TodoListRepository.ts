import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TodoListItem } from './dto/TodoListItem';
import { TodoListItemCreateData } from './dto/TodoListItemCreateData';
import { TodoListItemEntity } from './entities/TodoListItemEntity';
import { TodoListItemEntityCreateData } from './entities/TodoListItemEntityCreateData';

@Injectable()
export class TodoListRepository {
  constructor(
    @InjectRepository(TodoListItemEntity)
    private todoListItemRepository: Repository<TodoListItemEntity>,
  ) {}

  public async createTodoItem(
    data: TodoListItemCreateData,
  ): Promise<TodoListItem> {
    const todoListItemToCreate: TodoListItemEntityCreateData = {
      isCompleted: data.isCompleted,
      title: data.title,
    };

    const savedTodoListItem = await this.todoListItemRepository.save(
      todoListItemToCreate,
    );

    return {
      id: savedTodoListItem.id,
      isCompleted: savedTodoListItem.isCompleted,
      title: savedTodoListItem.title,
    };
  }

  public async getAll(): Promise<TodoListItem[]> {
    const todoListItems = await this.todoListItemRepository.find();

    return todoListItems.map((todoListItem) => ({
      id: todoListItem.id,
      isCompleted: todoListItem.isCompleted,
      title: todoListItem.title,
    }));
  }
}
