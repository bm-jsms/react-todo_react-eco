import { TodoType } from '../interfaces';

const TodoItem = ({ title, completed }: TodoType) => {
	return (
		<li className='flex items-center w-full border justify-between px-5'>
			<span
				className={`text-xl ${completed && 'text-green-500'} font-semibold`}
			>
				V
			</span>

			<p className={`text-xl ${completed && 'line-through'}`}>{title}</p>

			<span className='text-xl'>X</span>
		</li>
	);
};

export { TodoItem };
