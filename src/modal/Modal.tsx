import React from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
	children: React.ReactNode;
}

function Modal({ children }: ModalProps) {
	return ReactDOM.createPortal(
		<div className='fixed top-0 left-0 w-screen h-screen bg-black/50 flex items-center justify-center'>
			<div className='bg-slate-600 z-50 w-1/4 max-w-md p-4 rounded-md shadow-slate-500 shadow-md'>
				{children}
			</div>
		</div>,

		document.getElementById('modal-root')!,
	);
}

export { Modal };
