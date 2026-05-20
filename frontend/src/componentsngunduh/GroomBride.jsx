import React, { useEffect } from "react";
import { Instagram } from "lucide-react";
import fotoPria from "../assets/images/Mas.jpeg";
import fotoWanita from "../assets/images/adek.jpeg";

/* ─────────────────────────────────────────────
   IntersectionObserver hook
   - Tambah "in-view" saat masuk viewport
   - Hapus "in-view" saat keluar viewport
     → animasi bisa berulang tiap kali scroll
───────────────────────────────────────────── */
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
            // reset saat keluar viewport → animasi ulang saat scroll balik
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

/* ─────────────────────────────────────────────
   Botanical corner ornament (inline SVG)
───────────────────────────────────────────── */
const BotanicalCorner = () => (
  <svg viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M135 8 Q110 45 75 65 Q48 80 8 75"
      stroke="#3d6450"
      strokeWidth="1.2"
      fill="none"
    />
    <path
      d="M148 22 Q122 52 88 68 Q64 80 24 86"
      stroke="#3d6450"
      strokeWidth="0.8"
      fill="none"
      opacity="0.6"
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
    <ellipse
      cx="104"
      cy="36"
      rx="8"
      ry="4"
      fill="#4a7a5e"
      opacity="0.4"
      transform="rotate(-50 104 36)"
    />
    <ellipse
      cx="59"
      cy="63"
      rx="9"
      ry="4"
      fill="#4a7a5e"
      opacity="0.4"
      transform="rotate(-20 59 63)"
    />
    <circle cx="78" cy="67" r="2.5" fill="#3d6450" opacity="0.4" />
    <circle cx="91" cy="71" r="2" fill="#3d6450" opacity="0.35" />
  </svg>
);

/* ─────────────────────────────────────────────
   Mempelai card
───────────────────────────────────────────── */
const MempelaiCard = ({
  foto,
  alt,
  nama,
  hubungan,
  ortu,
  instagramUrl,
  instagramHandle,
  revealClass = "reveal",
  revealDelay = "",
}) => (
  <div className={`mempelai-card ${revealClass} ${revealDelay}`} data-reveal>
    <div className="arch-frame">
      <img src={foto} alt={alt} loading="lazy" />
    </div>

    <h3 className="person-name">{nama}</h3>

    <p className="parents-label">{hubungan}</p>
    <p className="parents-name" dangerouslySetInnerHTML={{ __html: ortu }} />

    <a
      href={instagramUrl}
      target="_blank"
      rel="noreferrer"
      className="social-link">
      <Instagram size={13} />
      {instagramHandle}
    </a>
  </div>
);

/* ─────────────────────────────────────────────
   Main component
───────────────────────────────────────────── */
export default function GroomBride() {
  useScrollReveal("[data-reveal]", 0.15);

  return (
    <section id="mempelai" className="mempelai-section">
      <div className="botanical-corner botanical-corner--tr" aria-hidden="true">
        <BotanicalCorner />
      </div>
      <div className="botanical-corner botanical-corner--bl" aria-hidden="true">
        <BotanicalCorner />
      </div>

      <div className="mempelai-content">
        <p className="section-tag reveal reveal-delay-1" data-reveal>
          Wedding Invitation
        </p>

        <div
          className="header-ornament reveal reveal-delay-2"
          data-reveal
          aria-hidden="true">
          <span className="orn-line" />
          <span className="orn-diamond" />
          <span className="orn-line orn-line--reverse" />
        </div>

        <h2 className="section-title reveal reveal-delay-3" data-reveal>
          The Bride &amp; Groom
        </h2>

        <p className="section-subtitle reveal reveal-delay-4" data-reveal>
          Maha suci Allah yang telah menciptakan
          <br />
          mahluk-Nya berpasang-pasangan.
        </p>

        <div className="mempelai-grid">
          <MempelaiCard
            foto={fotoWanita}
            alt="Ajeng Ayu Arumsari"
            nama="Ajeng Ayu Arumsari"
            hubungan="Putri dari"
            ortu="<strong>Bapak Sahal Arifin</strong><br />&amp; <strong>Almh. Ibu Istiklaliyah</strong>"
            instagramUrl="https://www.instagram.com/ajengayuas"
            instagramHandle="@ajengayuas"
            revealClass="reveal-left"
          />

          <div
            className="mempelai-divider reveal-scale"
            data-reveal
            aria-hidden="true">
            <span>&amp;</span>
          </div>

          <MempelaiCard
            foto={fotoPria}
            alt="Yovie Muhammad Rizki"
            nama="Yovie Muhammad Rizki"
            hubungan="Putra dari"
            ortu="<strong>Bapak Joko Sulastyo</strong><br />&amp; <strong>Sri Daryanti</strong>"
            instagramUrl="https://www.instagram.com/yoviemuhammad_rizki"
            instagramHandle="@yoviemuhammad_rizki"
            revealClass="reveal-right"
          />
        </div>

        <div
          className="dot-row reveal reveal-delay-3"
          data-reveal
          aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>
    </section>
  );
}
