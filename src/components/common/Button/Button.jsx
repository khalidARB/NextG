import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import styles from './Button.module.css';

const Button = ({ children, icon: Icon = ArrowRight, onClick, className, variant = 'primary' }) => {
    return (
        <motion.button
            className={`${styles.gradientBtn} ${styles[variant]} ${className || ''}`}
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
