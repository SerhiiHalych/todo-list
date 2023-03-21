import { Module } from '@nestjs/common';
import { TodoListController } from './TodoListController';
import { TodoListRepository } from './TodoListRepository';
import { TodoListService } from './TodoListService';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoListItemEntity } from './entities/TodoListItemEntity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [TodoListItemEntity],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([TodoListItemEntity]),
  ],
  controllers: [TodoListController],
  providers: [TodoListService, TodoListRepository],
})
export class TodoListModule {}
