import { useState, useMemo } from 'react';

export const useSelectedProducts = (products) => {
    // Map of product id -> quantity (0 means not selected)
    const [quantities, setQuantities] = useState(new Map());

    const toggleProduct = (id) => {
        setQuantities(prev => {
            const newMap = new Map(prev);
            if (newMap.has(id) && newMap.get(id) > 0) {
                newMap.delete(id);
            } else {
                newMap.set(id, 1);
            }
            return newMap;
        });
    };

    const setQuantity = (id, qty) => {
        setQuantities(prev => {
            const newMap = new Map(prev);
            if (qty <= 0) {
                newMap.delete(id);
            } else {
                newMap.set(id, qty);
            }
            return newMap;
        });
    };

    const clearSelection = () => {
        setQuantities(new Map());
    };

    const { totalPrice, selectedCount, totalItems } = useMemo(() => {
        let total = 0;
        let count = 0;
        let items = 0;
        for (const product of products) {
            const qty = quantities.get(product.id) || 0;
            if (qty > 0) {
                total += product.price * qty;
                count++;
                items += qty;
            }
        }
        return { totalPrice: total, selectedCount: count, totalItems: items };
    }, [quantities, products]);

    return {
        quantities,
        toggleProduct,
        setQuantity,
        clearSelection,
        totalPrice,
        selectedCount,
        totalItems,
        isSelected: (id) => (quantities.get(id) || 0) > 0,
        getQuantity: (id) => quantities.get(id) || 0
    };
};
