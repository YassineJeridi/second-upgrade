import { ShoppingCart, Trash2, DollarSign, Package } from 'lucide-react';
import styles from './BudgetSummary.module.css';

const BudgetSummary = ({ selectedCount, totalItems, totalPrice, onClear }) => {
    return (
        <div className={`${styles.summary} ${selectedCount > 0 ? styles.active : ''}`}>
            <div className={styles.container}>
                <div className={styles.info}>
                    <div className={styles.stat}>
                        <ShoppingCart size={18} />
                        <span className={styles.label}>Products:</span>
                        <span className={styles.value}>{selectedCount}</span>
                    </div>

                    <div className={styles.divider}></div>

                    <div className={styles.stat}>
                        <Package size={18} />
                        <span className={styles.label}>Total Items:</span>
                        <span className={styles.value}>{totalItems}</span>
                    </div>

                    <div className={styles.divider}></div>

                    <div className={styles.stat}>
                        <DollarSign size={18} />
                        <span className={styles.label}>Investment:</span>
                        <span className={styles.totalPrice}>DT {totalPrice.toFixed(2)}</span>
                    </div>
                </div>

                {selectedCount > 0 && (
                    <button
                        className={styles.clearButton}
                        onClick={onClear}
                        aria-label="Clear selection"
                    >
                        <Trash2 size={16} />
                        <span>Clear All</span>
                    </button>
                )}
            </div>
        </div>
    );
};

export default BudgetSummary;
