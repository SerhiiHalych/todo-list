import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTodoListItem } from './dto/CreateTodoListItem';
import { TodoListItem } from './dto/TodoListItem';
import { TodoListService } from './TodoListService';

@Controller('todo-list')
export class TodoListController {
  constructor(private readonly todoListService: TodoListService) {}

  @Post()
  createTodoItem(@Body() body: CreateTodoListItem): Promise<TodoListItem> {
    return this.todoListService.createTodoItem(body);
  }

  @Get()
  getTodoList(): Promise<TodoListItem[]> {
    return this.todoListService.getTodoList();
  }
}
