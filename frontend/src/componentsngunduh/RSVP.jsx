import React, { useState, useEffect } from "react";

import { createRsvp } from "../services/api";

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

/* =========================================================
   COMPONENT
========================================================= */

export default function RSVP({ onSubmit }) {
  useScrollReveal();

  const [formData, setFormData] = useState({
    nama: "",
    kehadiran: "",
    pesan: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  /* =========================================================
     HANDLE CHANGE
  ========================================================= */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (error) setError("");
  };

  /* =========================================================
     HANDLE SUBMIT
  ========================================================= */

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (!formData.nama.trim()) {
      setError("Mohon isi nama Anda!");
      return;
    }

    if (!formData.kehadiran) {
      setError("Mohon pilih status kehadiran!");
      return;
    }

    setLoading(true);

    try {
      const dataToSend = {
        nama: formData.nama.trim(),
        kehadiran: formData.kehadiran,
        pesan: formData.pesan.trim(),
        keterangan: "Ngunduh",
      };

      await createRsvp(dataToSend);

      if (onSubmit) {
        onSubmit(dataToSend);
      }

      setFormData({
        nama: "",
        kehadiran: "",
        pesan: "",
      });

      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (err) {
      console.error(err);

      setError("Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="rsvp-section" id="rsvp">
      {/* BOTANICAL */}

      <div className="botanical-corner botanical-corner--tr">
        <BotanicalCorner />
      </div>

      <div className="botanical-corner botanical-corner--bl">
        <BotanicalCorner />
      </div>

      {/* HEADER */}

      <div className="section-header reveal reveal-delay-1" data-reveal>
        <p className="section-tag">Confirmation</p>

        {/* ornament */}

        <div className="header-ornament">
          <span className="orn-line" />

          <span className="orn-diamond" />

          <span className="orn-line orn-line--reverse" />
        </div>

        <h2 className="section-title">RSVP</h2>

        <p className="section-subtitle">
          Konfirmasi kehadiran Anda
          <br />
          untuk hari bahagia kami
        </p>
      </div>

      {/* CONTAINER */}

      <div className="rsvp-container reveal-scale" data-reveal>
        {/* SUCCESS */}

        {submitted && (
          <div className="success-message">
            ✓ Terima kasih! Konfirmasi Anda telah tersimpan.
          </div>
        )}

        {/* ERROR */}

        {error && <div className="error-message">✗ {error}</div>}

        {/* FORM */}

        <form onSubmit={handleSubmit} className="rsvp-form">
          {/* NAME */}

          <div className="form-group">
            <label htmlFor="nama">Nama Lengkap</label>

            <input
              type="text"
              id="nama"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              placeholder="Masukkan nama Anda"
              disabled={loading}
            />
          </div>

          {/* STATUS */}

          <div className="form-group">
            <label htmlFor="kehadiran">Kehadiran</label>

            <select
              id="kehadiran"
              name="kehadiran"
              value={formData.kehadiran}
              onChange={handleChange}
              disabled={loading}>
              <option value="">Pilih Status</option>

              <option value="hadir">✓ Akan Hadir</option>

              <option value="tidak">✗ Tidak Hadir</option>

              <option value="belum">? Belum Tahu</option>
            </select>
          </div>

          {/* MESSAGE */}

          <div className="form-group">
            <label htmlFor="pesan">Pesan & Ucapan</label>

            <textarea
              id="pesan"
              name="pesan"
              rows="4"
              value={formData.pesan}
              onChange={handleChange}
              placeholder="Tuliskan doa dan ucapan..."
              disabled={loading}
            />
          </div>

          {/* BUTTON */}

          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? "⏳ Menyimpan..." : "✓ Kirim Konfirmasi"}
          </button>
        </form>
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
