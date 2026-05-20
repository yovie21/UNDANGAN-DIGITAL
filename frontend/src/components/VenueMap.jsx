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
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d989.1431923815825!2d110.5337338!3d-7.4016725!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a709767b69e39%3A0x519764565b577497!2sHGXM%2B7MR%2C%20Banjari%2C%20Cukil%2C%20Kec.%20Tengaran%2C%20Kabupaten%20Semarang%2C%20Jawa%20Tengah%2050775!5e0!3m2!1sid!2sid!4v1779288650554!5m2!1sid!2sid",
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
