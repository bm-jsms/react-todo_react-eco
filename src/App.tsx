import { useState } from 'react';

import { defaultTodos } from './data';
import type { TodoTypeData } from './interfaces';
import { useLocalStorage } from './hooks';
import { AppUI } from './ui';

// localStorage.setItem('TODOS', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS');

function App() {
	const [todos, saveTodos] = useLocalStorage('TODOS', defaultTodos);
	const [inputValue, setInputValue] = useState<string>('');

	const searchedTodos = todos.filter((todo: TodoTypeData) => {
		const todoText = todo.title.toLowerCase();
		const inputText = inputValue.toLowerCase();

		return todoText.includes(inputText);
	});

	const completeTodo = (text: string) => {
		const newTodos: TodoTypeData[] = [...todos];
		const todoIndex = newTodos.findIndex((todo) => todo.title === text);
		newTodos[todoIndex].completed = !newTodos[todoIndex].completed;

		return saveTodos(newTodos);
	};

	const deleteTodo = (text: string) => {
		const newTodos: TodoTypeData[] = todos.filter(
			(todo: TodoTypeData) => todo.title !== text,
		);

		return saveTodos(newTodos);
	};

	return (
		<AppUI
			todos={todos}
			searchedTodos={searchedTodos}
			completeTodo={completeTodo}
			deleteTodo={deleteTodo}
			inputValue={inputValue}
			setInputValue={setInputValue}
		/>
	);
}

export default App;
