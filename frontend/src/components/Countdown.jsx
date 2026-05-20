import React, { useState, useEffect } from "react";

/* =========================================================
   BOTANICAL
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
   COMPONENT
========================================================= */

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),

          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),

          minutes: Math.floor((difference / 1000 / 60) % 60),

          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    };

    calculateTimeLeft();

    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num) => num.toString().padStart(2, "0");

  return (
    <section className="countdown-section">
      {/* botanical */}

      <div className="botanical-corner botanical-corner--tr">
        <BotanicalCorner />
      </div>

      <div className="botanical-corner botanical-corner--bl">
        <BotanicalCorner />
      </div>

      {/* CONTAINER */}

      <div className="countdown-container">
        {/* ornament */}

        <div className="header-ornament">
          <span className="orn-line" />

          <span className="orn-diamond" />

          <span className="orn-line orn-line--reverse" />
        </div>

        {/* title */}

        <p className="countdown-tag">Wedding Countdown</p>

        <h2 className="countdown-title">Menuju Hari Bahagia</h2>

        <p className="countdown-subtitle">Minggu, 14 Juni 2026</p>

        {/* TIMER */}

        <div className="countdown-timer">
          <div className="countdown-box">
            <div className="countdown-glow"></div>

            <span className="countdown-number">
              {formatNumber(timeLeft.days)}
            </span>

            <span className="countdown-label">Hari</span>
          </div>

          <div className="countdown-box">
            <div className="countdown-glow"></div>

            <span className="countdown-number">
              {formatNumber(timeLeft.hours)}
            </span>

            <span className="countdown-label">Jam</span>
          </div>

          <div className="countdown-box">
            <div className="countdown-glow"></div>

            <span className="countdown-number">
              {formatNumber(timeLeft.minutes)}
            </span>

            <span className="countdown-label">Menit</span>
          </div>

          <div className="countdown-box">
            <div className="countdown-glow"></div>

            <span className="countdown-number">
              {formatNumber(timeLeft.seconds)}
            </span>

            <span className="countdown-label">Detik</span>
          </div>
        </div>

        {/* bottom decoration */}

        <div className="countdown-bottom-dot">
          <span />

          <span />

          <span />
        </div>
      </div>
    </section>
  );
};

export default Countdown;
