import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

// Dummy testimonial data
const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Product Designer',
    image: '/testimonials/sarah.svg',
    quote: 'Finding a mentor on Mongul changed my career trajectory. The personalized guidance helped me land my dream role.',
  },
  {
    name: 'James Rodriguez',
    role: 'Tech Entrepreneur',
    image: '/testimonials/james.svg',
    quote: 'The quality of mentors on Mongul is outstanding. My mentor helped me validate my startup idea and secure initial funding.',
  },
  {
    name: 'Priya Sharma',
    role: 'Software Engineer',
    image: '/testimonials/priya.svg',
    quote: 'Regular sessions with my mentor accelerated my learning. I got promoted within 6 months of starting the program.',
  },
];

// FAQ data
const faqs = [
  {
    question: 'How does the matching process work?',
    answer: 'We use a combination of AI and human curation to match you with mentors based on your goals, industry preferences, and experience level. You can also browse and select mentors manually.',
  },
  {
    question: 'What does mentorship cost?',
    answer: 'Mentorship sessions start at $50/hour. The exact rate depends on your mentor\'s experience level and industry. Some mentors also offer package deals for multiple sessions.',
  },
  {
    question: 'How long are the mentorship sessions?',
    answer: 'Sessions typically last 45-60 minutes. You can schedule sessions weekly, bi-weekly, or monthly based on your needs and mentor\'s availability.',
  },
  {
    question: 'Can I change my mentor?',
    answer: 'Yes, you can switch mentors at any time if you feel the match isn\'t right. We want to ensure you get the most value from your mentorship experience.',
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Mongul - Mentorship that gets you somewhere</title>
        <meta name="description" content="Connect with industry experts for personalized mentorship" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main} ${inter.className}`}>
        {/* Navigation */}
        <nav className={styles.nav}>
          <div className={styles.navContent}>
            <div className={styles.logo}>
              <Image
                src="/logo.png"
                alt="Mongul Logo"
                width={150}
                height={30}
                priority
              />
            </div>
            <div className={styles.navLinks}>
              <a href="#how-it-works">How It Works</a>
              <a href="#benefits">Benefits</a>
              <a href="#testimonials">Testimonials</a>
              <button className={styles.navCta}>Get Started</button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Mentorship that actually gets you somewhere.</h1>
            <p>Mongul connects ambitious learners with real-world mentors for meaningful growth.</p>
            <div className={styles.heroCta}>
              <button className={styles.ctaButton}>Find a Mentor</button>
              <div className={styles.appButtons}>
                <a href="#" className={styles.appButton}>
                  {/* <Image src="/app-store.svg" alt="Download on App Store" width={140} height={42} /> */}
                </a>
                <a href="#" className={styles.appButton}>
                  {/* <Image src="/play-store.svg" alt="Get it on Play Store" width={140} height={42} /> */}
                </a>
              </div>
            </div>
            <div className={styles.heroImage}>
              <Image
                src="/hero-app.png"
                alt="Mongul App Interface"
                width={300}
                height={600}
                className={styles.phoneImage}
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className={styles.section}>
          <h2>How It Works</h2>
          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3>Sign up</h3>
              <p>Create your profile and tell us about your goals</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3>Get matched</h3>
              <p>We'll connect you with the perfect mentor</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3>Start growing</h3>
              <p>Begin your journey of growth and learning</p>
            </div>
          </div>
        </section>

        {/* Why Mongul Section */}
        <section id="benefits" className={`${styles.section} ${styles.whyMongul}`}>
          <h2>Why Mongul</h2>
          <div className={styles.benefits}>
            <div className={styles.benefit}>
              <h3>Personalized Matching</h3>
              <p>AI-powered matching ensures you connect with the right mentor</p>
            </div>
            <div className={styles.benefit}>
              <h3>Industry Experts</h3>
              <p>Learn from professionals with proven track records</p>
            </div>
            <div className={styles.benefit}>
              <h3>Flexible Sessions</h3>
              <p>Schedule sessions that fit your calendar</p>
            </div>
          </div>
        </section>

        {/* Mobile App Section */}
        <section className={`${styles.section} ${styles.appSection}`}>
          <div className={styles.appContent}>
            <div className={styles.appText}>
              <h2>Take Your Mentorship Journey Mobile</h2>
              <p>Access your mentorship sessions, schedule meetings, and track your progress anywhere with our mobile app.</p>
              <div className={styles.appFeatures}>
                <div className={styles.feature}>
                  <span className={styles.featureIcon}>📱</span>
                  <p>Chat with your mentor anytime</p>
                </div>
                <div className={styles.feature}>
                  <span className={styles.featureIcon}>📅</span>
                  <p>Schedule sessions on the go</p>
                </div>
                <div className={styles.feature}>
                  <span className={styles.featureIcon}>📊</span>
                  <p>Track your progress</p>
                </div>
              </div>
              <div className={styles.appButtons}>
                <a href="#" className={styles.appButton}>
                  {/* <Image src="/app-store.svg" alt="Download on App Store" width={140} height={42} /> */}
                </a>
                <a href="#" className={styles.appButton}>
                  {/* <Image src="/play-store.svg" alt="Get it on Play Store" width={140} height={42} /> */}
                </a>
              </div>
            </div>
            <div className={styles.appImageContainer}>
              <Image
                src="/app-screens.png"
                alt="Mongul App Screenshots"
                width={400}
                height={600}
                className={styles.appImage}
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className={styles.section}>
          <h2>What Our Users Say</h2>
          <div className={styles.testimonials}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={styles.testimonial}>
                <img src={testimonial.image} alt={testimonial.name} className={styles.testimonialImage} />
                <p className={styles.quote}>{testimonial.quote}</p>
                <p className={styles.name}>{testimonial.name}</p>
                <p className={styles.role}>{testimonial.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Join Section */}
        <section className={`${styles.section} ${styles.join}`}>
          <h2>Choose Your Path</h2>
          <div className={styles.paths}>
            <div className={styles.pathCard}>
              <h3>Join as a Mentee</h3>
              <p>Get guidance from industry experts and accelerate your growth</p>
              <button className={styles.pathButton}>Find a Mentor</button>
            </div>
            <div className={styles.pathCard}>
              <h3>Join as a Mentor</h3>
              <p>Share your expertise and help others grow while earning</p>
              <button className={`${styles.pathButton} ${styles.secondary}`}>Become a Mentor</button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={`${styles.section} ${styles.faq}`}>
          <h2>Frequently Asked Questions</h2>
          <div className={styles.faqList}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <div className={styles.footerLogo}>
              <Image
                src="/logo.png"
                alt="Mongul Logo"
                width={100}
                height={32}
              />
            </div>
            <div className={styles.footerLinks}>
              <a href="/contact">Contact</a>
              <a href="/terms">Terms</a>
              <a href="/privacy">Privacy</a>
            </div>
            <div className={styles.socialLinks}>
              <a href="https://twitter.com/mongul" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://linkedin.com/company/mongul" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://instagram.com/mongul" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
            <div className={styles.appButtons}>
              <a href="#" className={styles.appButton}>
                <Image src="/app-store.svg" alt="Download on App Store" width={120} height={36} />
              </a>
              <a href="#" className={styles.appButton}>
                <Image src="/play-store.svg" alt="Get it on Play Store" width={120} height={36} />
              </a>
            </div>
            <p className={styles.copyright}>© 2024 Mongul. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  );
}
