export type TodoType = {
	id?: number;
	title: string;
	completed: boolean;

	onComplete: () => void;
	onDelete: () => void;
};
