import { IoCheckmarkCircleOutline } from 'react-icons/io5';
import { IoMdCheckmarkCircle } from 'react-icons/io';

import type { TodoIconHandle } from '../interfaces';

const CompleteIcon = ({ handleClick, completed }: TodoIconHandle) => {
	return completed ? (
		<IoMdCheckmarkCircle
			className='cursor-pointer text-2xl duration-150 hover:scale-110 text-green-500 font-bold hover:text-green-700'
			onClick={handleClick}
		/>
	) : (
		<IoCheckmarkCircleOutline
			className='cursor-pointer text-2xl duration-150 hover:scale-110 hover:text-green-500 font-bold'
			onClick={handleClick}
		/>
	);
};

export { CompleteIcon };
