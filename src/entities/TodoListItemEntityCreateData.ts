import { TodoListItemEntity } from './TodoListItemEntity';

export type TodoListItemEntityCreateData = Omit<
  TodoListItemEntity,
  'id' | 'createdAt' | 'updatedAt'
>;
