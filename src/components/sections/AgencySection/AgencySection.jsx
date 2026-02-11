import React from 'react';
import { motion } from 'framer-motion';
import Badge from '../../common/Badge/Badge';
import styles from './AgencySection.module.css';

const AgencySection = () => {
    const services = [
        {
            title: "Mockups and UX Design",
            description: "Before we begin development, we create project low definition mockups first and then high definition UX and it is at this point our clients begin to observe something visual.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                    <path d="M7 10H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M7 14H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            )
        },
        {
            title: "Mobile / Web Applications",
            description: "We determine the optimal strategy for your mobile concept after understanding your idea, feature requirements and then suggest an ideal solution for your business, including a Hybrid app, Web app, Native app.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="5" y="2" width="14" height="20" rx="3" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 18H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            )
        },
        {
            title: "Catering To Your Diverse Needs",
            description: "Our programmers are ready to design a customized mobile / web application for your specific business, owing to their extensive programming experience. Python, Django, ReactJs – you name it, we will develop.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 7L12 3L4 7M20 7L12 11M20 7V17L12 21M12 11L4 7M12 11V21M4 7V17L12 21" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                </svg>
            )
        }
    ];

    return (
        <section className={styles.agencySection}>
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className={styles.content}
                >
                    <div className={styles.badgeWrapper}>
                        <Badge>App Development Services</Badge>
                    </div>
                    <h2 className={styles.refinedTitle}>
                        NextGen, Web & Mobile Development Agency
                    </h2>

                    <div className={styles.cardsGrid}>
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={styles.card}
                            >
                                <div className={styles.iconWrapper}>{service.icon}</div>
                                <h3 className={styles.cardTitle}>{service.title}</h3>
                                <p className={styles.cardDescription}>{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AgencySection;
