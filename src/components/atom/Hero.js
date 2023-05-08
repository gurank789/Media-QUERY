import React from 'react';
import styles from './Hero.module.css';
import heroImage from './hero-image.jpg';
function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroImageContainer}>
        <img src={heroImage} alt="Hero" className={styles.heroImage} />
      </div>
      <div className={styles.heroContentContainer}>
        <div className={styles.heroContent}>
          <h1>Welcome to my website</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button>Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;