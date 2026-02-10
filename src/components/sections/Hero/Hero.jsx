import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import styles from './Hero.module.css';
import Badge from '../../common/Badge/Badge';
import Button from '../../common/Button/Button';
import heroBack from '../../../assets/Hero/Hero-Back.png';

const Hero = () => {
    return (
        <section className={styles.heroSection}>
            {/* Background Layer */}
            <div className={styles.backgroundLayer}>
                <motion.img
                    src={heroBack}
                    alt="Hero Background"
                    className={styles.bgImage}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 0.8, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                />
            </div>

            {/* Content Layer */}
            <div className={styles.contentLayer}>
                <Badge className={styles.heroBadge}>
                    Multiple Digital Solutions
                </Badge>

                <motion.h1
                    className={styles.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    NextGen: Custom&nbsp;Mobile App & Web&nbsp;Development Company Powered by Python, Django & ReactJS
                </motion.h1>

                <motion.p
                    className={styles.description}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Whether you’re a Startup crafting your first MVP or an enterprise digitizing operations, NextGen is your partner in scalable digital transformation. As a web development company and mobile development agency, we create customized human-centered apps and websites that deliver real value for your business.
                </motion.p>

                <motion.div
                    className={styles.btnGroup}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <Button>See How We Work</Button>
                    <Button icon={Phone} variant="secondary">Contact Now: (469) 202-0555</Button>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
