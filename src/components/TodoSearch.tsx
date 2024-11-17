const TodoSearch = () => {
	return (
		<>
			<input
				type='text'
				placeholder='Type to search'
				className='w-2/4 bg-transparent rounded-md border py-[10px] px-5 text-dark-6 outline-none transition focus:border-blue-500  active:border-primary focus:bg-slate-700 border-blue-400 bg-slate-800'
			/>
		</>
	);
};

export { TodoSearch };
