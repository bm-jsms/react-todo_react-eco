import { createContext, Dispatch, ReactNode, useState } from 'react';
import { useLocalStorage } from '../hooks';
import { defaultTodos } from '../data';
import { TodoTypeData } from '../interfaces';

type TodoContextType = {
	todos: TodoTypeData[];
	searchedTodos: TodoTypeData[];
	inputValue: string;
	setInputValue: Dispatch<React.SetStateAction<string>>;
	completeTodo: (text: string) => void;
	deleteTodo: (text: string) => void;
	loading: boolean;
	error: boolean;
};

const TodoContext = createContext<TodoContextType>({} as TodoContextType);

const TodoProvider = ({ children }: { children: ReactNode }) => {
	const {
		item: todos,
		saveItem: saveTodos,
		loading,
		error,
	} = useLocalStorage('TODOS', defaultTodos);
	const [inputValue, setInputValue] = useState<string>('');

	const searchedTodos = todos.filter((todo) => {
		const todoText = todo.title.toLowerCase();
		const inputText = inputValue.toLowerCase();

		return todoText.includes(inputText);
	});

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
			}}
		>
			{children}
		</TodoContext.Provider>
	);
};

export { TodoContext, TodoProvider };
