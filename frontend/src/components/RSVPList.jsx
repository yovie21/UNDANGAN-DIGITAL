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

export default function RSVPList({ data = [] }) {
  useScrollReveal();

  /* =========================================================
     STATUS
  ========================================================= */

  const getStatusLabel = (status) => {
    switch (status) {
      case "hadir":
        return {
          text: "Akan Hadir",
          className: "confirmed-item",
        };

      case "tidak":
        return {
          text: "Tidak Hadir",
          className: "absent-item",
        };

      case "belum":
        return {
          text: "Belum Konfirmasi",
          className: "uncertain-item",
        };

      default:
        return {
          text: "Tidak Diketahui",
          className: "",
        };
    }
  };

  return (
    <section className="rsvp-list-section">
      {/* BOTANICAL */}

      <div className="botanical-corner botanical-corner--tr">
        <BotanicalCorner />
      </div>

      <div className="botanical-corner botanical-corner--bl">
        <BotanicalCorner />
      </div>

      {/* HEADER */}

      <div className="section-header reveal reveal-delay-1" data-reveal>
        <p className="section-tag">Wishes & Prayer</p>

        {/* ornament */}

        <div className="header-ornament">
          <span className="orn-line" />

          <span className="orn-diamond" />

          <span className="orn-line orn-line--reverse" />
        </div>

        <h2 className="section-title">Ucapan & Doa</h2>

        <p className="section-subtitle">
          Kehadiran dan doa restu Anda
          <br />
          sangat berarti bagi kami
        </p>
      </div>

      {/* CONTAINER */}

      <div className="rsvp-list-container reveal-scale" data-reveal>
        <h3 className="list-title">💌 Daftar Ucapan</h3>

        {data.filter((item) => item.keterangan === "Resepsi").length > 0 ? (
          <div className="rsvp-guests-list">
            {data
              .filter((item) => item.keterangan === "Resepsi")
              .map((guest, index) => {
                const status = getStatusLabel(guest.kehadiran);

                return (
                  <div
                    key={index}
                    className={`
                    guest-item
                    ${status.className}
                  `}>
                    <div className="guest-info">
                      <h4 className="guest-name">{guest.nama}</h4>

                      <span className="guest-status">{status.text}</span>

                      {guest.pesan && (
                        <p className="guest-message">{guest.pesan}</p>
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
        ) : (
          <p className="no-data">Belum ada ucapan masuk</p>
        )}
      </div>

      {/* DOT */}

      <div className="dot-row reveal reveal-delay-4" data-reveal>
        <span />

        <span />

        <span />
      </div>
    </section>
  );
}
