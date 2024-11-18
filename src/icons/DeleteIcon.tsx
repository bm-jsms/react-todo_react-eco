import { MdDelete } from 'react-icons/md';

import type { TodoIconHandle } from '../interfaces';

const DeleteIcon = ({ handleClick }: TodoIconHandle) => {
	return (
		<MdDelete
			className='text-red-500/75 text-2xl cursor-pointer duration-150 hover:scale-x-110 hover:text-red-500 font-bold'
			onClick={handleClick}
		/>
	);
};

export { DeleteIcon };
