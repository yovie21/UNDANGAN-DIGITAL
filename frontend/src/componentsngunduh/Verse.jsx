import React, { useEffect, useRef } from "react";

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

export default function Verse() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // Elemen yang perlu animasi ulang
    const animatedEls = el.querySelectorAll(
      ".verse-card, .verse-arabic, .verse-translation, .verse-divider",
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reset lalu tambah class agar animasi berjalan ulang
            animatedEls.forEach((el) => {
              el.classList.remove("is-animated");
              void el.offsetWidth; // force reflow
              el.classList.add("is-animated");
            });
          } else {
            // Hapus class saat keluar viewport agar bisa diulang
            animatedEls.forEach((el) => {
              el.classList.remove("is-animated");
            });
          }
        });
      },
      { threshold: 0.2 }, // trigger saat 20% section terlihat
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <section className="verse-section" ref={sectionRef}>
      {/* botanical */}
      <div className="botanical-corner botanical-corner--tr">
        <BotanicalCorner />
      </div>

      <div className="botanical-corner botanical-corner--bl">
        <BotanicalCorner />
      </div>

      <div className="verse-content">
        {/* tag */}
        <p className="section-tag">Holy Verse</p>

        {/* ornament */}
        <div className="header-ornament">
          <span className="orn-line" />
          <span className="orn-diamond" />
          <span className="orn-line orn-line--reverse" />
        </div>

        {/* title */}
        <h2 className="section-title">Ar-Rum 21</h2>

        {/* card */}
        <div className="verse-card">
          <p className="verse-arabic">
            وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا
            لِّتَسْكُنُوْٓا اِلَيْهَا
            <br />
            وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةً ۗ اِنَّ فِيْ ذٰلِكَ
            لَاٰيٰتٍ لِّقَوْمٍ يَتَفَكَّرُوْنَ
          </p>

          <div className="verse-divider" />

          <p className="verse-translation">
            "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan
            untukmu pasangan hidup dari jenismu sendiri supaya kamu merasa
            tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan
            sayang."
          </p>

          <p className="verse-reference">QS. Ar-Rum : 21</p>
        </div>

        {/* dot */}
        <div className="dot-row">
          <span />
          <span />
          <span />
        </div>
      </div>
    </section>
  );
}
