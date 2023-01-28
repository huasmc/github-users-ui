export const get = async (url, queryParams) => {
	return await fetch(url + new URLSearchParams(queryParams))
		.then((response) => response.json())
		.then((data) => {
			return data;
		})
		.catch((error) => {
			throw new Error(error);
		});
};
