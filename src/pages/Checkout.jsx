import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, Calendar, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Checkout() {
    const { cart, removeFromCart, cartTotal, clearCart } = useCart();
    const [collectionDate, setCollectionDate] = useState('');
    const [isPaid, setIsPaid] = useState(false);

    if (cart.length === 0 && !isPaid) {
        return (
            <div className="container" style={{ padding: '4rem 0', textAlign: 'center', minHeight: '60vh' }}>
                <h1 style={{ marginBottom: '2rem' }}>Your Trolley is Empty 🛒</h1>
                <p>Looks like you haven't added any fun balloons yet!</p>
                <Link to="/shop" className="btn btn-primary" style={{ marginTop: '2rem' }}>
                    Go to Shop
                </Link>
            </div>
        );
    }

    if (isPaid) {
        return (
            <div className="container" style={{ padding: '4rem 0', textAlign: 'center', minHeight: '60vh' }}>
                <h1 style={{ color: 'var(--secondary)', marginBottom: '1rem' }}>Order Confirmed! 🎉</h1>
                <p style={{ fontSize: '1.2rem' }}>Thank you for shopping with Good Times.</p>
                <p>Your balloons will be ready for collection on <strong>{collectionDate}</strong>.</p>
                <Link to="/" className="btn btn-primary" style={{ marginTop: '2rem' }}>
                    Back Home
                </Link>
            </div>
        );
    }

    return (
        <div className="container" style={{ padding: '2rem 0', minHeight: '80vh' }}>
            <h1 style={{ marginBottom: '2rem', textAlign: 'center' }}>Checkout</h1>

            <div className="checkout-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>

                {/* Cart Items */}
                <div>
                    <h2 style={{ marginBottom: '1.5rem' }}>Your Trolley</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {cart.map((item, index) => (
                            <div key={`${item.id}-${index}`} style={{ display: 'flex', gap: '1rem', background: 'var(--card-bg)', padding: '1rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
                                <div style={{ width: '80px', height: '80px', borderRadius: 'var(--radius-sm)', overflow: 'hidden', flexShrink: 0 }}>
                                    <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <h4 style={{ marginBottom: '0.2rem' }}>{item.name}</h4>
                                    <p style={{ color: 'var(--primary)', fontWeight: 'bold' }}>£{item.price.toFixed(2)}</p>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Qty: {item.quantity}</p>
                                </div>
                                <button onClick={() => removeFromCart(item.id, item.date)} style={{ color: '#e53e3e', padding: '0.5rem' }}>
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: '2rem', textAlign: 'right', fontSize: '1.5rem', fontWeight: 'bold' }}>
                        Total: <span style={{ color: 'var(--primary)' }}>£{cartTotal.toFixed(2)}</span>
                    </div>
                </div>

                {/* Checkout Details */}
                <div>
                    <div style={{ background: 'var(--card-bg)', padding: '2rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}>
                        <h2 style={{ marginBottom: '1.5rem' }}>Collection Details</h2>

                        <div style={{ marginBottom: '2rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Select Collection Date</label>
                            <div style={{ position: 'relative' }}>
                                <Calendar size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)' }} />
                                <input
                                    type="date"
                                    required
                                    min={new Date().toISOString().split('T')[0]}
                                    value={collectionDate}
                                    onChange={(e) => setCollectionDate(e.target.value)}
                                    style={{
                                        width: '100%',
                                        padding: '0.8rem 1rem 0.8rem 3rem',
                                        borderRadius: 'var(--radius-md)',
                                        border: '1px solid #ddd',
                                        fontSize: '1rem',
                                        fontFamily: 'inherit'
                                    }}
                                />
                            </div>
                        </div>

                        <h3 style={{ marginBottom: '1rem' }}>Payment Method</h3>
                        <div style={{ display: 'grid', gap: '0.5rem' }}>
                            <button className="payment-btn" onClick={() => collectionDate ? (clearCart(), setIsPaid(true)) : alert('Please select a date')}>
                                <CreditCard size={20} /> Credit / Debit Card
                            </button>
                            <button className="payment-btn" onClick={() => collectionDate ? (clearCart(), setIsPaid(true)) : alert('Please select a date')}>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg" alt="Google Pay" style={{ height: '24px' }} />
                            </button>
                            <button className="payment-btn" onClick={() => collectionDate ? (clearCart(), setIsPaid(true)) : alert('Please select a date')}>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" style={{ height: '24px' }} />
                            </button>
                        </div>

                        {!collectionDate && <p style={{ color: '#e53e3e', marginTop: '1rem', fontSize: '0.9rem' }}>* Please select a collection date to proceed.</p>}

                        <div style={{ marginTop: '2rem', padding: '1rem', background: 'var(--bg-color)', borderRadius: 'var(--radius-md)' }}>
                            <h4>Custom Order?</h4>
                            <p style={{ fontSize: '0.9rem' }}>Need something specific? <Link to="/contact" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Get in touch</Link> directly.</p>
                        </div>

                    </div>
                </div>

            </div>

            <style>{`
        .payment-btn {
          width: 100%;
          padding: 1rem;
          border: 1px solid #eee;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background: #f8f9fa;
          transition: all 0.2s;
        }
        .payment-btn:hover {
          background: var(--card-bg);
          border-color: var(--primary);
          box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        }
      `}</style>
        </div>
    );
}
