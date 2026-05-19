import React, { useState, useEffect } from 'react';

const Countdown = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = +new Date(targetDate) - +new Date();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);
        return () => clearInterval(timer);
    }, [targetDate]);

    const formatNumber = (num) => num.toString().padStart(2, "0");

    return (
        <div className="countdown-container">
            <h2 className="countdown-title">Menuju Hari Bahagia</h2>
            <p className="countdown-subtitle">14 Juni 2026</p>

            <div className="countdown-timer">
                <div className="countdown-box">
                    <span className="countdown-number">{formatNumber(timeLeft.days)}</span>
                    <span className="countdown-label">Hari</span>
                </div>

                <div className="countdown-box">
                    <span className="countdown-number">{formatNumber(timeLeft.hours)}</span>
                    <span className="countdown-label">Jam</span>
                </div>

                <div className="countdown-box">
                    <span className="countdown-number">{formatNumber(timeLeft.minutes)}</span>
                    <span className="countdown-label">Menit</span>
                </div>

                <div className="countdown-box">
                    <span className="countdown-number">{formatNumber(timeLeft.seconds)}</span>
                    <span className="countdown-label">Detik</span>
                </div>
            </div>
        </div>
    );
};

export default Countdown;
