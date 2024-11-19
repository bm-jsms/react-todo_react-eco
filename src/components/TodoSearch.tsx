import { useContext } from 'react';
import { TodoContext } from '../context';

const TodoSearch = () => {
	const { inputValue, setInputValue }: any = useContext(TodoContext);
	return (
		<>
			<input
				type='text'
				value={inputValue}
				onChange={(e) => {
					setInputValue(e.target.value);
				}}
				placeholder='Type to search'
				className='w-2/4 bg-transparent rounded-md border py-[10px] px-5 text-dark-6 outline-none transition focus:border-blue-500  active:border-primary focus:bg-slate-700 border-blue-400 bg-slate-800'
			/>

			<p>Current Value: {inputValue}</p>
		</>
	);
};

export { TodoSearch };
