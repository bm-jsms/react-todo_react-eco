import { TodoType } from '../interfaces';

const TodoItem = ({ title, completed, onComplete, onDelete }: TodoType) => {
	return (
		<li className='flex items-center w-full border justify-between px-5'>
			<span
				className={`text-xl ${
					completed && 'text-green-500'
				} font-semibold cursor-pointer`}
				onClick={onComplete}
			>
				V
			</span>

			<p className={`text-xl ${completed && 'line-through'}`}>{title}</p>

			<span
				className='text-xl cursor-pointer hover:text-red-600'
				onClick={onDelete}
			>
				X
			</span>
		</li>
	);
};

export { TodoItem };
