import React, { useState, useEffect, useCallback, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import { getRsvps } from './services/api';

// Import CSS
import 'aos/dist/aos.css'; 
import './styles/App.css';

// Import Images
import weddingImg from './assets/images/wedding-couple.jpg';

// Import Audio - Janji Suci (Yovie & Nuno)
import backgroundMusic from './assets/audio/lagu.mp3';

// Import Components
import Hero from './components/Hero';
import Verse from './components/Verse';
import GroomBride from './components/GroomBride';
import OurWedding from './components/OurWedding';
import Details from './components/Details';
import VenueMap from './components/VenueMap';
import Story from './components/Story';
import Gallery from './components/Gallery';
import RSVP from './components/RSVP';
import RSVPList from './components/RSVPList';
import Countdown from './components/Countdown';
import AdminPage from './pages/AdminPage';
import Timeline from './components/Timeline'; 
import WeddingGift from './components/WeddingGift';


function App() {
    const [isOpened, setIsOpened] = useState(false);
    const [activeTab, setActiveTab] = useState('home');
    const [isPlaying, setIsPlaying] = useState(false);
    const [rsvpData, setRsvpData] = useState([]);
    const [loadingRsvp, setLoadingRsvp] = useState(true);
    
    // ✨ Menggunakan lagu lokal: Janji Suci - Yovie & Nuno
    const audioRef = useRef(new Audio(backgroundMusic));

    // Initialize AOS & Audio
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-out-quart',
            once: false,
        });

        const audio = audioRef.current;
        audio.loop = true;
        audio.volume = 0.5; // Set volume 50%

        return () => {
            audio.pause();
        };
    }, []);

    // Load RSVP data from API on component mount
    useEffect(() => {
        const loadRsvpData = async () => {
            try {
                setLoadingRsvp(true);
                const response = await getRsvps();
                setRsvpData(response.data);
                console.log('RSVP data loaded:', response.data);
            } catch (err) {
                console.error('Error loading RSVP data:', err);
                // Jika API error, tetap lanjutkan dengan empty data
                setRsvpData([]);
            } finally {
                setLoadingRsvp(false);
            }
        };

        loadRsvpData();
    }, []);

    // Lock/Unlock Scroll
    useEffect(() => {
        if (!isOpened) {
            document.body.style.overflow = 'hidden';
            window.scrollTo(0, 0);
        } else {
            document.body.style.overflow = 'auto';
            setTimeout(() => { AOS.refresh(); }, 1200);
        }
    }, [isOpened]);

    // Open Invitation & Play Music
    const handleOpenInvitation = useCallback(() => {
        setIsOpened(true);
        setIsPlaying(true);
        audioRef.current.play().catch(err => console.log("Autoplay blocked:", err));

        setTimeout(() => {
            const element = document.getElementById('home');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 1200); 
    }, []);

    // Toggle Music
    const toggleMusic = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    // Smooth Scroll to Section
    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            setActiveTab(id);
        }
    };

    // Handle RSVP Submission
    const handleRSVPSubmit = (data) => {
        // Tambahkan data baru ke list
        setRsvpData([...rsvpData, data]);
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <div className={`App ${!isOpened ? 'no-scroll' : ''}`}>
                        
                        <Hero onOpen={handleOpenInvitation} isOpened={isOpened} />

                        {/* Floating Music Control */}
                        {isOpened && (
                            <button 
                                className={`music-control ${isPlaying ? 'rotating' : ''}`} 
                                onClick={toggleMusic}
                                title={isPlaying ? 'Pause Music' : 'Play Music'}
                            >
                                {isPlaying ? '🎵' : '🔇'}
                            </button>
                        )}

                        <main className={`main-content ${isOpened ? 'content-reveal' : 'content-hidden'}`}>
                            
                            {/* Navigation Bar - UPDATED */}
                            <nav className="navbar">
                                <button className={activeTab === 'home' ? 'active' : ''} onClick={() => scrollTo('home')}>Beranda</button>
                                <button className={activeTab === 'mempelai' ? 'active' : ''} onClick={() => scrollTo('mempelai')}>Mempelai</button>
                                <button className={activeTab === 'timeline' ? 'active' : ''} onClick={() => scrollTo('timeline')}>Acara</button>
                                <button className={activeTab === 'gallery' ? 'active' : ''} onClick={() => scrollTo('gallery')}>Galeri</button>
                                <button className={activeTab === 'rsvp' ? 'active' : ''} onClick={() => scrollTo('rsvp')}>RSVP</button>
                            </nav>

                            {/* Hero Section with Wedding Photo & Countdown */}
                            <div id="home" className="home-hero-container">
                                <div className="home-hero-bg" style={{ backgroundImage: `url(${weddingImg})` }}>
                                    <div className="home-overlay"></div>
                                </div>

                                <div className="home-content-wrapper">
                                    <div data-aos="fade-up" data-aos-duration="1500">
                                        <Countdown targetDate="2026-06-14T08:00:00" />
                                    </div>

                                    <div className="scroll-indicator" data-aos="fade-up" data-aos-delay="800">
                                        <span>Scroll ke Bawah</span>
                                        <div className="mouse"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Our Wedding Section - Introduction */}
                            <section id="our-wedding" className="section" data-aos="fade-up">
                                <OurWedding />
                            </section>

                            {/* Bride & Groom Section */}
                            <section id="mempelai" className="section" data-aos="fade-up">
                                <GroomBride />
                            </section>

                            {/* Quranic Verse Section - Before Event Details */}
                            <section id="verse" className="section verse-section" data-aos="fade-up">
                                <Verse />
                            </section>

                            {/* ========== TAMBAHAN BARU: TIMELINE ========== */}
                            <section id="timeline" className="section" data-aos="fade-up">
                                <Timeline />
                            </section>

                            {/* Event Details Section */}
                            <section id="details" className="section" data-aos="fade-up">
                                <Details />
                            </section>

                            {/* Venue Map Section */}
                            <section id="venue" className="section" data-aos="fade-up">
                                <VenueMap />
                            </section>

                            {/* Love Story Section */}
                            <section id="story" className="section" data-aos="fade-up">
                                <Story />
                            </section>

                            {/* Gallery Section */}
                            <section id="gallery" className="section" data-aos="zoom-in">
                                <Gallery />
                            </section>

                            {/* RSVP Section */}
                            <section id="rsvp" className="section" data-aos="fade-up">
                                <RSVP onSubmit={handleRSVPSubmit} />
                            </section>

                            {/* RSVP List / Confirmation Results */}
                            {!loadingRsvp && rsvpData.length > 0 && (
                                <section id="rsvp-list" className="section" data-aos="fade-up">
                                    <RSVPList data={rsvpData} />
                                </section>
                            )}

                            {/* Loading indicator */}
                            {loadingRsvp && (
                                <section className="section" style={{ textAlign: 'center', padding: '40px 20px' }}>
                                    <p style={{ color: '#999' }}>Memuat data tamu...</p>
                                </section>
                            )}
                            <section id="gift" className="section" data-aos="fade-up">
                                <WeddingGift />
                            </section>

                            {/* Footer */}
                            <footer className="main-footer">
                                <h3 className="font-aesthetic main-names-footer" data-aos="fade-up">Yovie & Ajeng</h3>
                                <p className="wedding-date-footer">14 . 06 . 2026</p>
                                <hr className="footer-line" />
                                <p className="copyright">© 2026 Created with Love</p>
                            </footer>
                        </main>
                    </div>
                } />
                <Route path="/admin" element={<AdminPage />} />
            </Routes>
        </Router>
    );
}

export default App;