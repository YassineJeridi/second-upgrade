import { useState } from 'react';
import { Package, Sparkles } from 'lucide-react';
import ProductCard from './components/ProductCard';
import BudgetSummary from './components/BudgetSummary';
import CategoryFilter from './components/CategoryFilter';
import { products, categories } from './data';
import { useSelectedProducts } from './hooks/useSelectedProducts';
import styles from './App.module.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const {
    toggleProduct,
    setQuantity,
    clearSelection,
    totalPrice,
    selectedCount,
    totalItems,
    isSelected,
    getQuantity
  } = useSelectedProducts(products);

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.titleSection}>
            <div className={styles.logoContainer}>
              <Package size={28} className={styles.icon} />
              <Sparkles size={14} className={styles.sparkle} />
            </div>
            <div>
              <h1 className={styles.title}>Equipment Wishlist</h1>
              <p className={styles.subtitle}>Redix Digital Solutions - Investment Planning</p>
            </div>
          </div>
          <div className={styles.stats}>
            <div className={styles.statBadge}>
              <span className={styles.statValue}>{products.length}</span>
              <span className={styles.statLabel}>Products</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statBadge}>
              <span className={styles.statValue}>{categories.length}</span>
              <span className={styles.statLabel}>Categories</span>
            </div>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.container}>
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            productCounts={products}
          />

          <div className={styles.grid}>
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                isSelected={isSelected(product.id)}
                quantity={getQuantity(product.id)}
                onToggle={toggleProduct}
                onQuantityChange={setQuantity}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className={styles.emptyState}>
              <Package size={64} />
              <h2>No equipment found in this category</h2>
              <p>Try selecting a different category</p>
            </div>
          )}
        </div>
      </main>

      <BudgetSummary
        selectedCount={selectedCount}
        totalItems={totalItems}
        totalPrice={totalPrice}
        onClear={clearSelection}
      />
    </div>
  );
}

export default App;
