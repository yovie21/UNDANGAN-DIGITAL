import React, { useState } from 'react';

export default function Timeline() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const events = [
        {
            time: '08 WIB',
            title: 'Persiapan dan kedatangan Tamu',
            description: 'Pengantin dan keluarga bersiap-siap',
            icon: '👥',
            color: '#ec4899'
        },
        {
            time: '10 WIB',
            title: 'Akad Nikah',
            description: 'Pembacaan oleh MC, Pembacaan Ayat Suci Al-Quran, Khutbah Nikah oleh penghulu atau tokoh agama, Ijab Kabul, Doa.',
            icon: '💍',
            color: '#d4a373'
        },
        {
            time: '11 WIB',
            title: 'Resepsi Pernikahan',
            description: 'Sambutan dari keluarga kedua mempelai, Hiburan Musik, tarian tradisional, atau penampilan lainnya!',
            icon: '🍽️',
            color: '#f472b6'
        },
        {
            time: '14:00 WIB',
            title: 'Acara Puncak Kami',
            description: 'Hiburan dan makan siang sampai acara selesai',
            icon: '🎉',
            color: '#a68d71'
        }
    ];

    return (
        <section className="timeline-section" data-aos="fade-up">
            <div className="timeline-wrapper">
                {/* Header */}
                <div className="timeline-header" data-aos="zoom-in">
                    <h2 className="timeline-main-title">Susunan Acara</h2>
                    <div className="timeline-subtitle-line"></div>
                    <p className="timeline-subtitle">Rangkaian Acara Pernikahan Kami</p>
                </div>

                {/* Timeline Container */}
                <div className="timeline-container">
                    <div className="timeline-vertical-line"></div>
                    
                    <div className="timeline-events">
                        {events.map((event, index) => (
                            <div 
                                key={index} 
                                className={`timeline-item ${index % 2 === 0 ? 'timeline-left' : 'timeline-right'}`}
                                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                                data-aos-delay={index * 150}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {/* Dot Indicator */}
                                <div 
                                    className={`timeline-dot ${hoveredIndex === index ? 'timeline-dot-active' : ''}`}
                                    style={{ 
                                        borderColor: event.color,
                                        background: hoveredIndex === index ? event.color : '#fff'
                                    }}
                                >
                                    <div className="timeline-dot-pulse" style={{ borderColor: event.color }}></div>
                                </div>

                                {/* Event Card */}
                                <div 
                                    className={`timeline-card ${hoveredIndex === index ? 'timeline-card-active' : ''}`}
                                    style={{ borderTopColor: event.color }}
                                >
                                    {/* Icon Badge */}
                                    <div 
                                        className="timeline-icon-badge" 
                                        style={{ background: event.color }}
                                    >
                                        <span className="timeline-icon-emoji">{event.icon}</span>
                                    </div>

                                    {/* Time */}
                                    <div className="timeline-time-badge" style={{ background: `${event.color}15` }}>
                                        <svg className="timeline-clock-icon" viewBox="0 0 24 24" fill="none" stroke={event.color}>
                                            <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                                            <path d="M12 6v6l4 2" strokeWidth="2" strokeLinecap="round"/>
                                        </svg>
                                        <span className="timeline-time-text" style={{ color: event.color }}>
                                            {event.time}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div className="timeline-card-content">
                                        <h3 className="timeline-event-title">{event.title}</h3>
                                        <p className="timeline-event-description">{event.description}</p>
                                    </div>

                                    {/* Decorative Corner */}
                                    <div className="timeline-card-corner" style={{ background: event.color }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Decoration */}
                <div className="timeline-bottom-decoration" data-aos="fade-up">
                    <div className="timeline-heart">💝</div>
                </div>
            </div>
        </section>
    );
}