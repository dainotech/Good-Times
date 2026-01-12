import { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export function useCart() {
    return useContext(CartContext);
}

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    // Load cart from local storage on init
    useEffect(() => {
        const savedCart = localStorage.getItem('goodtimes-cart');
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    // Save cart to local storage on change
    useEffect(() => {
        localStorage.setItem('goodtimes-cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product, date, quantity = 1) => {
        setCart(prev => {
            // Check if item exists with same ID and same collection date
            const existing = prev.find(item => item.id === product.id && item.date === date);
            if (existing) {
                return prev.map(item =>
                    (item.id === product.id && item.date === date)
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }
            return [...prev, { ...product, date, quantity }];
        });
    };

    const removeFromCart = (productId, date) => {
        setCart(prev => prev.filter(item => !(item.id === productId && item.date === date)));
    };

    const clearCart = () => setCart([]);

    const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, cartTotal, cartCount }}>
            {children}
        </CartContext.Provider>
    );
}
