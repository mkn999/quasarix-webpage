
import { useState } from "react";
import { ArrowUp, MapPin, Clock, Mail } from "lucide-react";
import styles from "./Footer.module.css";

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Life at Quasarix", href: "/life-at-quasarix" },
  { label: "Contact", href: "/contact" },
  { label: "Technologies", href: "/technologies" },
  { label: "Blog", href: "/blog" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

const services = [
  "Artificial Intelligence",
  "Machine Learning",
  "Deep Learning",
  "Big Data Analytics",
  "Cloud Solution",
  "Virtual Reality",
  "Neural Network & Neural Computing",
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    // Connect your newsletter API here.
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.main}>
        {/* Brand and contact */}
        <div className={styles.brand}>
          <a
            href="/"
            className={styles.logo}
            aria-label="Quasarix home"
          >
            <img
              src="/images/quasarix-logo.png"
              alt="Quasarix"
            />
          </a>

          <p className={styles.description}>
            Where brilliance meets innovation. We turn
            complex ideas into intelligent digital
            experiences.
          </p>

          <div className={styles.contact}>
            <div className={styles.contactItem}>
              <MapPin size={15} />
              <p>
                STPI Building, Technopark Phase I,
                Technopark, Technopark Campus 695581
              </p>
            </div>

            <div className={styles.contactItem}>
              <Clock size={15} />
              <p>
                <strong>Open:</strong> Monday to Friday
              </p>
            </div>
          </div>
        </div>

        {/* Quick links */}
        <div className={styles.column}>
          <h3>Quick Links</h3>
          <span className={styles.underline} />

          <ul className={styles.links}>
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className={styles.newsletter}>
          <h3>Subscribe Now</h3>
          <span className={styles.underline} />

          <p>
            Sign up to receive the latest articles and
            updates from Quasarix.
          </p>

          <form
            className={styles.newsletterForm}
            onSubmit={handleSubscribe}
          >
            <label
              htmlFor="qx-footer-email"
              className={styles.visuallyHidden}
            >
              Email address
            </label>

            <input
              id="qx-footer-email"
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button type="submit">Subscribe</button>
          </form>
        </div>

        {/* Services */}
        <div className={`${styles.column} ${styles.services}`}>
          <h3>Our Services</h3>
          <span className={styles.underline} />

          <ul className={styles.links}>
            {services.map((service) => (
              <li key={service}>
                <a
                  href={`/services/${service
                    .toLowerCase()
                    .replaceAll(" ", "-")
                    .replaceAll("&", "and")}`}
                >
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Compact bottom bar */}
      <div className={styles.bottom}>
        <div className={styles.legal}>
          <a href="/terms-and-conditions">
            Terms &amp; Conditions
          </a>

          <span className={styles.legalDivider} />

          <a href="/privacy-policy">Privacy Policy</a>
        </div>

        <p className={styles.copyright}>
          © {new Date().getFullYear()} Quasarix Private
          Limited. All Rights Reserved.
        </p>
      </div>

      <button
        type="button"
        className={styles.backToTop}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <ArrowUp size={21} />
      </button>
    </footer>
  );
}
