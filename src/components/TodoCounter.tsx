interface TodoCounterType {
	completed: number;
	total: number;
}

const TodoCounter = ({ completed, total }: TodoCounterType) => {
	return (
		<h1 className='text-center text-4xl font-bold text-white mb-10'>
			You're completed {completed} of {total} todo's
		</h1>
	);
};

export { TodoCounter };
