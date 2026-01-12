import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { cartCount } = useCart();

    return (
        <nav className="navbar" style={{ background: 'var(--card-bg)', boxShadow: 'var(--shadow-sm)', position: 'sticky', top: 0, zIndex: 50 }}>
            {/* ...styles can be moved to CSS, but inline for quick iteration/specific overrides */}
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>

                {/* Logo */}
                <NavLink to="/" className="logo play-font" style={{ fontSize: '1.8rem', color: 'var(--primary)', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                    Good Times 🎈
                </NavLink>

                {/* Desktop Links */}
                <div className="desktop-menu" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
                    <NavLink to="/shop" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Shop Balloons</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Contact Us</NavLink>

                    <Link to="/checkout" className="cart-btn btn btn-primary" style={{ padding: '0.5rem 1rem', textDecoration: 'none' }}>
                        <ShoppingCart size={20} />
                        <span>Trolley</span>
                        {cartCount > 0 && (
                            <span style={{ background: 'white', color: 'var(--primary)', borderRadius: '50%', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 'bold' }}>
                                {cartCount}
                            </span>
                        )}
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} style={{ display: 'none' }}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mobile-menu"
                        style={{ background: 'var(--card-bg)', borderTop: '1px solid #eee', padding: '1rem' }}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
                            <NavLink to="/shop" onClick={() => setIsOpen(false)}>Shop Balloons</NavLink>
                            <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact Us</NavLink>
                            <button className="btn btn-primary" style={{ width: '100%' }}>
                                <ShoppingCart size={20} /> Cart
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        .nav-link {
          font-weight: 600;
          color: var(--text-color);
          transition: color 0.2s;
        }
        .nav-link:hover, .nav-link.active {
          color: var(--primary);
        }
        
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
        </nav>
    );
}
