import { useContext } from 'react';
import { TodoContext } from '../context';
import { TodoTypeData } from '../interfaces';

const TodoCounter = () => {
	const { todos }: any = useContext(TodoContext);

	const totalTodos = todos.length;
	const completedTodos = todos.filter(
		(todo: TodoTypeData) => todo.completed,
	).length;

	return (
		<h1 className='text-center text-4xl font-bold text-white mb-10'>
			You're completed {completedTodos} of {totalTodos} todo's
		</h1>
	);
};

export { TodoCounter };
