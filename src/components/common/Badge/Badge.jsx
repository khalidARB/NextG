import React from 'react';
import { motion } from 'framer-motion';
import styles from './Badge.module.css';

const Badge = ({ children, className }) => {
    return (
        <motion.div
            className={`${styles.badge} ${className || ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            {children}
        </motion.div>
    );
};

export default Badge;
