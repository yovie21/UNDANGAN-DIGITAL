import React from "react";

export default function VenueMap() {
  const location = {
    name: "Banjari Cukil Tengaran",
    address: "Desa Cukil, Kecamatan Tengaran",
    city: "Kabupaten Semarang, Jawa Tengah",
    // Google Maps short link untuk button
    mapsUrl: "https://maps.app.goo.gl/5ceCdM9R5fey9ff96",
    // Embed URL yang benar dari Google Maps
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3956.57244502744!2d110.53134507318745!3d-7.401708672877537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMjQnMDYuMiJTIDExMMKwMzInMDIuMSJF!5e0!3m2!1sid!2sid!4v1769456667380!5m2!1sid!2sid",
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
        <h4 className="venue-location-name">Dusun Banjari RT 22 RW 08</h4>
        <p className="venue-address">Desa Cukil, Kec. Tengaran</p>
        <p className="venue-city">Kab. Semarang Jawa Tengah</p>

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
