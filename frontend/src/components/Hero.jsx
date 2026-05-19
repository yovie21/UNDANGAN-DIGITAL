import React, { useEffect, useRef, useState } from "react";

export default function Hero({ onOpen, isOpened }) {
  const urlParams = new URLSearchParams(window.location.search);
  const guestName = urlParams.get("to") || "Nama Tamu";

  const audioRef = useRef(null);

  const [petals, setPetals] = useState([]);
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const genPetals = Array.from({ length: 12 }, () => ({
      left: `${Math.random() * 100}%`,
      duration: `${6 + Math.random() * 6}s`,
      delay: `${Math.random() * 5}s`,
    }));

    const genSparkles = Array.from({ length: 25 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
    }));

    setPetals(genPetals);
    setSparkles(genSparkles);
  }, []);

  const handleOpen = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
    onOpen();
  };

  return (
    <section className={`hero ${isOpened ? "hero-slide-up" : ""}`}>
      <audio ref={audioRef} src="/music.mp3" loop />

      {petals.map((p, i) => (
        <span
          key={i}
          className="petal"
          style={{
            left: p.left,
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        />
      ))}

      {sparkles.map((s, i) => (
        <span
          key={`spark-${i}`}
          className="sparkle"
          style={{
            top: s.top,
            left: s.left,
            animationDelay: s.delay,
          }}
        />
      ))}

      <div className="hero-content">
        <p className="happy-wedding">HAPPY WEDDING</p>
        <h1 className="wedding-of">Wedding Of</h1>

        <div className="hero-frame-container">
          <div className="hero-frame-circle">
            <img
              src="/src/assets/images/12.jpg"
              alt="Yovie & Ajeng"
              className="hero-img"
            />
          </div>
        </div>

        <h2 className="main-names">Yovie & Ajeng</h2>

        <p className="kepada-text">Kepada Bapak/Ibu/Saudara/i</p>
        <h3 className="guest-name-display">{guestName}</h3>
        <p className="short-invite">
          Kami Mengundang Anda untuk Hadir di Acara Kami.
        </p>

        {!isOpened && (
          <button className="btn-open-invitation" onClick={handleOpen}>
            Buka Undangan
          </button>
        )}
      </div>
    </section>
  );
}
