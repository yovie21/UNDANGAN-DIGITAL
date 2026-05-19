import React, { useEffect, useRef } from "react";

export default function Story() {
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

  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      },
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="story" className="story-section">
      <h2 className="story-title font-aesthetic">Sebuah Kisah</h2>

      <div className="story-container">
        {stories.map((item, index) => (
          <div
            className={`story-card ${index % 2 === 0 ? "left" : "right"}`}
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            style={{ transitionDelay: `${index * 0.2}s` }}>
            <div className="story-dot"></div>

            <div className="story-content">
              <h4>{item.title}</h4>
              <span className="story-date">{item.date}</span>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
