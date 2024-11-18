import type { TodoIconHandle } from '../interfaces';

const DeleteIcon = ({ handleClick }: TodoIconHandle) => {
	return (
		<span className='text-red-500' onClick={handleClick}>
			X
		</span>
	);
};

export { DeleteIcon };
