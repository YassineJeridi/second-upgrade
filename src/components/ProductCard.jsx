import { ExternalLink } from 'lucide-react';
import styles from './ProductCard.module.css';

const ProductCard = ({ product, isSelected, onToggle }) => {
    const handleCardClick = (e) => {
        // Prevent navigation if clicking checkbox
        if (e.target.type === 'checkbox' || e.target.closest(`.${styles.checkboxContainer}`)) {
            return;
        }
        // Open product URL in new tab
        if (product.url) {
            window.open(product.url, '_blank', 'noopener,noreferrer');
        }
    };

    const handleCheckboxChange = (e) => {
        e.stopPropagation();
        onToggle(product.id);
    };

    return (
        <div
            className={`${styles.card} ${isSelected ? styles.selected : ''}`}
            onClick={handleCardClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' && product.url) {
                    window.open(product.url, '_blank', 'noopener,noreferrer');
                }
            }}
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

                {/* Checkbox for Selection */}
                <div className={styles.checkboxContainer} onClick={(e) => e.stopPropagation()}>
                    <input
                        type="checkbox"
                        id={`product-${product.id}`}
                        checked={isSelected}
                        onChange={handleCheckboxChange}
                        className={styles.checkbox}
                        aria-label={`Select ${product.name}`}
                    />
                    <label htmlFor={`product-${product.id}`} className={styles.checkboxLabel}></label>
                </div>

                {/* External Link Icon */}
                {product.url && (
                    <div className={styles.linkIcon}>
                        <ExternalLink size={18} />
                    </div>
                )}
            </div>

            <div className={styles.content}>
                <span className={styles.category}>{product.category}</span>
                <h3 className={styles.name}>{product.name}</h3>
                <div className={styles.footer}>
                    <p className={styles.price}>DT {product.price.toFixed(2)}</p>
                    {product.url && (
                        <span className={styles.viewDetails}>
                            View Details <ExternalLink size={14} />
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
