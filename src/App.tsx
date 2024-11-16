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
		<>
			<TodoCounter completed={0} total={3} />

			<TodoSearch />

			<TodoList>
				<TodoItem />
				<TodoItem />
				<TodoItem />
			</TodoList>

			<CreateTodoButton />
		</>
	);
}

export default App;
