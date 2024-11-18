import { CompleteIcon, DeleteIcon } from '../icons';
import type { TodoType } from '../interfaces';

const TodoItem = ({ title, completed, onComplete, onDelete }: TodoType) => {
	return (
		<li className='flex items-center w-full border justify-between px-5'>
			{/* <span
				className={`text-xl ${
					completed && 'text-green-500'
				} font-semibold cursor-pointer`}
				onClick={onComplete}
			>
				V
			</span> */}

			<CompleteIcon handleClick={onComplete} />
			<p className={`text-xl ${completed && 'line-through'}`}>{title}</p>
			<DeleteIcon handleClick={onDelete} />

			{/* <span
				className='text-xl cursor-pointer hover:text-red-600'
				onClick={onDelete}
			>
				X
			</span> */}
		</li>
	);
};

export { TodoItem };
