import React from 'react';
import { Instagram } from 'lucide-react';
// Import gambar yang sudah ada di folder kamu agar tidak error lagi
import fotoPria from '../assets/images/pria.jpg'; 
import fotoWanita from '../assets/images/wanita.jpg';

export default function GroomBride() {
    return (
        <section id="mempelai" className="mempelai-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="font-aesthetic">The Bride & Groom</h2>
                    <p className="subtitle">Maha suci Allah yang telah menciptakan mahluk-Nya berpasang-pasangan.</p>
                </div>

                <div className="mempelai-grid">
                    {/* Mempelai Pria */}
                    <div className="mempelai-card">
                        <div className="arch-frame">
                            <img src={fotoPria} alt="Yovie Pradana" />
                        </div>
                        <h3 className="font-aesthetic">Yovie Muhammad Rizki</h3>
                        <p className="parents-name">
                            Putra dari <br />
                            <strong>Bapak Joko Sulastyo & Sri Daryanti</strong>
                        </p>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-link">
                            <Instagram size={18} /> @yoviemuhammad_rizki
                        </a>
                    </div>

                    {/* Pembatas '&' */}
                    <div className="mempelai-divider">
                        <span className="font-aesthetic">&</span>
                    </div>

                    {/* Mempelai Wanita */}
                    <div className="mempelai-card">
                        <div className="arch-frame">
                            <img src={fotoWanita} alt="Ajeng Ayu Arumsari" />
                        </div>
                        <h3 className="font-aesthetic">Ajeng Ayu Arumsari</h3>
                        <p className="parents-name">
                            Putri dari <br />
                            <strong>Bapak Sahal Arifin & Ibu Almh Istiqlaliyah</strong>
                        </p>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-link">
                            <Instagram size={18} /> @Ajeng Ayu Arumsari
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}