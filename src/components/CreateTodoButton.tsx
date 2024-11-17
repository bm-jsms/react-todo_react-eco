const CreateTodoButton = () => {
	return (
		<button
			className='bg-primary text-white px-4 py-1 rounded-md border'
			onClick={() => alert('Create Todo')}
		>
			Create
		</button>
	);
};

export { CreateTodoButton };
