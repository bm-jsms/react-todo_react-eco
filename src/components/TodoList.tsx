import { ReactNode } from 'react';

interface TodoListType {
	children: ReactNode;
}

const TodoList = ({ children }: TodoListType) => {
	return <ul className='w-3/5 flex flex-col gap-4 p-4'>{children}</ul>;
};

export { TodoList };
