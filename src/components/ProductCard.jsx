import { ExternalLink, Plus, Minus } from 'lucide-react';
import styles from './ProductCard.module.css';

const ProductCard = ({ product, isSelected, quantity, onToggle, onQuantityChange }) => {
    const handleCardClick = (e) => {
        if (
            e.target.type === 'checkbox' ||
            e.target.closest(`.${styles.checkboxContainer}`) ||
            e.target.closest(`.${styles.quantityControls}`)
        ) {
            return;
        }
        if (product.url) {
            window.open(product.url, '_blank', 'noopener,noreferrer');
        }
    };

    const handleCheckboxChange = (e) => {
        e.stopPropagation();
        onToggle(product.id);
    };

    const handleIncrement = (e) => {
        e.stopPropagation();
        onQuantityChange(product.id, (quantity || 0) + 1);
    };

    const handleDecrement = (e) => {
        e.stopPropagation();
        if (quantity > 1) {
            onQuantityChange(product.id, quantity - 1);
        } else {
            onToggle(product.id);
        }
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

                {product.url && (
                    <div className={styles.linkIcon}>
                        <ExternalLink size={16} />
                    </div>
                )}

                {isSelected && quantity > 0 && (
                    <div className={styles.quantityBadge}>x{quantity}</div>
                )}
            </div>

            <div className={styles.content}>
                <div className={styles.contentTop}>
                    <span className={styles.category}>{product.category}</span>
                    {product.url && (
                        <span className={styles.viewDetails}>
                            Visit <ExternalLink size={12} />
                        </span>
                    )}
                </div>
                <h3 className={styles.name}>{product.name}</h3>
                <div className={styles.footer}>
                    <div className={styles.priceSection}>
                        <p className={styles.price}>DT {product.price.toFixed(2)}</p>
                        {isSelected && quantity > 1 && (
                            <p className={styles.subtotal}>= DT {(product.price * quantity).toFixed(2)}</p>
                        )}
                    </div>
                    {isSelected && (
                        <div className={styles.quantityControls} onClick={(e) => e.stopPropagation()}>
                            <button
                                className={styles.qtyBtn}
                                onClick={handleDecrement}
                                aria-label="Decrease quantity"
                            >
                                <Minus size={14} />
                            </button>
                            <span className={styles.qtyValue}>{quantity}</span>
                            <button
                                className={styles.qtyBtn}
                                onClick={handleIncrement}
                                aria-label="Increase quantity"
                            >
                                <Plus size={14} />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
