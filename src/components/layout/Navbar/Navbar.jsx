import React from 'react';
import { motion } from 'framer-motion';
import { SunOneIcon, MoonIcon } from '../../common/Icons/Icons';
import Logo from '../../common/Logo/Logo';
import Button from '../../common/Button/Button';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [theme, setTheme] = React.useState('dark');

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
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.logoWrapper}>
                    <Logo />
                </div>

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
                    <button className={styles.themeToggle} onClick={toggleTheme}>
                        {theme === 'dark' ? (
                            <SunOneIcon size={16} />
                        ) : (
                            <MoonIcon size={16} />
                        )}
                    </button>

                    <Button>Contact Us</Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
