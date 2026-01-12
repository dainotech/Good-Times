import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer style={{ background: 'var(--text-color)', color: '#FDF5E6', padding: '4rem 0 2rem', marginTop: 'auto' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>

                    {/* Brand & Tagline */}
                    <div>
                        <h3 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>Good Times</h3>
                        <p style={{ opacity: 0.8 }}>
                            Belfast’s One stop shop for Party Balloons.<br />
                            From Balloons to Partyware, Good Times make Belfast parties come alive!
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 style={{ marginBottom: '1rem', color: '#fff' }}>Contact Us</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                <Phone size={18} color="var(--primary)" />
                                <span>Shop: 028 9061 1777</span>
                            </div>
                            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                <Mail size={18} color="var(--primary)" />
                                <a href="mailto:brenda4gifts@gmail.com" style={{ color: 'inherit' }}>brenda4gifts@gmail.com</a>
                            </div>
                            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'start' }}>
                                <MapPin size={18} color="var(--primary)" style={{ marginTop: '3px' }} />
                                <address style={{ fontStyle: 'normal' }}>
                                    161a Kingsway<br />
                                    Belfast, Co. Antrim<br />
                                    BT17 9RY
                                </address>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links / Hours */}
                    <div>
                        <h4 style={{ marginBottom: '1rem', color: '#fff' }}>Opening Hours & Socials</h4>
                        <p>Mon - Sat: 9am - 5pm</p>
                        <p>Sun: Closed</p>

                        <a href="#" className="btn btn-secondary" style={{ marginTop: '1rem', borderRadius: 'var(--radius-md)' }}>
                            <Instagram size={20} />
                            <span>Follow on Instagram</span>
                        </a>
                    </div>

                </div>

                <div style={{ textAlign: 'center', marginTop: '3rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)', opacity: 0.6, fontSize: '0.9rem' }}>
                    &copy; {new Date().getFullYear()} Good Times Shop. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
