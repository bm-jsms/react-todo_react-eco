import { Dispatch } from 'react';
import { TodoTypeData } from './TodoTypeData';

export interface AppUIProps {
	todos: TodoTypeData[];
	searchedTodos: TodoTypeData[];
	inputValue: string;

	completeTodo: (text: string) => void;
	deleteTodo: (text: string) => void;
	setInputValue: Dispatch<React.SetStateAction<string>>;
	loading: boolean;
	error: boolean;
}
