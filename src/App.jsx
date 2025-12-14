import { useState } from 'react';
import { Package } from 'lucide-react';
import ProductCard from './components/ProductCard';
import BudgetSummary from './components/BudgetSummary';
import CategoryFilter from './components/CategoryFilter';
import { products, categories } from './data';
import { useSelectedProducts } from './hooks/useSelectedProducts';
import styles from './App.module.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const {
    selectedIds,
    toggleProduct,
    clearSelection,
    totalPrice,
    selectedCount,
    isSelected
  } = useSelectedProducts(products);

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.titleSection}>
            <Package size={32} className={styles.icon} />
            <div>
              <h1 className={styles.title}>Equipment Wishlist & Budgeting Tool</h1>
              <p className={styles.subtitle}>Redix Digital Solutions - Internal Investment Planning</p>
            </div>
          </div>
          <div className={styles.stats}>
            <div className={styles.statBadge}>
              <span className={styles.statLabel}>Total Equipment</span>
              <span className={styles.statValue}>{products.length}</span>
            </div>
            <div className={styles.statBadge}>
              <span className={styles.statLabel}>Categories</span>
              <span className={styles.statValue}>{categories.length}</span>
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
          />

          <div className={styles.grid}>
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                isSelected={isSelected(product.id)}
                onToggle={toggleProduct}
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
        totalPrice={totalPrice}
        onClear={clearSelection}
      />
    </div>
  );
}

export default App;
