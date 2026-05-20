import React from "react";

export default function VenueMap() {
  const location = {
    name: "Banjari Cukil Tengaran",
    address: "Desa Cukil, Kecamatan Tengaran",
    city: "Kabupaten Semarang, Jawa Tengah",
    // Google Maps short link untuk button
    mapsUrl: "https://maps.app.goo.gl/NGH1yjjFdPYjxgbm7",
    // Embed URL yang benar dari Google Maps
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.2729609872736!2d110.72094779999999!3d-7.545183100000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a15326aa0ff17%3A0xe0746cea841561c!2sGedung%20Olahraga%20Kertonatan!5e0!3m2!1sid!2sid!4v1779288493425!5m2!1sid!2sid",
  };

  return (
    <div className="venue-map-section">
      <div className="section-header">
        <h2 className="section-title">Lokasi Acara</h2>
        <div className="title-underline"></div>
      </div>

      <p className="venue-description">
        Besar harapan kami jika Bapak/Ibu/Sahabat/Sdr'i berkenan hadir pada
        acara ini. Atas perhatiannya Terima kasih
      </p>

      {/* Google Maps Embed - Interactive & Zoomable */}
      <div className="map-container">
        <iframe
          src={location.embedUrl}
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Lokasi Acara Pernikahan"
          className="google-map-iframe"></iframe>
      </div>

      {/* Venue Details Card */}
      <div className="venue-details-card">
        <h3 className="venue-name">Lokasi Acara</h3>
        <h4 className="venue-location-name">Gedung Olahraga Kertonatan</h4>
        <h4 className="venue-location-name">Jl. Diponegoro No.168 B</h4>
        <p className="venue-address">Kertonatan, Kec. Kartasura</p>
        <p className="venue-city">Kabupaten Sukoharjo, Jawa Tengah</p>

        {/* Button to open in Google Maps */}
        <a
          href={location.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-maps">
          📍 Lihat di Google Maps
        </a>
      </div>
    </div>
  );
}
