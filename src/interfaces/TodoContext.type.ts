import { Dispatch } from 'react';
import { TodoTypeData } from './TodoTypeData';

export type TodoContextType = {
	todos: TodoTypeData[];
	searchedTodos: TodoTypeData[];
	inputValue: string;
	setInputValue: Dispatch<React.SetStateAction<string>>;
	completeTodo: (text: string) => void;
	deleteTodo: (text: string) => void;
	loading: boolean;
	error: boolean;
	openModal: boolean;
	setOpenModal: Dispatch<React.SetStateAction<boolean>>;
	addTodo: (text: string) => void;
};
