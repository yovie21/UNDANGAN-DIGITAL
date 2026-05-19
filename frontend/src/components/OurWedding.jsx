import React, { useState, useEffect } from 'react';
// Import gambar dari assets
import couplePhoto1 from '../assets/images/1.jpg';
import couplePhoto2 from '../assets/images/2.jpg';
import couplePhoto3 from '../assets/images/3.jpg';
import couplePhoto4 from '../assets/images/4.jpg';

export default function OurWedding() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const photos = [couplePhoto1, couplePhoto2, couplePhoto3, couplePhoto4];

    // Auto slide setiap 4 detik
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % photos.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [photos.length]);

    // Manual navigation
    const handleNext = () => {
        setCurrentSlide((prev) => (prev + 1) % photos.length);
    };

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev - 1 + photos.length) % photos.length);
    };

    return (
        <div className="our-wedding-section">
            <div className="section-header">
                <span className="subtitle">Kami Mengundang</span>
                <h2>Our Wedding</h2>
            </div>

            <div className="wedding-intro-content">
                <p className="intro-text">
                    Atas Rahmat Tuhan Yang Maha Esa, kami bermaksud mengundang Anda di acara Kami. Merupakan suatu 
                    kehormatan dan kebahagiaan bagi kami sekelauarga, apabila Bapak/Ibu/Saudara/i berkenan hadir 
                    dan memberikan doa restu pada
                </p>

                {/* Carousel */}
                <div className="wedding-carousel" data-aos="zoom-in">
                    <div className="carousel-container">
                        <div className="carousel-wrapper">
                            {photos.map((photo, index) => (
                                <div
                                    key={index}
                                    className={`carousel-slide ${
                                        index === currentSlide ? 'active' : ''
                                    }`}
                                >
                                    <img src={photo} alt={`Pasangan ${index + 1}`} />
                                </div>
                            ))}
                        </div>

                        {/* Navigation Buttons */}
                        <button
                            className="carousel-btn prev-btn"
                            onClick={handlePrev}
                            aria-label="Previous slide"
                        >
                            ❮
                        </button>
                        <button
                            className="carousel-btn next-btn"
                            onClick={handleNext}
                            aria-label="Next slide"
                        >
                            ❯
                        </button>
                    </div>

                    {/* Dots Indicator */}
                    <div className="carousel-dots">
                        {photos.map((_, index) => (
                            <button
                                key={index}
                                className={`dot ${index === currentSlide ? 'active' : ''}`}
                                onClick={() => setCurrentSlide(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            ></button>
                        ))}
                    </div>

                    {/* Slide Counter */}
                    <div className="carousel-counter">
                        {currentSlide + 1} / {photos.length}
                    </div>
                </div>

                <p className="closing-text">
                    Besar harapan kami jika Bapak/Ibu/Sahabat/Sdr'i berkenan hadir pada acara ini. 
                    Atas perhatiannya Terima kasih
                </p>
            </div>
        </div>
    );
}