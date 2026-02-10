import React from 'react';
import { motion } from 'framer-motion';
import { Sun } from 'lucide-react';
import Logo from '../../common/Logo/Logo';
import Button from '../../common/Button/Button';
import styles from './Navbar.module.css';

const Navbar = () => {
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
                    <button className={styles.themeToggle}>
                        <Sun size={16} color="#1e5cf5" />
                    </button>

                    <Button>Contact Us</Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
