import { useState } from 'react';
import type { TodoTypeData } from '../interfaces';

const useLocalStorage = (itemName: string, initialValue: TodoTypeData[]) => {
	const localeStorageItem = localStorage.getItem(itemName);

	let parsedItem;

	if (!localeStorageItem) {
		localStorage.setItem(itemName, JSON.stringify(initialValue));
		parsedItem = initialValue;
	} else {
		parsedItem = JSON.parse(localeStorageItem);
	}

	const [item, setItem] = useState(parsedItem);

	const saveItem = (newItem: TodoTypeData[]) => {
		localStorage.setItem(itemName, JSON.stringify(newItem));

		setItem(newItem);
	};

	return [item, saveItem];
};

export { useLocalStorage };
