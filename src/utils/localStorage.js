export const setLocalStorage = (name, data) => {
	if (typeof name === 'string' && data)
		localStorage.setItem(name, JSON.stringify(data));
};

export const getLocalStorage = (name) => {
	if (typeof name === 'string') return JSON.parse(localStorage.getItem(name));
	return null;
};
