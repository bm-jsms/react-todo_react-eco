import { useContext, useState } from 'react';
import { TodoContext } from '../context';
import { TodoContextType } from '../interfaces';

const TodoForm = () => {
	const { setOpenModal, addTodo }: TodoContextType = useContext(TodoContext);
	const [newTodoValue, setNewTodoValue] = useState<string>('');

	const onsubmitHandle = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		addTodo(newTodoValue);
		setOpenModal(false);
	};

	const onCancel = () => {
		setOpenModal(false);
	};

	const onChangeHandle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setNewTodoValue(e.target.value);
	};
	return (
		<form onSubmit={onsubmitHandle} className='flex flex-col items-center'>
			<label className='text-slate-200 text-xl font-medium mb-2'>
				Write your todo
			</label>
			<textarea
				className='max-h-32 text-slate-100 bg-slate-800 max-w-full rounded-md border-2 border-slate-900 p-2 '
				placeholder='Type your todo'
				value={newTodoValue}
				onChange={onChangeHandle}
			/>
			<div className='flex justify-center gap-5 mt-5'>
				<button
					className='bg-red-600 p-1 px-2 rounded-md hover:bg-red-500 duration-150'
					type='button'
					onClick={onCancel}
				>
					Cancel
				</button>
				<button
					className='bg-blue-500 p-1 px-2 rounded-md hover:bg-blue-600 duration-150'
					type='submit'
				>
					Save
				</button>
			</div>
		</form>
	);
};

export { TodoForm };
