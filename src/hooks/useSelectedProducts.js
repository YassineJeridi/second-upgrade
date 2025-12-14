import { useState, useMemo } from 'react';

export const useSelectedProducts = (products) => {
    const [selectedIds, setSelectedIds] = useState(new Set());

    const toggleProduct = (id) => {
        setSelectedIds(prev => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            return newSet;
        });
    };

    const clearSelection = () => {
        setSelectedIds(new Set());
    };

    const { totalPrice, selectedCount } = useMemo(() => {
        const selected = products.filter(p => selectedIds.has(p.id));
        return {
            totalPrice: selected.reduce((sum, p) => sum + p.price, 0),
            selectedCount: selected.length
        };
    }, [selectedIds, products]);

    return {
        selectedIds,
        toggleProduct,
        clearSelection,
        totalPrice,
        selectedCount,
        isSelected: (id) => selectedIds.has(id)
    };
};
