import React from "react";

export default function Verse() {
  return (
    <section className="vs-wrap">
      {/* Background layers */}
      <div className="vs-bg-noise" />
      <div className="vs-bg-grid" />
      <div className="vs-bg-radial" />

      {/* Card */}
      <div className="vs-card">
        <div className="vs-corner tl" />
        <div className="vs-corner tr" />
        <div className="vs-corner bl" />
        <div className="vs-corner br" />

        <div className="vs-ornament">
          <div className="vs-ornament-line" />
          <div className="vs-ornament-diamond" />
          <div className="vs-ornament-line" />
        </div>

        <p className="vs-arabic">
          وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا
          لِّتَسْكُنُوْٓا اِلَيْهَا
          <br />
          وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةً ۗ اِنَّ فِيْ ذٰلِكَ
          لَاٰيٰتٍ لِّقَوْمٍ يَتَفَكَّرُوْنَ
        </p>

        <div className="vs-sep" />

        <p className="vs-trans">
          "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu
          isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa
          tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan
          sayang."
        </p>

        <p className="vs-ref">QS. Ar-Rum : 21</p>
      </div>
    </section>
  );
}
