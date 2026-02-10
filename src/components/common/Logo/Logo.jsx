import React from 'react';
import styles from './Logo.module.css';
import logoImg from '../../../assets/Logo-Dark.png';

const Logo = () => {
    return (
        <div className={styles.logoContainer}>
            <img src={logoImg} alt="NextGen Logo" className={styles.logoImage} />
        </div>
    );
};

export default Logo;
