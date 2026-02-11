import React from 'react';
import { motion } from 'framer-motion';
import { SunOneIcon, MoonIcon } from '../../common/Icons/Icons';
import Logo from '../../common/Logo/Logo';
import Button from '../../common/Button/Button';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [theme, setTheme] = React.useState('dark');
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#' },
        { name: 'Services', href: '#' },
        { name: 'Portfolio', href: '#' },
        { name: 'Contract', href: '#' },
    ];

    return (
        <nav className={`${styles.navbar} ${isMenuOpen ? styles.menuOpen : ''}`}>
            <div className={styles.container}>
                <div className={styles.logoWrapper}>
                    <Logo />
                </div>

                {/* Desktop Nav Links */}
                <ul className={styles.navLinks}>
                    {navLinks.map((link) => (
                        <motion.li
                            key={link.name}
                            whileHover={{ y: -2 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <a href={link.href}>{link.name}</a>
                        </motion.li>
                    ))}
                </ul>

                <div className={styles.actions}>
                    <div className={styles.desktopActions}>
                        <button className={styles.themeToggle} onClick={toggleTheme}>
                            {theme === 'dark' ? (
                                <SunOneIcon size={16} />
                            ) : (
                                <MoonIcon size={16} />
                            )}
                        </button>

                        <Button>Contact Us</Button>
                    </div>

                    {/* Hamburger Menu Icon */}
                    <button
                        className={styles.menuToggle}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <div className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
                <ul className={styles.mobileNavLinks}>
                    {navLinks.map((link) => (
                        <motion.li
                            key={link.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <a href={link.href} onClick={() => setIsMenuOpen(false)}>
                                {link.name}
                            </a>
                        </motion.li>
                    ))}
                </ul>
                <div className={styles.mobileActions}>
                    <button className={styles.themeToggle} onClick={toggleTheme}>
                        {theme === 'dark' ? (
                            <SunOneIcon size={16} />
                        ) : (
                            <MoonIcon size={16} />
                        )}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
