import React, { useState } from "react";

export default function WeddingGift() {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (number, index) => {
    navigator.clipboard.writeText(number);
    setCopiedIndex(index);

    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000);
  };

  return (
    <section className="gift-section section">
      <h2 className="gift-title font-aesthetic">Titip Hadiah</h2>

      <p className="gift-description">
        Doa restu Bapak/Ibu sekalian merupakan karunia yang sangat berarti bagi
        kami. Jika memberi merupakan ungkapan tanda kasih, Bapak/Ibu dapat
        memberi kado secara cashless.
      </p>

      <div className="gift-container">
        <div className="gift-card">
          <div className="gift-bank-logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Bank_Mandiri_logo_2016.svg"
              alt="Bank Mandiri"
            />
          </div>

          <div className="gift-chip"></div>

          <div className="gift-number">1380026159553</div>
          <div className="gift-name">YOVIE MUHAMMAD RIZKI</div>

          <button
            className="gift-copy-btn"
            onClick={() => handleCopy("1380026159553", 0)}>
            {copiedIndex === 0 ? "✓ Copied" : "Copy"}
          </button>
        </div>
      </div>
    </section>
  );
}
