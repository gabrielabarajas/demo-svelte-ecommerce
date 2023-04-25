/**
 * Function to get all available filters based on products brands
 * @param {Array} products Products array to search in
 * @returns Available filters array
 */
export const getAvailableFilters = (products) => {
	const filters = [];

	products.forEach((product) => {
		const filterIndex = filters.findIndex((item) => item.name === product.brand.label);

		if (filterIndex < 0) filters.push({ name: product.brand.label });
	});

	return filters;
};

/**
 * Function to get products filtered by name included into the webLabel
 * @param {String} name String to search by
 * @param {Array} products Products array to search in
 * @returns Product list filtered by name
 */
export const getProductsByName = (name, products) =>
	products.filter((item) => item.webLabel.toLowerCase().includes(name));

/**
 * Function to get products filtered by brand
 * @param {Array} brands Checked array brands
 * @param {Array} products Products array to search in
 * @returns Product list filtered by brand
 */
export const getProductsByBrand = (brands, products) => {
	if (!brands.length) return products;
	return products.filter((item) => brands.includes(item.brand.label));
};
