import { useState } from 'react';
import {
	CreateTodoButton,
	TodoCounter,
	TodoItem,
	TodoList,
	TodoSearch,
} from './components';

import { defaultTodos } from './data';
import type { TodoType } from './interfaces';

function App() {
	const [todos, setTodos] = useState<TodoType[]>(defaultTodos);

	const [inputValue, setInputValue] = useState<string>('');

	const searchedTodos = todos.filter((todo) => {
		const todoText = todo.title.toLowerCase();
		const inputText = inputValue.toLowerCase();

		return todoText.includes(inputText);
	});

	const completeTodo = (text: string) => {
		const newTodos: TodoType[] = [...todos];
		const todoIndex = newTodos.findIndex((todo) => todo.title === text);
		newTodos[todoIndex].completed = !newTodos[todoIndex].completed;

		return setTodos(newTodos);
	};

	const deleteTodo = (text: string) => {
		const newTodos: TodoType[] = todos.filter((todo) => todo.title !== text);

		return setTodos(newTodos);
	};

	const totalTodos = todos.length;
	const completedTodos = todos.filter((todo) => !!todo.completed).length;

	return (
		<main className='flex flex-col items-center justify-center min-h-screen py-2 max-w-screen-md mx-auto'>
			<TodoCounter completed={completedTodos} total={totalTodos} />

			<TodoSearch searchValue={inputValue} setSearchValue={setInputValue} />

			<TodoList>
				{searchedTodos?.map(({ id, title, completed }) => (
					<TodoItem
						key={id}
						title={title}
						completed={completed}
						onComplete={() => completeTodo(title)}
						onDelete={() => deleteTodo(title)}
					/>
				))}
			</TodoList>

			<CreateTodoButton />
		</main>
	);
}

export default App;
