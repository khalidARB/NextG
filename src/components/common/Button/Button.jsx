import React from 'react';
import { motion } from 'framer-motion';
import { ArrowCircleRightIcon } from '../Icons/Icons';
import styles from './Button.module.css';

const Button = ({ children, icon: Icon = ArrowCircleRightIcon, onClick, className, variant = 'primary', fullWidth = false }) => {
    return (
        <motion.button
            className={`${styles.gradientBtn} ${styles[variant]} ${fullWidth ? styles.fullWidth : ''} ${className || ''}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
        >
            <span className={styles.text}>{children}</span>
            <div className={styles.iconCircle}>
                <Icon size={16} />
            </div>
        </motion.button>
    );
};

export default Button;
