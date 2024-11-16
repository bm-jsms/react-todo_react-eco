import {
	CreateTodoButton,
	TodoCounter,
	TodoItem,
	TodoList,
	TodoSearch,
} from './components';

import { defaultTodos } from './data';

import './App.css';

function App() {
	return (
		<>
			<TodoCounter completed={0} total={3} />

			<TodoSearch />

			<TodoList>
				{defaultTodos.map(({ id, title, completed }) => (
					<TodoItem key={id} title={title} completed={completed} />
				))}
			</TodoList>

			<CreateTodoButton />
		</>
	);
}

export default App;
