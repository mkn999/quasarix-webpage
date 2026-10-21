// import HeroText from "./HeroText";
import styles from "./Hero.module.css";
import HeroText from "../HeroText/HeroText";
export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* <HeroText /> */}
        <HeroText />
      </div>
    </section>
  );
}