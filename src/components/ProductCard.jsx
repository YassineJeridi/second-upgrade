import { Check } from 'lucide-react';
import styles from './ProductCard.module.css';

const ProductCard = ({ product, isSelected, onToggle }) => {
    return (
        <div
            className={`${styles.card} ${isSelected ? styles.selected : ''}`}
            onClick={() => onToggle(product.id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onToggle(product.id)}
        >
            <div className={styles.imageContainer}>
                <img
                    src={product.image}
                    alt={product.name}
                    className={styles.image}
                    onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
                    }}
                />
                {isSelected && (
                    <div className={styles.checkmark}>
                        <Check size={24} strokeWidth={3} />
                    </div>
                )}
            </div>

            <div className={styles.content}>
                <span className={styles.category}>{product.category}</span>
                <h3 className={styles.name}>{product.name}</h3>
                <p className={styles.price}>${product.price.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default ProductCard;
