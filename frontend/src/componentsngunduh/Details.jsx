import React, { useEffect } from "react";

import { Clock, MapPin, Map, HeartHandshake, PartyPopper } from "lucide-react";

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
   COMPONENT
========================================================= */

export default function Details() {
  useScrollReveal();

  const events = [
    {
      title: "Akad Nikah",

      icon: <HeartHandshake size={32} />,

      date: "Minggu, 14 Juni 2026",

      time: "07:00 - 08:00 WIB",

      loc: "Dusun Banjari RT 22 RW 08, Desa Cukil, Kec. Tengaran, Kab. Semarang",

      desc: "Mengikat janji suci dalam ikatan mitsaqan ghalizha.",

      gmaps: "https://maps.app.goo.gl/5ceCdM9R5fey9ff96",
    },

    {
      title: "Ngunduh Mantu",

      icon: <PartyPopper size={32} />,

      date: "Minggu, 21 Juni 2026",

      time: "09:00 - 11:30 WIB",

      loc: "Jl. Diponegoro No.168 B, Kertonatan, Kec. Kartasura, Kabupaten Sukoharjo, Jawa Tengah 57166 (Gedung Olahraga Kertonatan)",

      desc: "Berbagi kebahagiaan dan doa restu bersama orang terkasih.",

      gmaps: "https://maps.app.goo.gl/NGH1yjjFdPYjxgbm7",
    },
  ];

  return (
    <section id="details" className="section details-section">
      {/* BOTANICAL */}

      <div className="botanical-corner botanical-corner--tr">
        <BotanicalCorner />
      </div>

      <div className="botanical-corner botanical-corner--bl">
        <BotanicalCorner />
      </div>

      {/* HEADER */}

      <div className="section-header reveal reveal-delay-1" data-reveal>
        <p className="section-tag">Wedding Event</p>

        {/* ornament */}

        <div className="header-ornament">
          <span className="orn-line" />

          <span className="orn-diamond" />

          <span className="orn-line orn-line--reverse" />
        </div>

        <h2 className="font-aesthetic">Save The Date</h2>

        <p className="subtitle">
          Kami menantikan kehadiran Anda
          <br />
          di hari bahagia kami
        </p>
      </div>

      {/* GRID */}

      <div className="container details-grid">
        {events.map((event, index) => (
          <div
            key={index}
            className={`
              luxury-card
              reveal
              ${index % 2 === 0 ? "reveal-left" : "reveal-right"}
            `}
            data-reveal>
            {/* top light */}

            <div className="card-top-accent"></div>

            {/* icon */}

            <div className="icon-circle">{event.icon}</div>

            {/* title */}

            <h3>{event.title}</h3>

            {/* desc */}

            <p className="event-desc-text">{event.desc}</p>

            {/* divider */}

            <div className="divider"></div>

            {/* time */}

            <div className="info-row">
              <Clock size={18} className="info-icon" />

              <div>
                <p className="info-label">Waktu</p>

                <p className="info-value">{event.date}</p>

                <p className="info-value text-pink">{event.time}</p>
              </div>
            </div>

            {/* location */}

            <div className="info-row">
              <MapPin size={18} className="info-icon" />

              <div>
                <p className="info-label">Lokasi</p>

                <p className="info-value">{event.loc}</p>
              </div>
            </div>

            {/* button */}

            <a
              href={event.gmaps}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-open-map">
              <Map size={18} />
              Lihat Lokasi
            </a>
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
