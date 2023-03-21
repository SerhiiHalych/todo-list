import { Test, TestingModule } from '@nestjs/testing';
import { INestTodoListlication } from '@nestjs/common';
import * as request from 'supertest';
import { TodoListModule } from '../src/TodoListModule';

describe('TodoListController (e2e)', () => {
  let todoList: INestTodoListlication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [TodoListModule],
    }).compile();

    todoList = moduleFixture.createNestTodoListlication();
    await todoList.init();
  });

  it('/ (GET)', () => {
    return request(todoList.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});
