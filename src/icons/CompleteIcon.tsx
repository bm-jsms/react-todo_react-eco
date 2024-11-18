import type { TodoIconHandle } from '../interfaces';

const CompleteIcon = ({ handleClick }: TodoIconHandle) => {
	return (
		<span className='text-green-500' onClick={handleClick}>
			V
		</span>
	);
};

export { CompleteIcon };
