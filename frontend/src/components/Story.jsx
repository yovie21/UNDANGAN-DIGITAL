import React, { useEffect, useRef } from "react";

export default function Story() {
    const stories = [
        {
            title: "Pertama Bertemu",
            date: "Januari 2022",
            desc: "Tuhan mempertemukan kami di sebuah momen yang tidak terduga, mengawali segalanya dengan sebuah sapaan sederhana."
        },
        {
            title: "Menjalin Komitmen",
            date: "Maret 2024",
            desc: "Setelah melewati banyak cerita, kami memutuskan untuk melangkah lebih serius dan menyatukan visi masa depan."
        },
        {
            title: "Lamaran",
            date: "Desember 2025",
            desc: "Di hadapan kedua keluarga besar, kami mengikat janji untuk melangkah ke pelaminan."
        }
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
            }
        );

        cardsRef.current.forEach((card) => {
            if (card) observer.observe(card);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section id="story" className="story-section">
            <h2 className="story-title font-aesthetic">
                Sebuah Kisah
            </h2>

            <div className="story-container">
                {stories.map((item, index) => (
                    <div
                        className={`story-card ${index % 2 === 0 ? "left" : "right"}`}
                        key={index}
                        ref={(el) => (cardsRef.current[index] = el)}
                        style={{ transitionDelay: `${index * 0.2}s` }}
                    >
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
