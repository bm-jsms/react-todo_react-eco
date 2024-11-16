import { TodoType } from '../interfaces';

const TodoItem = ({ title, completed }: TodoType) => {
	return (
		<li>
			<span>V</span>
			<p>{title}</p>
			<p>{completed ? '✅' : '❌'}</p>
			<span>X</span>
		</li>
	);
};

export { TodoItem };
