import React, { useState } from "react";

export default function WeddingGift() {

  const [copiedIndex, setCopiedIndex] = useState(null);

  const accounts = [
    {
      bank: "BCA",
      logo: "/images/bca.png",
      number: "12345678",
      name: "Sisca Kohl"
    },
    {
      bank: "Sinarmas",
      logo: "/images/sinarmas.png",
      number: "0982309823",
      name: "Tobias Justin"
    },
    {
      bank: "Mandiri",
      logo: "/images/mandiri.png",
      number: "99787238",
      name: "Papanya Sisca"
    },
    {
      bank: "BRI",
      logo: "/images/bri.png",
      number: "123456789123",
      name: "Van"
    }
  ];

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
        Doa restu Bapak/Ibu sekalian merupakan karunia yang sangat berarti bagi kami.
        Jika memberi merupakan ungkapan tanda kasih, Bapak/Ibu dapat memberi kado secara cashless.
      </p>

      <div className="gift-container">
        {accounts.map((acc, index) => (
          <div key={index} className="gift-card">

            <div className="gift-bank-logo">
              <img src={acc.logo} alt={acc.bank} />
            </div>

            <div className="gift-chip"></div>

            <div className="gift-number">{acc.number}</div>
            <div className="gift-name">{acc.name}</div>

            <button
              className="gift-copy-btn"
              onClick={() => handleCopy(acc.number, index)}
            >
              {copiedIndex === index ? "✓ Copied" : "Copy"}
            </button>

          </div>
        ))}
      </div>
    </section>
  );
}
