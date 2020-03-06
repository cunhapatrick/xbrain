import { PURCHASE_PRODUCT } from './types';

export const purchaseProduct = (id, qtd) => ({
	type: PURCHASE_PRODUCT,
	id,
	qtd,
});
