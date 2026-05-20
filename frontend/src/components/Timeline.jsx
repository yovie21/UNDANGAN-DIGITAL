import React, { useState, useEffect } from "react";

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

export default function Timeline() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  useScrollReveal();
  const events = [
    {
      time: "07:00 WIB",
      title: "Akad Nikah",
      description:
        "Prosesi akad nikah dilaksanakan dengan penuh khidmat, diawali pembacaan ayat suci Al-Qur’an, khutbah nikah, ijab kabul, serta doa bersama sebagai awal perjalanan baru kedua mempelai.",
      icon: "💍",
      color: "#ec4899",
    },
    {
      time: "08:00 WIB",
      title: "Kedatangan Tamu Undangan",
      description:
        "Para tamu undangan mulai hadir dan disambut hangat oleh keluarga serta alunan live music dan hidangan welcome drink yang telah disediakan.",
      icon: "👥",
      color: "#d4a373",
    },
    {
      time: "09:00 WIB",
      title: "Rangkaian Adat & Resepsi",
      description:
        "Acara dilanjutkan dengan prosesi adat, kirab pengantin, sambutan keluarga, hiburan, serta ramah tamah bersama seluruh tamu undangan dalam suasana penuh kebahagiaan.",
      icon: "🍽️",
      color: "#f472b6",
    },
    {
      time: "11:30 WIB",
      title: "Penutup Acara",
      description:
        "Sebagai penutup, kedua mempelai dan keluarga mengucapkan terima kasih atas doa, kehadiran, dan restu yang telah diberikan oleh seluruh tamu undangan.",
      icon: "🎉",
      color: "#a68d71",
    },
  ];

  return (
    <section className="timeline-section" data-aos="fade-up">
      <div className="timeline-wrapper">
        {/* Header */}
        <div className="timeline-header" data-aos="zoom-in">
          <h2 className="timeline-main-title">Susunan Acara</h2>
          <div className="timeline-subtitle-line"></div>
          <p className="timeline-subtitle">Rangkaian Acara Pernikahan Kami</p>
        </div>

        {/* Timeline Container */}
        <div className="timeline-container">
          <div className="timeline-vertical-line"></div>

          <div className="timeline-events">
            {events.map((event, index) => (
              <div
                key={index}
                className={`
timeline-item
${index % 2 === 0 ? "timeline-left reveal-left" : "timeline-right reveal-right"}
`}
                data-reveal
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={index * 150}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}>
                {/* Dot Indicator */}
                <div
                  className={`timeline-dot ${hoveredIndex === index ? "timeline-dot-active" : ""}`}
                  style={{
                    borderColor: event.color,
                    background: hoveredIndex === index ? event.color : "#fff",
                  }}>
                  <div
                    className="timeline-dot-pulse"
                    style={{ borderColor: event.color }}></div>
                </div>

                {/* Event Card */}
                <div
                  className={`timeline-card ${hoveredIndex === index ? "timeline-card-active" : ""}`}
                  style={{ borderTopColor: event.color }}>
                  {/* Icon Badge */}
                  <div
                    className="timeline-icon-badge"
                    style={{ background: event.color }}>
                    <span className="timeline-icon-emoji">{event.icon}</span>
                  </div>

                  {/* Time */}
                  <div
                    className="timeline-time-badge"
                    style={{ background: `${event.color}15` }}>
                    <svg
                      className="timeline-clock-icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={event.color}>
                      <circle cx="12" cy="12" r="10" strokeWidth="2" />
                      <path
                        d="M12 6v6l4 2"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span
                      className="timeline-time-text"
                      style={{ color: event.color }}>
                      {event.time}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="timeline-card-content">
                    <h3 className="timeline-event-title">{event.title}</h3>
                    <p className="timeline-event-description">
                      {event.description}
                    </p>
                  </div>

                  {/* Decorative Corner */}
                  <div
                    className="timeline-card-corner"
                    style={{ background: event.color }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Decoration */}
        <div className="timeline-bottom-decoration" data-aos="fade-up">
          <div className="timeline-heart">💝</div>
        </div>
      </div>
    </section>
  );
}
