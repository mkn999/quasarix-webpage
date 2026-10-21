
import { useEffect, useState } from "react";
import styles from "./FeatureCards.module.css";

const features = [
  {
    id: 1,
    title: "Automate KYB with trusted data",
    description:
      "Manual KYB checks slow down your process, but with automation and reliable data, you'll move faster and more securely.",
    icon: "network",
  },
  {
    id: 2,
    title: "One system = Reduced cost",
    description:
      "When your systems aren't connected, compliance risks can go unnoticed and your costs can skyrocket. Reduce your compliance cost with one connected system.",
    icon: "analytics",
  },
  {
    id: 3,
    title: "Cut false positives, clear backlogs",
    description:
      "False positives slow down and divert attention from real risks. Smart alerts help you reduce the backlog and focus on what requires immediate action.",
    icon: "alerts",
  },
  {
    id: 4,
    title: "Deep learning",
    description:
      "Deep Learning is a subfield of machine learning that involves artificial neural networks to model and solve complex tasks.",
    icon: "deep",
  },
  {
    id: 5,
    title: "Big data analytics",
    description:
      'Big Data Analytics examines and extracts valuable insights from large and complex datasets, commonly known as "big data."',
    icon: "data",
  },
  {
    id: 6,
    title: "Artificial Intelligence",
    description:
      "Artificial Intelligence (AI) refers to computer systems that perform tasks that typically require human intelligence.",
    icon: "ai",
  },
];

function Illustration({ type }) {
  const common = {
    className: styles.illustration,
    viewBox: "0 0 180 140",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
  };

  switch (type) {
    case "network":
      return (
        <svg {...common}>
          <g stroke="#7189a6" strokeWidth="1.5">
            <path d="M45 48 76 29 111 49 136 29 M45 48 53 83 88 98 111 49 M53 83 25 99 45 48 M53 83 89 60 136 85 111 49 M89 60 88 98 136 85" />
          </g>

          {[
            [45, 48],
            [76, 29],
            [111, 49],
            [136, 29],
            [53, 83],
            [88, 98],
            [25, 99],
            [89, 60],
            [136, 85],
          ].map(([cx, cy], i) => (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r="5"
              fill="#142638"
              stroke={i % 2 ? "#22d3ee" : "#a5b4fc"}
              strokeWidth="2.5"
            />
          ))}

          <g stroke="#60a5fa" strokeWidth="2" fill="#162637">
            <circle cx="76" cy="29" r="15" />
            <circle cx="76" cy="29" r="6" fill="#20d8c0" />
            <circle cx="119" cy="49" r="12" />
            <circle cx="119" cy="49" r="4" fill="#20d8c0" />
          </g>
        </svg>
      );

    case "analytics":
    case "data":
      return (
        <svg {...common}>
          <path
            d="M42 20 H96 L117 41 V112 H42 Z"
            fill="#142c41"
            stroke="#62a5ef"
            strokeWidth="2"
          />

          <path d="M96 20 V41 H117" stroke="#62a5ef" strokeWidth="2" />

          <g fill="#22c6d9">
            <rect x="54" y="65" width="10" height="27" rx="2" />
            <rect x="70" y="48" width="10" height="44" rx="2" />
            <rect x="86" y="57" width="10" height="35" rx="2" />
          </g>

          <circle
            cx="105"
            cy="79"
            r="21"
            fill="#182839"
            stroke="#b4d6f9"
            strokeWidth="4"
          />

          <path
            d="m120 95 15 20"
            stroke="#22d3ee"
            strokeWidth="7"
            strokeLinecap="round"
          />

          <rect
            x="27"
            y="98"
            width="37"
            height="27"
            rx="4"
            fill="#172637"
            stroke="#8bb6e7"
            strokeWidth="2"
          />

          <path
            d="M31 106 H59 M31 113 H54 M31 120 H57"
            stroke="#d4e5f7"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );

    case "alerts":
      return (
        <svg {...common}>
          <g stroke="#647a91" strokeDasharray="3 4" strokeWidth="1.5">
            <path d="M20 35 H42 M20 70 H42 M20 105 H42 M138 35 H160 M138 70 H160 M138 105 H160" />
          </g>

          {[24, 59, 94].map((y, i) => (
            <g key={i}>
              <rect
                x="42"
                y={y}
                width="96"
                height="27"
                rx="5"
                fill="#243444"
                stroke="#60758a"
              />

              <circle
                cx="54"
                cy={y + 13.5}
                r="6"
                fill="#0d1823"
                stroke="#9aabc0"
              />

              <circle cx="54" cy={y + 11} r="2" fill="#b6c7d9" />

              <path
                d={`M50 ${y + 18} Q54 ${y + 12} 58 ${y + 18}`}
                stroke="#b6c7d9"
              />

              <path
                d={`M67 ${y + 10} H122 M67 ${y + 17} H105`}
                stroke={i === 1 ? "#22d3c5" : "#94a5b8"}
                strokeWidth="2"
                strokeLinecap="round"
              />

              <circle cx="138" cy={y + 13.5} r="3" fill="#22d3c5" />
            </g>
          ))}
        </svg>
      );

    case "deep":
      return (
        <svg {...common}>
          <g stroke="#7189a6" strokeWidth="1.5">
            {[0, 1, 2].map((layer) =>
              Array.from({ length: 4 }, (_, i) => {
                const x = 35 + layer * 43;
                const y = 35 + i * 23;

                return (
                  <g key={`${layer}-${i}`}>
                    {layer < 2 &&
                      [0, 1, 2, 3].map((j) => (
                        <path
                          key={j}
                          d={`M${x + 7} ${y} L${x + 43} ${35 + j * 23}`}
                          opacity=".65"
                        />
                      ))}

                    <circle
                      cx={x}
                      cy={y}
                      r="6"
                      fill="#142638"
                      stroke={i % 2 ? "#22d3ee" : "#a5b4fc"}
                      strokeWidth="2"
                    />
                  </g>
                );
              })
            )}
          </g>

          <circle
            cx="78"
            cy="70"
            r="13"
            fill="#172d40"
            stroke="#22d3c5"
            strokeWidth="2"
          />

          <circle cx="78" cy="70" r="5" fill="#22d3c5" />
        </svg>
      );

    case "ai":
      return (
        <svg {...common}>
          <circle cx="90" cy="70" r="44" fill="#293c5d" />
          <circle cx="90" cy="70" r="35" fill="#6556b9" />

          <g stroke="#22d3ee" strokeWidth="3" strokeLinecap="round">
            <path d="M90 26 V15 M119 40 132 29 M134 70 H148 M118 100 129 111 M90 114 V125 M61 100 50 111 M46 70 H33 M62 40 50 29" />
          </g>

          <g fill="#a5b4fc">
            <circle cx="90" cy="15" r="4" />
            <circle cx="132" cy="29" r="4" />
            <circle cx="148" cy="70" r="4" />
            <circle cx="129" cy="111" r="4" />
            <circle cx="90" cy="125" r="4" />
            <circle cx="50" cy="111" r="4" />
            <circle cx="33" cy="70" r="4" />
            <circle cx="50" cy="29" r="4" />
          </g>

          <text
            x="90"
            y="81"
            textAnchor="middle"
            fontSize="31"
            fontWeight="700"
            fill="#65e4d3"
          >
            AI
          </text>
        </svg>
      );

    default:
      return null;
  }
}

export default function FeatureCards() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateScreenSize = () => {
      setVisibleCount(
        window.innerWidth <= 640
          ? 1
          : window.innerWidth <= 1024
            ? 2
            : 3
      );
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);

    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  const maxIndex = Math.max(0, features.length - visibleCount);

  // Automatically move to the next slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [maxIndex]);

  // Keep the selected slide valid after resizing
  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  return (
    <section className={styles.featuresSection}>
      <div className={styles.featuresCarousel}>
        <div className={styles.featuresViewport}>
          <div
            className={styles.featuresTrack}
            style={{
              transform: `translateX(calc(${currentIndex} * (-100% / ${visibleCount} - ${16 * (visibleCount - 1) / visibleCount}px)))`,
            }}
          >
            {features.map((feature) => (
              <article className={styles.featureCard} key={feature.id}>
                <div className={styles.featureVisual}>
                  <Illustration type={feature.icon} />
                </div>

                <div className={styles.featureContent}>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div
          className={styles.featuresPagination}
          role="group"
          aria-label="Choose slide"
        >
          {Array.from({ length: maxIndex + 1 }, (_, index) => (
            <button
              key={index}
              type="button"
              className={`${styles.paginationDot} ${
                currentIndex === index ? styles.active : ""
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={currentIndex === index ? "true" : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
