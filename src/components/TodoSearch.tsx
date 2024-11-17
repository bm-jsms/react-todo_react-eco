import { Dispatch } from 'react';

interface TodoSearchType {
	searchValue: string;
	setSearchValue: Dispatch<React.SetStateAction<string>>;
}

const TodoSearch = ({ searchValue, setSearchValue }: TodoSearchType) => {
	return (
		<>
			<input
				type='text'
				value={searchValue}
				onChange={(e) => {
					setSearchValue(e.target.value);
				}}
				placeholder='Type to search'
				className='w-2/4 bg-transparent rounded-md border py-[10px] px-5 text-dark-6 outline-none transition focus:border-blue-500  active:border-primary focus:bg-slate-700 border-blue-400 bg-slate-800'
			/>

			<p>Current Value: {searchValue}</p>
		</>
	);
};

export { TodoSearch };
