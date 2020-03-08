import { PURCHASE_PRODUCT, UPDATE_PRODUCTS } from './types';

export const purchaseProduct = (id, qtd) => ({
	type: PURCHASE_PRODUCT,
	id,
	qtd,
});

export const updateProducts = (products) => ({
	type: UPDATE_PRODUCTS,
	products,
});
