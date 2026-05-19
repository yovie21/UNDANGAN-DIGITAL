import React from 'react';
import Admin from '../components/Admin';

export default function AdminPage() {
    const [password, setPassword] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(false); // State baru
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);
    const [error, setError] = React.useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        if (password === 'admin123') {
            setIsAuthenticated(true);
            setError(false);
        } else {
            setError(true);
            setPassword('');
        }
    };

    if (!isAuthenticated) {
        return (
            <div style={{ 
                minHeight: '100vh', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #fce7f3 0%, #e9d5ff 100%)',
                padding: '20px',
                fontFamily: "'Segoe UI', Roboto, sans-serif"
            }}>
                <div style={{
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    padding: '40px 30px',
                    borderRadius: '24px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    maxWidth: '400px',
                    width: '100%',
                    textAlign: 'center'
                }}>
                    <div style={{
                        width: '60px',
                        height: '60px',
                        background: '#ec4899',
                        borderRadius: '18px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 20px',
                        boxShadow: '0 8px 16px rgba(236, 72, 153, 0.3)'
                    }}>
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                        </svg>
                    </div>

                    <h2 style={{ color: '#1f2937', marginBottom: '8px', fontSize: '1.5rem' }}>Admin Panel</h2>
                    <p style={{ color: '#6b7280', marginBottom: '30px', fontSize: '0.9rem' }}>Masukkan password untuk mengakses data</p>

                    <form onSubmit={handleLogin}>
                        <div style={{ marginBottom: '20px', textAlign: 'left', position: 'relative' }}>
                            <label style={{ 
                                display: 'block', 
                                fontSize: '0.85rem', 
                                fontWeight: '600', 
                                color: '#4b5563', 
                                marginBottom: '8px',
                                marginLeft: '4px'
                            }}>
                                Password Akses
                            </label>
                            
                            <div style={{ position: 'relative' }}>
                                <input
                                    type={showPassword ? "text" : "password"} // Dinamis berdasarkan state
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        if(error) setError(false);
                                    }}
                                    placeholder="••••••••"
                                    style={{
                                        width: '100%',
                                        padding: '14px 45px 14px 16px', // Beri padding kanan untuk ruang ikon
                                        border: error ? '2px solid #ef4444' : '2px solid #f3f4f6',
                                        borderRadius: '12px',
                                        fontSize: '1rem',
                                        outline: 'none',
                                        transition: '0.3s',
                                        background: '#f9fafb'
                                    }}
                                />
                                
                                {/* Tombol Show/Hide Mata */}
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    style={{
                                        position: 'absolute',
                                        right: '12px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        background: 'none',
                                        border: 'none',
                                        cursor: 'pointer',
                                        color: '#9ca3af',
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                >
                                    {showPassword ? (
                                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                                            <line x1="1" y1="1" x2="23" y2="23"></line>
                                        </svg>
                                    ) : (
                                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                            <circle cx="12" cy="12" r="3"></circle>
                                        </svg>
                                    )}
                                </button>
                            </div>

                            {error && (
                                <span style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '6px', display: 'block', marginLeft: '4px' }}>
                                    Password salah, silakan coba lagi.
                                </span>
                            )}
                        </div>

                        <button
                            type="submit"
                            style={{
                                width: '100%',
                                padding: '14px',
                                background: 'linear-gradient(135deg, #f472b6 0%, #ec4899 100%)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '12px',
                                fontSize: '1rem',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: '0.3s',
                                boxShadow: '0 4px 12px rgba(236, 72, 153, 0.2)'
                            }}
                        >
                            Masuk Sekarang
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div style={{ background: '#f9fafb', minHeight: '100vh' }}>
            <Admin />
        </div>
    );
}