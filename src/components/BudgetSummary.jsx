import { ShoppingCart, Trash2, DollarSign } from 'lucide-react';
import styles from './BudgetSummary.module.css';

const BudgetSummary = ({ selectedCount, totalPrice, onClear }) => {
    return (
        <div className={styles.summary}>
            <div className={styles.container}>
                <div className={styles.info}>
                    <div className={styles.stat}>
                        <ShoppingCart size={20} />
                        <span className={styles.label}>Items Selected:</span>
                        <span className={styles.value}>{selectedCount}</span>
                    </div>

                    <div className={styles.divider}></div>

                    <div className={styles.stat}>
                        <DollarSign size={20} />
                        <span className={styles.label}>Total Investment:</span>
                        <span className={styles.totalPrice}>DT {totalPrice.toFixed(2)}</span>
                    </div>
                </div>

                {selectedCount > 0 && (
                    <button
                        className={styles.clearButton}
                        onClick={onClear}
                        aria-label="Clear selection"
                    >
                        <Trash2 size={18} />
                        <span>Clear</span>
                    </button>
                )}
            </div>
        </div>
    );
};

export default BudgetSummary;
