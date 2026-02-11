import React, { useEffect } from 'react';
import Navbar from './components/layout/Navbar/Navbar';
import styles from './App.module.css';

import Hero from './components/sections/Hero/Hero';
import TrustedBy from './components/sections/TrustedBy/TrustedBy';
import AgencySection from './components/sections/AgencySection/AgencySection';

function App() {
  useEffect(() => {
    // Force dark theme as requested
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  return (
    <div className={styles.appContainer}>
      <Navbar />
      <main className={styles.mainContent}>
        <Hero />
        <TrustedBy />
        <AgencySection />
        {/* Further sections will be added here */}
      </main>
    </div>
  );
}

export default App;
