import { useEffect, useState } from 'react';
import type { TodoTypeData } from '../interfaces';

const useLocalStorage = (itemName: string, initialValue: TodoTypeData[]) => {
	const [item, setItem] = useState(initialValue);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<boolean>(false);

	useEffect(() => {
		try {
			setTimeout(() => {
				const localeStorageItem = localStorage.getItem(itemName);

				let parsedItem;

				if (!localeStorageItem) {
					localStorage.setItem(itemName, JSON.stringify(initialValue));
					parsedItem = initialValue;
				} else {
					parsedItem = JSON.parse(localeStorageItem);
					setItem(parsedItem);
				}
				setLoading(false);
			}, 1000);
		} catch (error) {
			setLoading(false);
			setError(true);
		}
	}, []);

	const saveItem = (newItem: TodoTypeData[]) => {
		localStorage.setItem(itemName, JSON.stringify(newItem));

		setItem(newItem);
	};

	return { item, saveItem, loading, error };
};

export { useLocalStorage };
