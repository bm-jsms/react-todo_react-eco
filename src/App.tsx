import {
	CreateTodoButton,
	TodoCounter,
	TodoItem,
	TodoList,
	TodoSearch,
} from './components';

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

export default App;
