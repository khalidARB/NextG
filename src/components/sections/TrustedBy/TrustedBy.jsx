import React from 'react';
import { motion } from 'framer-motion';
import styles from './TrustedBy.module.css';

// Import logos
import airbnb from '../../../assets/NextGenCompanies/Airbnb.png';
import discover from '../../../assets/NextGenCompanies/Discover.png';
import framer from '../../../assets/NextGenCompanies/Framer.png';
import mailchimp from '../../../assets/NextGenCompanies/Mailchimp.png';
import netflix from '../../../assets/NextGenCompanies/Netflix.png';
import stripe from '../../../assets/NextGenCompanies/Stripe.png';
import tesla from '../../../assets/NextGenCompanies/Tesla.png';
import uber from '../../../assets/NextGenCompanies/Uber.png';

const logos = [
    { src: airbnb, alt: 'Airbnb' },
    { src: discover, alt: 'Discover' },
    { src: framer, alt: 'Framer' },
    { src: mailchimp, alt: 'Mailchimp' },
    { src: netflix, alt: 'Netflix' },
    { src: stripe, alt: 'Stripe' },
    { src: tesla, alt: 'Tesla' },
    { src: uber, alt: 'Uber' },
];

// Duplicate logos for seamless loop - using 4 sets to ensure no empty space on wide screens
const extendedLogos = [...logos, ...logos, ...logos, ...logos];

const TrustedBy = () => {
    return (
        <section className={styles.trustedSection}>
            <h2 className={styles.title}>Join the 200+ companies trusting NextGen</h2>

            <div className={styles.carouselContainer}>
                <motion.div
                    className={styles.carouselTrack}
                    animate={{
                        x: ["0%", "-25%"],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30, // Smoother speed for 4 sets
                            ease: "linear",
                        },
                    }}
                >
                    {extendedLogos.map((logo, index) => (
                        <div key={`${logo.alt}-${index}`} className={styles.logoWrapper}>
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                className={styles.logoImage}
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TrustedBy;
