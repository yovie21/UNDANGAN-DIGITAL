import React, { useState } from 'react';
import { createRsvp } from '../services/api';

export default function RSVP({ onSubmit }) {
    const [formData, setFormData] = useState({
        nama: '',
        kehadiran: '', // ✅ Empty string, bukan 'Pilih Status'
        pesan: ''
    });

    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        // Clear error when user starts typing
        if (error) setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        // Validasi input
        if (!formData.nama.trim()) {
            setError('Mohon isi nama Anda!');
            return;
        }

        if (!formData.kehadiran || formData.kehadiran === '') {
            setError('Mohon pilih status kehadiran!');
            return;
        }

        setLoading(true);

        try {
            // ✅ Data yang dikirim ke API (sesuai backend Laravel)
            const dataToSend = {
                nama: formData.nama.trim(),
                kehadiran: formData.kehadiran, // ✅ 'hadir', 'tidak', atau 'belum'
                pesan: formData.pesan.trim()
            };

            console.log('📤 Mengirim data:', dataToSend);

            // Kirim data ke API
            const response = await createRsvp(dataToSend);

            console.log('✅ Response dari API:', response.data);

            // Kirim data ke parent component untuk local update
            if (onSubmit) {
                onSubmit({
                    nama: dataToSend.nama,
                    kehadiran: dataToSend.kehadiran,
                    pesan: dataToSend.pesan
                });
            }

            // Reset form
            setFormData({
                nama: '',
                kehadiran: '',
                pesan: ''
            });

            setSubmitted(true);

            // Tampilkan pesan sukses selama 3 detik
            setTimeout(() => {
                setSubmitted(false);
            }, 3000);

        } catch (err) {
            console.error('❌ Error saat menyimpan RSVP:', err);
            console.error('❌ Error response:', err.response?.data);
            
            // Handle different error types
            if (err.response) {
                // Server responded with error status
                const errorData = err.response.data;
                
                // Jika ada validation errors
                if (errorData.errors) {
                    const errorMessages = Object.values(errorData.errors).flat().join(', ');
                    setError(errorMessages);
                } else {
                    const errorMessage = errorData.message || 
                                       `Error ${err.response.status}: ${err.response.statusText}`;
                    setError(errorMessage);
                }
            } else if (err.request) {
                // Request was made but no response
                setError('Tidak dapat terhubung ke server. Periksa koneksi internet Anda.');
            } else {
                // Something else happened
                setError('Terjadi kesalahan. Silakan coba lagi.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="rsvp-section">
            <div className="section-header">
                <span className="subtitle">Konfirmasi Kehadiran</span>
                <h2>RSVP</h2>
            </div>

            <div className="rsvp-container">
                {submitted && (
                    <div className="success-message" data-aos="fade-in">
                        ✓ Terima kasih! Konfirmasi Anda telah tersimpan.
                    </div>
                )}

                {error && (
                    <div className="error-message" data-aos="fade-in">
                        ✗ {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="rsvp-form">
                    <div className="form-group">
                        <label htmlFor="nama">Nama Lengkap *</label>
                        <input
                            type="text"
                            id="nama"
                            name="nama"
                            value={formData.nama}
                            onChange={handleChange}
                            placeholder="Masukkan nama Anda"
                            required
                            disabled={loading}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="kehadiran">Kehadiran *</label>
                        <select
                            id="kehadiran"
                            name="kehadiran"
                            value={formData.kehadiran}
                            onChange={handleChange}
                            required
                            disabled={loading}
                        >
                            {/* ✅ Value sesuai backend: 'hadir', 'tidak', 'belum' */}
                            <option value="">Pilih Status</option>
                            <option value="hadir">✓ Akan Hadir</option>
                            <option value="tidak">✗ Tidak Hadir</option>
                            <option value="belum">? Belum Tahu</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="pesan">Pesan (Opsional)</label>
                        <textarea
                            id="pesan"
                            name="pesan"
                            value={formData.pesan}
                            onChange={handleChange}
                            placeholder="Sampaikan pesan atau ucapan Anda..."
                            rows="4"
                            disabled={loading}
                        ></textarea>
                    </div>

                    <button 
                        type="submit" 
                        className="btn-primary"
                        disabled={loading}
                    >
                        {loading ? '⏳ Menyimpan...' : '✓ Kirim Konfirmasi'}
                    </button>
                </form>
            </div>
        </div>
    );
}