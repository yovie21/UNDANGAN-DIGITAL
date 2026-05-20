import React, { useState, useEffect } from "react";

import couplePhoto1 from "../assets/images/1.jpg";
import couplePhoto2 from "../assets/images/2.jpg";
import couplePhoto3 from "../assets/images/3.jpg";
import couplePhoto4 from "../assets/images/4.jpg";
<link
  href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Jost:wght@300;400;500;600&display=swap"
  rel="stylesheet"
/>;
/* =========================================================
   SCROLL REVEAL
========================================================= */

function useScrollReveal(selector = "[data-reveal]", threshold = 0.15) {
  useEffect(() => {
    const els = document.querySelectorAll(selector);

    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
          } else {
            e.target.classList.remove("in-view");
          }
        });
      },
      { threshold },
    );

    els.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, [selector, threshold]);
}

/* =========================================================
   BOTANICAL CORNER
========================================================= */

const BotanicalCorner = () => (
  <svg viewBox="0 0 150 150" fill="none">
    <path
      d="M135 8 Q110 45 75 65 Q48 80 8 75"
      stroke="#3d6450"
      strokeWidth="1.2"
      fill="none"
    />

    <ellipse
      cx="80"
      cy="50"
      rx="10"
      ry="5"
      fill="#4a7a5e"
      opacity="0.5"
      transform="rotate(-35 80 50)"
    />
  </svg>
);

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function OurWedding() {
  useScrollReveal();

  const photos = [couplePhoto1, couplePhoto2, couplePhoto3, couplePhoto4];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % photos.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [photos.length]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % photos.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <section id="our-wedding" className="our-wedding-section">
      {/* botanical */}
      <div className="botanical-corner botanical-corner--tr">
        <BotanicalCorner />
      </div>

      <div className="botanical-corner botanical-corner--bl">
        <BotanicalCorner />
      </div>

      <div className="our-wedding-content">
        {/* tag */}
        <p className="section-tag reveal reveal-delay-1" data-reveal>
          Wedding Celebration
        </p>

        {/* ornament */}
        <div className="header-ornament reveal reveal-delay-2" data-reveal>
          <span className="orn-line" />
          <span className="orn-diamond" />
          <span className="orn-line orn-line--reverse" />
        </div>

        {/* title */}
        <h2 className="section-title reveal reveal-delay-3" data-reveal>
          Our Wedding
        </h2>

        {/* subtitle */}
        <p className="section-subtitle reveal reveal-delay-4" data-reveal>
          Dengan memohon rahmat dan ridho Allah SWT,
          <br />
          kami bermaksud menyelenggarakan
          <br />
          acara pernikahan kami.
        </p>

        {/* intro card */}
        <div className="wedding-intro-card reveal reveal-delay-5" data-reveal>
          <p className="intro-text">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
            Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada
            kedua mempelai.
          </p>

          {/* carousel */}
          <div className="wedding-carousel">
            <div className="carousel-container">
              <div className="carousel-wrapper">
                {photos.map((photo, index) => (
                  <div
                    key={index}
                    className={`carousel-slide ${
                      index === currentSlide ? "active" : ""
                    }`}>
                    <img src={photo} alt={`Wedding ${index + 1}`} />
                  </div>
                ))}
              </div>

              {/* buttons */}
              <button className="carousel-btn prev-btn" onClick={handlePrev}>
                ❮
              </button>

              <button className="carousel-btn next-btn" onClick={handleNext}>
                ❯
              </button>
            </div>

            {/* dots */}
            <div className="carousel-dots">
              {photos.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentSlide ? "active" : ""}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>

            {/* counter */}
            <div className="carousel-counter">
              {currentSlide + 1} / {photos.length}
            </div>
          </div>

          {/* closing */}
          <p className="closing-text">
            Atas kehadiran dan doa restunya,
            <br />
            kami ucapkan terima kasih.
          </p>
        </div>

        {/* dot row */}
        <div className="dot-row reveal reveal-delay-4" data-reveal>
          <span />
          <span />
          <span />
        </div>
      </div>
    </section>
  );
}
