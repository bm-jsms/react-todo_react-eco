const CreateTodoButton = ({ handleModalOpen }: any) => {
	return (
		<button
			className='bg-primary text-white px-4 py-1 rounded-md border'
			onClick={handleModalOpen}
		>
			Create
		</button>
	);
};

export { CreateTodoButton };
