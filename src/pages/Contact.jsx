import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="contact-page" style={{ padding: '4rem 0', minHeight: '80vh' }}>
            <div className="container">
                <h1 style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--primary)' }}>Get In Touch</h1>

                <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>

                    {/* Contact Info */}
                    <div className="animate-in slide-in-from-left-10 duration-500">
                        <h2 style={{ marginBottom: '1.5rem' }}>Contact Details</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.1rem' }}>

                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <div style={{ background: 'white', padding: '1rem', borderRadius: '50%', boxShadow: 'var(--shadow-sm)' }}>
                                    <Phone size={24} color="var(--primary)" />
                                </div>
                                <div>
                                    <div style={{ fontWeight: 'bold' }}>Phone</div>
                                    <div>028 9061 1777</div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <div style={{ background: 'white', padding: '1rem', borderRadius: '50%', boxShadow: 'var(--shadow-sm)' }}>
                                    <Mail size={24} color="var(--primary)" />
                                </div>
                                <div>
                                    <div style={{ fontWeight: 'bold' }}>Email</div>
                                    <a href="mailto:brenda4gifts@gmail.com">brenda4gifts@gmail.com</a>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <div style={{ background: 'white', padding: '1rem', borderRadius: '50%', boxShadow: 'var(--shadow-sm)' }}>
                                    <MapPin size={24} color="var(--primary)" />
                                </div>
                                <div>
                                    <div style={{ fontWeight: 'bold' }}>Address</div>
                                    <address style={{ fontStyle: 'normal' }}>
                                        161a Kingsway<br />
                                        Belfast, Co. Antrim<br />
                                        BT17 9RY
                                    </address>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Enquiry Form */}
                    <div className="contact-form" style={{ background: 'white', padding: '2rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }}>
                        {submitted ? (
                            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                                <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Message Sent!</h3>
                                <p>Thanks for getting in touch. We'll get back to you soon.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <h2 style={{ marginBottom: '0.5rem' }}>Send us a message</h2>

                                <div>
                                    <label style={{ fontWeight: '600', display: 'block', marginBottom: '0.5rem' }}>Name</label>
                                    <input type="text" required className="form-input" placeholder="Your Name" />
                                </div>

                                <div>
                                    <label style={{ fontWeight: '600', display: 'block', marginBottom: '0.5rem' }}>Email</label>
                                    <input type="email" required className="form-input" placeholder="your@email.com" />
                                </div>

                                <div>
                                    <label style={{ fontWeight: '600', display: 'block', marginBottom: '0.5rem' }}>Message</label>
                                    <textarea required rows="4" className="form-input" placeholder="Tell us about your custom order..."></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary">
                                    Send Message <Send size={18} />
                                </button>
                            </form>
                        )}
                    </div>

                </div>
            </div>

            <style>{`
        .form-input {
          width: 100%;
          padding: 0.8rem;
          border: 1px solid #ddd;
          border-radius: var(--radius-sm);
          font-family: inherit;
          fontSize: 1rem;
        }
        .form-input:focus {
          border-color: var(--primary);
          outline: none;
          box-shadow: 0 0 0 3px rgba(255, 0, 255, 0.1);
        }
      `}</style>
        </div>
    );
}
