import { ReactNode } from 'react';

interface TodoListType {
	children: ReactNode;
}

const TodoList = ({ children }: TodoListType) => {
	return <ul>{children}</ul>;
};

export { TodoList };
