import { useState } from "react";
import styles from "./Navbar.module.css";

const navigation = [
  { label: "Home", href: "/", active: true },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "Mobile App Development", href: "/services/mobile-apps" },
      { label: "UI/UX Design", href: "/services/ui-ux" },
      { label: "Software Development", href: "/services/software" },
      { label: "Digital Marketing", href: "/services/digital-marketing" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    dropdown: [
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Education", href: "/industries/education" },
      { label: "E-commerce", href: "/industries/ecommerce" },
      { label: "Finance", href: "/industries/finance" },
    ],
  },
  {
    label: "Technologies",
    href: "/technologies",
    dropdown: [
      { label: "React & Next.js", href: "/technologies/react" },
      { label: "Node.js", href: "/technologies/nodejs" },
      { label: "Cloud & DevOps", href: "/technologies/cloud" },
      { label: "AI & Machine Learning", href: "/technologies/ai" },
    ],
  },
  {
    label: "Products",
    href: "/products",
    dropdown: [
      { label: "Our Products", href: "/products" },
      { label: "Custom Solutions", href: "/products/custom-solutions" },
    ],
  },
  { label: "Blog", href: "/blog" },
  {
    label: "Life at Quasarix",
    href: "/life-at-quasarix",
    dropdown: [
      { label: "Our Culture", href: "/life-at-quasarix/culture" },
      { label: "Careers", href: "/careers" },
      { label: "Life at Quasarix", href: "/life-at-quasarix" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  function toggleDropdown(label) {
    setOpenDropdown((current) => (current === label ? null : label));
  }

  function closeMenu() {
    setMenuOpen(false);
    setOpenDropdown(null);
  }

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        {/* Text logo replaces the image */}
        <a
          href="/"
          className={styles.logoSpace}
          aria-label="Quasarix home"
        >
          QUASARIX
        </a>

        <div className={styles.contactInfo}>
          <a className={styles.contactItem} href="tel:+914713580165">
            <span className={styles.contactIcon} aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.56 3.58.56a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.19 2.46.56 3.58a1 1 0 01-.25 1.02l-2.19 2.19z" />
              </svg>
            </span>

            <span className={styles.contactText}>
              <span>Phone Number</span>
              <strong>+91 4713580165</strong>
            </span>
          </a>

          <a
            className={styles.contactItem}
            href="mailto:info@quasarix.in"
          >
            <span className={styles.contactIcon} aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5z" />
              </svg>
            </span>

            <span className={styles.contactText}>
              <span>Email Address</span>
              <strong>info@quasarix.in</strong>
            </span>
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <nav className={styles.navbar} aria-label="Main navigation">
        <div className={styles.mobileBar}>
          <a
            href="/"
            className={styles.mobileTitle}
            aria-label="Quasarix home"
          >
            QUASARIX
          </a>

          <button
            type="button"
            className={styles.menuToggle}
            onClick={() => {
              setMenuOpen((open) => !open);
              setOpenDropdown(null);
            }}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
          >
            <span className={menuOpen ? styles.barOpen1 : ""} />
            <span className={menuOpen ? styles.barOpen2 : ""} />
            <span className={menuOpen ? styles.barOpen3 : ""} />
          </button>
        </div>

        <ul
          id="main-navigation"
          className={`${styles.navList} ${
            menuOpen ? styles.navListOpen : ""
          }`}
        >
          {navigation.map((item) => (
            <li
              key={item.label}
              className={`${styles.navItem} ${
                item.active ? styles.active : ""
              } ${
                openDropdown === item.label ? styles.dropdownOpen : ""
              }`}
            >
              <div className={styles.navItemRow}>
                <a
                  href={item.href}
                  className={styles.navLink}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>

                {item.dropdown && (
                  <button
                    type="button"
                    className={styles.dropdownToggle}
                    aria-label={`${item.label} submenu`}
                    aria-expanded={openDropdown === item.label}
                    onClick={() => toggleDropdown(item.label)}
                  >
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="m3 6 5 5 5-5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                )}
              </div>

              {item.dropdown && (
                <ul className={styles.dropdown}>
                  {item.dropdown.map((subItem) => (
                    <li key={subItem.label}>
                      <a href={subItem.href} onClick={closeMenu}>
                        <span className={styles.dropdownDot} />
                        {subItem.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}

          {/* Contact details at the bottom of the mobile menu */}
          <li className={styles.mobileContact}>
            <div className={styles.mobileContactHeading}>
              Get in touch
            </div>

            <a
              href="tel:+914713580165"
              className={styles.mobileContactLink}
            >
              <span className={styles.mobileContactIcon} aria-hidden="true">
                ☎
              </span>
              <span>
                <small>Phone Number</small>
                <strong>+91 4713580165</strong>
              </span>
            </a>

            <a
              href="mailto:info@quasarix.in"
              className={styles.mobileContactLink}
            >
              <span className={styles.mobileContactIcon} aria-hidden="true">
                ✉
              </span>
              <span>
                <small>Email Address</small>
                <strong>info@quasarix.in</strong>
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}