import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingCart, Filter } from 'lucide-react';
import productsData from '../data/products.json';
import { categories } from '../data/categories';
import { useCart } from '../context/CartContext';

export default function Shop() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const { addToCart } = useCart();

    const filteredProducts = useMemo(() => {
        return productsData.filter(product => {
            const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
            const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchQuery]);

    return (
        <div className="shop-page" style={{ padding: '2rem 0', minHeight: '80vh' }}>
            <div className="container">
                <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--primary)' }}>Shop Balloons</h1>

                {/* Filters & Search */}
                <div style={{ marginBottom: '3rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                    {/* Search Bar */}
                    <div style={{ position: 'relative', maxWidth: '500px', margin: '0 auto', width: '100%' }}>
                        <Search size={20} color="var(--text-light)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
                        <input
                            type="text"
                            placeholder="Search for balloons..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '0.8rem 1rem 0.8rem 3rem',
                                borderRadius: 'var(--radius-full)',
                                border: '1px solid #ddd',
                                fontSize: '1rem',
                                fontFamily: 'inherit'
                            }}
                        />
                    </div>

                    {/* Category Chips */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
                        <button
                            className={`category-chip ${selectedCategory === 'all' ? 'active' : ''}`}
                            onClick={() => setSelectedCategory('all')}
                        >
                            All
                        </button>
                        {categories.map(cat => (
                            <button
                                key={cat.id}
                                className={`category-chip ${selectedCategory === cat.id ? 'active' : ''}`}
                                onClick={() => setSelectedCategory(cat.id)}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
                    <AnimatePresence>
                        {filteredProducts.map(product => (
                            <motion.div
                                key={product.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="product-card"
                                style={{ background: 'white', borderRadius: 'var(--radius-md)', padding: '1rem', boxShadow: 'var(--shadow-sm)', display: 'flex', flexDirection: 'column' }}
                            >
                                <div style={{ position: 'relative', aspectRatio: '1', marginBottom: '1rem', overflow: 'hidden', borderRadius: 'var(--radius-sm)' }}>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
                                        onMouseOver={e => e.target.style.transform = 'scale(1.05)'}
                                        onMouseOut={e => e.target.style.transform = 'scale(1)'}
                                    />
                                </div>

                                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{product.name}</h3>
                                <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', marginBottom: '1rem', flex: 1 }}>{product.description}</p>

                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
                                    <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--primary)' }}>£{product.price.toFixed(2)}</span>
                                    <button
                                        className="btn btn-primary"
                                        style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
                                        onClick={() => addToCart(product, null)} // Date is null for now, set at checkout? Or maybe we need a date here.
                                    >
                                        Add <ShoppingCart size={16} />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {filteredProducts.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-light)' }}>
                        No balloons found matching your search.
                    </div>
                )}

            </div>

            <style>{`
        .category-chip {
          padding: 0.5rem 1rem;
          border-radius: var(--radius-full);
          background: white;
          border: 1px solid #ddd;
          color: var(--text-color);
          font-size: 0.9rem;
          transition: all 0.2s;
        }
        .category-chip:hover {
          border-color: var(--primary);
          color: var(--primary);
        }
        .category-chip.active {
          background: var(--primary);
          color: white;
          border-color: var(--primary);
          box-shadow: var(--shadow-glow);
        }
      `}</style>
        </div>
    );
}
