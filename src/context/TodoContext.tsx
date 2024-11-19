import { createContext, ReactNode, useState } from 'react';
import { useLocalStorage } from '../hooks';
import { defaultTodos } from '../data';
import { TodoContextType } from '../interfaces';

const TodoContext = createContext<TodoContextType>({} as TodoContextType);

const TodoProvider = ({ children }: { children: ReactNode }) => {
	const {
		item: todos,
		saveItem: saveTodos,
		loading,
		error,
	} = useLocalStorage('TODOS', defaultTodos);

	const [inputValue, setInputValue] = useState<string>('');
	const [openModal, setOpenModal] = useState<boolean>(true);

	const searchedTodos = todos.filter((todo) => {
		const todoText = todo.title.toLowerCase();
		const inputText = inputValue.toLowerCase();

		return todoText.includes(inputText);
	});

	const addTodo = (text: string) => {
		const newTodos = [...todos];
		newTodos.push({ id: new Date().getTime(), title: text, completed: false });

		return saveTodos(newTodos);
	};

	const completeTodo = (text: string) => {
		const newTodos = [...todos];
		const todoIndex = newTodos.findIndex((todo) => todo.title === text);
		newTodos[todoIndex].completed = !newTodos[todoIndex].completed;

		return saveTodos(newTodos);
	};

	const deleteTodo = (text: string) => {
		const newTodos = todos.filter((todo) => todo.title !== text);

		return saveTodos(newTodos);
	};

	return (
		<TodoContext.Provider
			value={{
				todos,
				searchedTodos,
				inputValue,
				setInputValue,
				completeTodo,
				deleteTodo,
				loading,
				error,
				openModal,
				setOpenModal,
				addTodo,
			}}
		>
			{children}
		</TodoContext.Provider>
	);
};

export { TodoContext, TodoProvider };
