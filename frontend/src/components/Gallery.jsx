import React, { useState, useEffect, useRef } from "react";
import foto1 from "../assets/images/1.jpg";
import foto2 from "../assets/images/2.jpg";
import foto3 from "../assets/images/3.jpg";
import foto4 from "../assets/images/4.jpg";
import foto5 from "../assets/images/5.jpg";
import foto6 from "../assets/images/6.jpg";

export default function Gallery() {
    const images = [foto1, foto2, foto3, foto4, foto5, foto6];
    const [selected, setSelected] = useState(null);
    const galleryRef = useRef(null);

    useEffect(() => {
        const reveal = () => {
            const elements = document.querySelectorAll(".gallery-item");
            const triggerBottom = window.innerHeight * 0.9;

            elements.forEach((el) => {
                const top = el.getBoundingClientRect().top;
                if (top < triggerBottom) {
                    el.classList.add("show");
                }
            });
        };

        window.addEventListener("scroll", reveal);
        reveal();

        return () => window.removeEventListener("scroll", reveal);
    }, []);

    return (
        <section id="gallery" className="gallery-section" ref={galleryRef}>
            <h2 className="gallery-title">Galeri Momen</h2>

            <div className="gallery-grid">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className="gallery-item"
                        onClick={() => setSelected(img)}
                    >
                        <div className="shimmer-border"></div>

                        <img src={img} alt={`Foto ${index + 1}`} />

                        <div className="gallery-overlay">
                            <span>Lihat Foto</span>
                        </div>
                    </div>
                ))}
            </div>

            {selected && (
                <div className="lightbox" onClick={() => setSelected(null)}>
                    <img src={selected} alt="Preview" />
                </div>
            )}
        </section>
    );
}
