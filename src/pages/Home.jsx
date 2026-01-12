import { motion } from 'framer-motion';
import { ArrowRight, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="home-page">

            {/* Hero Section */}
            <section className="hero" style={{
                position: 'relative',
                minHeight: '80vh',
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden',
                background: 'var(--bg-color)' // Clean cream background
            }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'center', width: '100%', zIndex: 2 }}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>
                            Belfast’s One Stop Shop for <span style={{ color: 'var(--secondary)' }}>Party Balloons</span>
                        </h1>
                        <p style={{ fontSize: '1.25rem', marginBottom: '2rem', color: 'var(--text-light)', maxWidth: '500px' }}>
                            From Balloons to Partyware, Good Times make Belfast parties come alive!
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <Link to="/shop" className="btn btn-primary">
                                Order Online <ArrowRight size={18} />
                            </Link>
                            <Link to="/contact" className="btn btn-secondary">
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ display: 'flex', justifyContent: 'center' }}
                    >
                        <img
                            src="/images/hero-balloons.png"
                            alt="Bunch of party balloons"
                            style={{ width: '100%', maxWidth: '600px', dropShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
                        />
                    </motion.div>
                </div>
            </section>

            {/* Instagram Mockup */}
            <section style={{ padding: '4rem 0' }}>
                <div className="container">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
                        <Instagram size={32} color="var(--primary)" />
                        <h2 style={{ fontSize: '2rem' }}>Latest from Instagram</h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                        {[1, 2, 3, 4].map((item) => (
                            <div key={item} style={{ aspectRatio: '1', background: '#eee', borderRadius: 'var(--radius-md)', overflow: 'hidden', position: 'relative', cursor: 'pointer' }}>
                                <img
                                    src={`https://placehold.co/400x400/ff00ff/ffffff?text=Post+${item}`}
                                    alt="Insta Post"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
                                    onMouseOver={e => e.target.style.transform = 'scale(1.1)'}
                                    onMouseOut={e => e.target.style.transform = 'scale(1)'}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section style={{ padding: '4rem 0', background: 'white' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}>Check Out Our Work</h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div className="gallery-item">
                            <img src="/images/cat-arches.jpg" alt="Balloon Arch" style={{ width: '100%', borderRadius: 'var(--radius-md)', marginBottom: '1rem' }} />
                            <h3>Stunning Arches</h3>
                            <p>Perfect for entrances and photo backdrops.</p>
                        </div>
                        <div className="gallery-item">
                            <img src="/images/cat-foil.jpg" alt="Custom Foils" style={{ width: '100%', borderRadius: 'var(--radius-md)', marginBottom: '1rem' }} />
                            <h3>Personalized Foils</h3>
                            <p>Add a name or message to make it special.</p>
                        </div>
                        <div className="gallery-item">
                            <img src="/images/cat-halloween.jpg" alt="Themed Events" style={{ width: '100%', borderRadius: 'var(--radius-md)', marginBottom: '1rem' }} />
                            <h3>Themed Events</h3>
                            <p>Halloween, Christmas, and everything in between.</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
