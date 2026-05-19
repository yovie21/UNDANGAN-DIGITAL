import React from "react";
import { Clock, MapPin, Map, HeartHandshake, PartyPopper } from "lucide-react";

export default function Details() {
  const events = [
    {
      title: "Akad Nikah",
      icon: <HeartHandshake size={32} />,
      date: "Minggu, 14 Juni 2026",
      time: "07:00 - 08:00 WIB",
      loc: "Dusun Banjari RT 22 RW 08, Desa Cukil, Kec. Tengaran, Kab. Semarang",
      desc: "Mengikat janji suci dalam ikatan mitsaqan ghalizha.",
      gmaps: "https://maps.app.goo.gl/5ceCdM9R5fey9ff96",
    },
    {
      title: "Resepsi",
      icon: <PartyPopper size={32} />,
      date: "Minggu, 14 Juni 2026",
      time: "08:00 - 11:30 WIB",
      loc: "Dusun Banjari RT 22 RW 08, Desa Cukil, Kec. Tengaran, Kab. Semarang",
      desc: "Berbagi kebahagiaan dan doa restu bersama orang terkasih.",
      gmaps: "https://maps.app.goo.gl/5ceCdM9R5fey9ff96",
    },
  ];

  return (
    <section id="details" className="section details-section">
      <div className="section-header" data-aos="fade-up">
        <h2 className="font-aesthetic">Save The Date</h2>
        <p className="subtitle">
          Kami menantikan kehadiran Anda di hari bahagia kami
        </p>
      </div>

      <div className="container details-grid">
        {events.map((event, index) => (
          <div
            className="luxury-card"
            key={index}
            data-aos={index === 0 ? "fade-right" : "fade-left"}>
            <div className="card-top-accent"></div>

            <div className="icon-circle">{event.icon}</div>

            <h3>{event.title}</h3>
            <p className="event-desc-text">{event.desc}</p>

            <div className="divider"></div>

            <div className="info-row">
              <Clock size={18} className="info-icon" />
              <div>
                <p className="info-label">Waktu</p>
                <p className="info-value">{event.date}</p>
                <p className="info-value text-pink">{event.time}</p>
              </div>
            </div>

            <div className="info-row">
              <MapPin size={18} className="info-icon" />
              <div>
                <p className="info-label">Lokasi</p>
                <p className="info-value">{event.loc}</p>
              </div>
            </div>

            <a
              href={event.gmaps}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-open-map">
              <Map size={18} />
              Lihat Lokasi
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
