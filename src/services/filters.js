export const getAvailableFilters = (products) => {
	const filters = [];

	products.forEach((product) => {
		const filterIndex = filters.findIndex((item) => item.name === product.brand.label);

		if (filterIndex < 0) filters.push({ name: product.brand.label });
	});

	return filters;
};

export const getProductsByName = (name, products) =>
	products.filter((item) => item.webLabel.toLowerCase().includes(name));

export const getProductsByBrand = (brands, products) => {
	if (!brands.length) return products;
	return products.filter((item) => brands.includes(item.brand.label));
};
