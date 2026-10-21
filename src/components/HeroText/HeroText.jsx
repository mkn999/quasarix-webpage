import { useEffect, useState } from "react";
import styles from "./HeroText.module.css";

const slides = [
  {
    label: "VR Project Management Software for Teams",
    title: "Measure Performance",
    subtitle:
      "We specialize in delivering next-generation digital solutions to help businesses thrive in an AI-driven world. From immersive virtual experiences to data-powered intelligence, we provide the tools you need to stay ahead.",
  },
  {
    label: "Next level automation system",
    title: "For Tech IT Solutions.",
    subtitle:
      "We specialize in delivering next-generation digital solutions to help businesses thrive in an AI-driven world. From immersive virtual experiences to data-powered intelligence, we provide the tools you need to stay ahead.",
  },
];

export default function HeroText() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
        setVisible(true);
      }, 800);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <section className={styles.heroText}>
      <div className={styles.mainmain}>
        <div
          className={`${styles.content} ${
            visible ? styles.fadeIn : styles.fadeOut
          }`}
        >
          <span className={styles.label}>{currentSlide.label}</span>

          <h1 className={styles.h1}>{currentSlide.title}</h1>

          <p className={styles.h2}>{currentSlide.subtitle}</p>

          <a href="#get-started" className={styles.cta}>
            Get Started Now
            <span aria-hidden="true">→</span>
          </a>
        </div>
        <img src="src\assets\stock.png" alt="robots" className={styles.imgg} />
      </div>
    </section>
  );
}
