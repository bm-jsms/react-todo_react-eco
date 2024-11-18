import { IoCheckmarkCircleOutline } from 'react-icons/io5';

import type { TodoIconHandle } from '../interfaces';

const CompleteIcon = ({ handleClick, completed }: TodoIconHandle) => {
	return (
		<IoCheckmarkCircleOutline
			className={`${
				completed && 'text-green-500'
			} cursor-pointer text-2xl duration-150 hover:scale-110 hover:text-green-500 font-bold`}
			onClick={handleClick}
		/>
	);
};

export { CompleteIcon };
