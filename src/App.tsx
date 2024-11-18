import { TodoProvider } from './context';
import { AppUI } from './ui';

function App() {
	return (
		<TodoProvider>
			<AppUI />
		</TodoProvider>
	);
}

export default App;
