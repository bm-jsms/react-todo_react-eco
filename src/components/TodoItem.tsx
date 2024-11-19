import { CompleteIcon, DeleteIcon } from '../icons';
import type { TodoType } from '../interfaces';

const TodoItem = ({ title, completed, onComplete, onDelete }: TodoType) => {
	return (
		<li className='flex items-center w-full border justify-between px-5'>
			<CompleteIcon handleClick={onComplete} completed={completed} />
			<p
				className={`text-xl font-normal ${
					completed && 'line-through text-gray-500'
				}`}
			>
				{title}
			</p>
			<DeleteIcon handleClick={onDelete} />
		</li>
	);
};

export { TodoItem };
