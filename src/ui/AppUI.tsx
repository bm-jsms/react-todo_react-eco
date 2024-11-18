import {
	CreateTodoButton,
	TodoCounter,
	TodoItem,
	TodoList,
	TodoSearch,
} from '../components';

import { AppUIProps, TodoTypeData } from '../interfaces';

const AppUI = ({
	todos,
	searchedTodos,
	completeTodo,
	deleteTodo,
	inputValue,
	setInputValue,
	loading,
	error,
}: AppUIProps) => {
	const totalTodos = todos.length;
	const completedTodos = todos.filter(
		(todo: TodoTypeData) => todo.completed,
	).length;

	const todoItemsProv = () => {
		if (searchedTodos.length > 0) {
			return searchedTodos.map(({ id, title, completed }: TodoTypeData) => (
				<TodoItem
					key={id}
					title={title}
					completed={completed}
					onComplete={() => completeTodo(title)}
					onDelete={() => deleteTodo(title)}
				/>
			));
		}
		return (
			<li className='text-center text-xl font-medium text-slate-500/45'>
				No todo's found
			</li>
		);
	};

	return (
		<main className='flex flex-col items-center justify-center min-h-screen py-2 max-w-screen-md mx-auto'>
			<TodoCounter completed={completedTodos} total={totalTodos} />
			<TodoSearch searchValue={inputValue} setSearchValue={setInputValue} />

			<TodoList>
				{loading && (
					<li className='text-center text-xl font-medium text-slate-500/45'>
						Loading...
					</li>
				)}
				{error && (
					<li className='text-center text-xl font-medium text-slate-500/45'>
						Error...
					</li>
				)}
				{!loading && todoItemsProv()}
			</TodoList>
			<CreateTodoButton />
		</main>
	);
};

export { AppUI };
