import { TodoListItem } from './TodoListItem';

export type TodoListItemCreateData = Omit<TodoListItem, 'id'>;
