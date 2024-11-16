interface TodoCounterType {
	completed: number;
	total: number;
}

const TodoCounter = ({ completed, total }: TodoCounterType) => {
	return (
		<h1>
			You're completed {completed} of {total} todo's
		</h1>
	);
};

export { TodoCounter };
