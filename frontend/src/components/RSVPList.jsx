import React, { } from 'react';

export default function RSVPList({ data = [] }) {


    // Function untuk label status
    const getStatusLabel = (status) => {
        switch (status) {
            case 'hadir':
                return { text: 'Akan Hadir', className: 'confirmed-item' };
            case 'tidak':
                return { text: 'Tidak Hadir', className: 'absent-item' };
            case 'belum':
                return { text: 'Belum Konfirmasi', className: 'uncertain-item' };
            default:
                return { text: 'Tidak Diketahui', className: '' };
        }
    };

    return (
        <div className="rsvp-list-section">

            {/* Semua Data */}
            <div className="rsvp-list-container">
                <h3 className="list-title">💌 Daftar Ucapan </h3>

                {data.length > 0 ? (
                    <div className="rsvp-guests-list">
                        {data.map((guest, index) => {
                            const status = getStatusLabel(guest.kehadiran);

                            return (
                                <div key={index} className={`guest-item ${status.className}`}>
                                    <div className="guest-info">
                                        <h4 className="guest-name">{guest.nama}</h4>
                                        {guest.pesan && (
                                            <p className="guest-message"> {guest.pesan}</p>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <p className="no-data">Belum ada ucapan masuk</p>
                )}
            </div>

        </div>
    );
}
