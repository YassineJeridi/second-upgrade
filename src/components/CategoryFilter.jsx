import { Filter } from 'lucide-react';
import styles from './CategoryFilter.module.css';

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
    return (
        <div className={styles.filterBar}>
            <div className={styles.label}>
                <Filter size={18} />
                <span>Filter by Category:</span>
            </div>

            <div className={styles.buttons}>
                <button
                    className={`${styles.filterButton} ${selectedCategory === 'All' ? styles.active : ''}`}
                    onClick={() => onCategoryChange('All')}
                >
                    All Equipment
                </button>
                {categories.map(category => (
                    <button
                        key={category}
                        className={`${styles.filterButton} ${selectedCategory === category ? styles.active : ''}`}
                        onClick={() => onCategoryChange(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CategoryFilter;
