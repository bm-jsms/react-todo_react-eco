import {
	CreateTodoButton,
	TodoCounter,
	TodoItem,
	TodoList,
	TodoSearch,
} from './components';

import { defaultTodos } from './data';

function App() {
	const totalTodos = defaultTodos.length;
	const completedTodos = defaultTodos.filter((todo) => todo.completed).length;

	return (
		<main className='flex flex-col items-center justify-center min-h-screen py-2 max-w-screen-md mx-auto'>
			<TodoCounter completed={completedTodos} total={totalTodos} />

			<TodoSearch />

			<TodoList>
				{defaultTodos.map(({ id, title, completed }) => (
					<TodoItem key={id} title={title} completed={completed} />
				))}
			</TodoList>

			<CreateTodoButton />
		</main>
	);
}

export default App;
