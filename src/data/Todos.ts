import type { TodoType } from '../interfaces';

const defaultTodos: TodoType[] = [
	{
		id: 1,
		title: 'Todo 1',
		completed: false,
	},
	{
		id: 2,
		title: 'Todo 2',
		completed: true,
	},
	{
		id: 3,
		title: 'Todo 3',
		completed: false,
	},
];

export { defaultTodos };
