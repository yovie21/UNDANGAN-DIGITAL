import React, { useEffect, useState } from 'react';
import { getRsvps, getStatistics, deleteRsvp } from '../services/api';
import { Trash2 } from 'lucide-react';

export default function Admin() {
    const [rsvps, setRsvps] = useState([]);
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const [rsvpRes, statsRes] = await Promise.all([
                getRsvps(),
                getStatistics()
            ]);
            setRsvps(rsvpRes.data);
            setStats(statsRes.data);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Hapus RSVP ini?')) {
            try {
                await deleteRsvp(id);
                setRsvps(rsvps.filter(r => r.id !== id));
                fetchData();
            } catch (error) {
                alert('Error menghapus RSVP');
            }
        }
    };

    if (loading) return <div className="loading">Loading...</div>;

    return (
        <section id="admin" className="section">
            <h2>Dashboard Admin</h2>
            
            {stats && (
                <div className="stats-grid">
                    <div className="stat-card">
                        <h4>Total RSVP</h4>
                        <p className="stat-number">{stats.total}</p>
                    </div>
                    <div className="stat-card hadir">
                        <h4>Akan Hadir</h4>
                        <p className="stat-number">{stats.hadir}</p>
                    </div>
                    <div className="stat-card tidak">
                        <h4>Tidak Hadir</h4>
                        <p className="stat-number">{stats.tidak}</p>
                    </div>
                    <div className="stat-card belum">
                        <h4>Belum Pasti</h4>
                        <p className="stat-number">{stats.belum}</p>
                    </div>
                </div>
            )}

            <div className="rsvp-list">
                <h3>Daftar RSVP</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Nama</th>
                            <th>Kehadiran</th>
                            <th>Pesan</th>
                            <th>Tanggal</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rsvps.map((rsvp) => (
                            <tr key={rsvp.id}>
                                <td>{rsvp.nama}</td>
                                <td>
                                    <span className={`status ${rsvp.kehadiran}`}>
                                        {rsvp.kehadiran}
                                    </span>
                                </td>
                                <td>{rsvp.pesan || '-'}</td>
                                <td>{new Date(rsvp.created_at).toLocaleDateString('id-ID')}</td>
                                <td>
                                    <button 
                                        className="btn-delete"
                                        onClick={() => handleDelete(rsvp.id)}
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}