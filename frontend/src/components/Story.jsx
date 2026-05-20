import React, { useEffect } from "react";

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
            /* RESET */
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

export default function Story() {
  useScrollReveal();

  const stories = [
    {
      title: "Pertama Bertemu",

      date: "SEPTEMBER 2023",

      desc: "Kami pertama kali dipertemukan di kampus, karena berada dalam satu mata kuliah yang sama. Dari pertemuan sederhana itu, perlahan tumbuh rasa nyaman dan cerita baru yang membawa kami semakin dekat.",
    },

    {
      title: "Menjalin Komitmen",

      date: "JANUARI 2024",

      desc: "Seiring berjalannya waktu, kami memutuskan untuk saling menjaga dan melangkah bersama. Dengan penuh keyakinan dan kasih sayang, kami mulai menjalin komitmen untuk menghadapi setiap perjalanan hidup berdua.",
    },

    {
      title: "Lamaran",

      date: "JANUARI 2026",

      desc: "Dengan restu dan doa dari kedua keluarga, kami melangkah ke tahap yang lebih serius dalam sebuah ikatan lamaran. Momen ini menjadi awal dari perjalanan baru kami menuju hari bahagia yang telah lama kami impikan.",
    },
  ];

  return (
    <section id="story" className="story-section">
      {/* BOTANICAL */}

      <div className="botanical-corner botanical-corner--tr">
        <BotanicalCorner />
      </div>

      <div className="botanical-corner botanical-corner--bl">
        <BotanicalCorner />
      </div>

      {/* HEADER */}

      <div className="story-header">
        <p className="section-tag reveal reveal-delay-1" data-reveal>
          Love Journey
        </p>

        {/* ornament */}

        <div className="header-ornament reveal reveal-delay-2" data-reveal>
          <span className="orn-line" />

          <span className="orn-diamond" />

          <span className="orn-line orn-line--reverse" />
        </div>

        <h2 className="story-title reveal reveal-delay-3" data-reveal>
          Sebuah Kisah
        </h2>

        <p className="story-subtitle reveal reveal-delay-4" data-reveal>
          Perjalanan singkat yang membawa kami
          <br />
          menuju hari bahagia
        </p>
      </div>

      {/* TIMELINE */}

      <div className="story-container">
        {stories.map((item, index) => (
          <div
            key={index}
            className={`
              story-card
              ${index % 2 === 0 ? "left reveal-left" : "right reveal-right"}
            `}
            data-reveal>
            {/* DOT */}

            <div className="story-dot">
              <span className="story-dot-inner" />
            </div>

            {/* CARD */}

            <div className="story-content">
              {/* top line */}

              <div className="story-top-line" />

              {/* date */}

              <span className="story-date">{item.date}</span>

              {/* title */}

              <h4>{item.title}</h4>

              {/* desc */}

              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* DOT ROW */}

      <div className="dot-row reveal reveal-delay-4" data-reveal>
        <span />

        <span />

        <span />
      </div>
    </section>
  );
}
