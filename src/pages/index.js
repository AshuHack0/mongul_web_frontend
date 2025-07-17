import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/UnderConstruction.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function UnderConstruction() {
  return (
    <>
      <Head>
        <title>Mongul - Coming Soon</title>
        <meta name="description" content="Mongul is under construction. Something amazing is coming soon!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.logo}>
              <Image
                src="/logo.png"
                alt="Mongul Logo"
                width={200}
                height={40}
                priority
              />
            </div>
            
            <h1 className={styles.title}>We're Building Something Amazing</h1>
            <p className={styles.subtitle}>
              Mongul is under construction. We're working hard to bring you the best mentorship platform.
            </p>
            
            <div className={styles.comingSoon}>
              <span className={styles.comingSoonText}>Coming Soon</span>
            </div>
            
            <div className={styles.features}>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>🎯</div>
                <span>Personalized Matching</span>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>👥</div>
                <span>Expert Mentors</span>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>🚀</div>
                <span>Career Growth</span>
              </div>
            </div>
            
            <div className={styles.cta}>
              <a href="/landing" className={styles.ctaButton}>
                View Preview
              </a>
            </div>
            
            <div className={styles.socialLinks}>
              <a href="https://twitter.com/mongul" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://linkedin.com/company/mongul" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://instagram.com/mongul" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>
          
          <div className={styles.background}>
            <div className={styles.backgroundShape1}></div>
            <div className={styles.backgroundShape2}></div>
            <div className={styles.backgroundShape3}></div>
          </div>
        </div>
      </main>
    </>
  );
}
