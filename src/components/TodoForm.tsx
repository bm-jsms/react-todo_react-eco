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
		<form onSubmit={onsubmitHandle}>
			<label>Write your todo</label>
			<textarea
				className='max-h-32 text-slate-600'
				placeholder='Type your todo'
				value={newTodoValue}
				onChange={onChangeHandle}
			/>

			<button className='bg-red-500' type='button' onClick={onCancel}>
				Cancel
			</button>
			<button className='bg-blue-500' type='submit'>
				Save
			</button>
		</form>
	);
};

export { TodoForm };
