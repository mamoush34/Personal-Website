import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { observer } from 'mobx-react-lite';
import './top_bar.scss';

const TopBar: React.FC = observer(() => {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    const navItems = [
        { path: '/', label: 'Home', id: 'home' },
        { path: '/about', label: 'About Me', id: 'about' },
        { path: '/portfolio', label: 'Portfolio', id: 'projects' },
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="top_container" role="navigation" aria-label="Main navigation">
            <div className="nav-brand">
                <Link to="/" className="brand-link">
                    Mohammad Amoush
                </Link>
            </div>

            <div className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                {navItems.map(item => (
                    <Link
                        key={item.id}
                        to={item.path}
                        className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                        title={item.label}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        {item.label}
                    </Link>
                ))}
            </div>

            <div className="nav-social">
                <a
                    className="social-link"
                    href="https://github.com/mamoush34"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                    aria-label="Visit GitHub profile"
                >
                    <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
                <a
                    className="social-link"
                    href="https://www.linkedin.com/in/mohammad-amoush/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn"
                    aria-label="Visit LinkedIn profile"
                >
                    <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </a>
            </div>

            <button
                className="mobile-menu-toggle"
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
            >
                <FontAwesomeIcon icon={faBars} />
            </button>
        </nav>
    );
});

export default TopBar;
