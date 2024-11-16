import { ReactNode } from 'react';
import './App.css';

function App() {
	return (
		<div className='App'>
			<TodoCounter />

			<TodoSearch />

			<TodoList>
				<TodoItem />
				<TodoItem />
				<TodoItem />
			</TodoList>

			<CreateTodoButton />
		</div>
	);
}

interface TodoListType {
	children: ReactNode;
}

const TodoList = ({ children }: TodoListType) => {
	return <ul>{children}</ul>;
};
const CreateTodoButton = () => {
	return <button>Create</button>;
};

const TodoCounter = () => {
	return (
		<h1>
			You're completed {10} of {20} todo's
		</h1>
	);
};
const TodoSearch = () => {
	return <input type='text' placeholder='Type todo' />;
};

const TodoItem = () => {
	return (
		<li>
			<span>V</span>
			<p>Todo example</p>
			<span>X</span>
		</li>
	);
};

export default App;
