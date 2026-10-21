import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import HeroText from "./components/HeroText/HeroText";
import Hero from "./components/HeroSection/Hero";
import Footer from "./components/Footer/Footer";
import { useState, useEffect } from "react";
// import "ldrs/ring";
// import { dotStream } from "ldrs";
import FeatureCards from "./components/FeatureCards/FeatureCards";
import "ldrs/dotStream";
export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loader on page load or refresh
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Show for 1 second

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loaderContainer">
        <l-dot-stream size="60" speed="2" color="#02b4ff"></l-dot-stream>
      </div>
    );
  }

  return (
    <main className="app">
      <Navbar />
      {/* <HeroText /> */}
      <Hero />
      <FeatureCards />
      <Footer />
    </main>
  );
}
