import React, { useState, useEffect, useRef } from 'react';

export default function CheckInTimer() {
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [scanning, setScanning] = useState(false);
  const [scanMessage, setScanMessage] = useState('');
  
  // Timer States: 2 hours standard booking session in seconds (7200 seconds)
  const TOTAL_TIME = 7200; 
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const timerRef = useRef(null);

  // Tick countdown timer when checked in
  useEffect(() => {
    if (isCheckedIn && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      handleAutoCheckout();
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isCheckedIn, timeLeft]);

  // Format seconds to HH:MM:SS
  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  // Handle mock NFC scan check-in
  const handleCheckIn = () => {
    setScanning(true);
    setScanMessage('Searching for NFC desk tag...');
    
    // Simulate NFC Tag reading and verification
    setTimeout(() => {
      setScanMessage('Validating active reservation...');
      
      setTimeout(() => {
        setScanMessage('Matching Tag UID to Seat...');
        
        setTimeout(() => {
          setScanning(false);
          setIsCheckedIn(true);
          setTimeLeft(TOTAL_TIME); // Reset session timer
          setScanMessage('');
          alert('Check-in Successful! NFC Handshake validated for Desk A42.');
        }, 600);
      }, 600);
    }, 800);
  };

  // Manual early checkout
  const handleEarlyCheckout = () => {
    const confirmCheckout = window.confirm('Are you sure you want to check out early? This will instantly release your seat to the library database.');
    if (confirmCheckout) {
      if (timerRef.current) clearInterval(timerRef.current);
      setIsCheckedIn(false);
      setTimeLeft(TOTAL_TIME);
      alert('Checkout Completed! Seat A42 has been released.');
    }
  };

  // Automatic session timeout release
  const handleAutoCheckout = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIsCheckedIn(false);
    alert('Session expired! Your seat reservation has been checked out automatically.');
  };

  // Circular progress SVG dash math
  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (timeLeft / TOTAL_TIME) * circumference;

  // Unified Material 3 Styling Tokens
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      gap: '1.5rem',
      alignItems: 'center',
    },
    card: {
      width: '100%',
      backgroundColor: 'var(--md-sys-color-surface)',
      borderRadius: '28px', // M3 Card Rounding (28dp equivalent)
      border: '1px solid var(--md-sys-color-outline-variant)',
      padding: '2rem 1.25rem',
      boxShadow: 'var(--md-elevation-1)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1.5rem',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    },
    scanIndicator: {
      width: '140px',
      height: '140px',
      borderRadius: '50%',
      backgroundColor: 'var(--md-sys-color-primary-container-crimson)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--md-sys-color-primary-crimson)',
      position: 'relative',
    },
    scanWave: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      border: '2px solid var(--md-sys-color-primary-crimson)',
      animation: 'wave-pulse 2s infinite ease-out',
    },
    title: {
      fontFamily: 'var(--font-headline)',
      fontSize: '1.35rem',
      fontWeight: '700',
      color: 'var(--md-sys-color-on-surface)',
    },
    // M3 Filled Tonal Button
    filledTonalBtn: {
      backgroundColor: 'var(--md-sys-color-primary-container)',
      color: 'var(--md-sys-color-on-primary-container)',
      border: 'none',
      borderRadius: '12px', // M3 button rounding (12dp equivalent)
      padding: '0.85rem 2rem',
      fontSize: '0.9rem',
      fontWeight: '700',
      fontFamily: 'var(--font-body)',
      cursor: 'pointer',
      transition: 'all 0.2s',
      boxShadow: 'var(--md-elevation-1)',
    },
    filledTonalBtnHover: {
      backgroundColor: '#E7D0FF',
      transform: 'translateY(-1px)',
    },
    microcopyCard: {
      backgroundColor: 'rgba(0, 0, 0, 0.02)',
      border: '1px solid var(--md-sys-color-outline-variant)',
      borderRadius: '16px',
      padding: '1rem',
      fontSize: '0.75rem',
      color: 'var(--md-sys-color-outline)',
      lineHeight: '1.1rem',
      textAlign: 'left',
    },
    boldMarker: {
      color: 'var(--md-sys-color-primary-crimson)',
      fontWeight: '700',
    },
    // Circular progress indicator styles
    progressContainer: {
      position: 'relative',
      width: '200px',
      height: '200px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    timeDisplay: {
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    timeString: {
      fontSize: '1.75rem',
      fontWeight: '800',
      fontFamily: 'var(--font-headline)',
      color: 'var(--md-sys-color-on-surface)',
    },
    timeLabel: {
      fontSize: '0.7rem',
      fontWeight: '600',
      color: 'var(--md-sys-color-outline)',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    // M3 Outlined Button
    outlinedBtn: {
      backgroundColor: 'transparent',
      color: 'var(--md-sys-color-primary-crimson)',
      border: '1.5px solid var(--md-sys-color-primary-crimson)',
      borderRadius: '12px', // M3 Button rounding
      padding: '0.75rem 1.5rem',
      fontSize: '0.85rem',
      fontWeight: '700',
      fontFamily: 'var(--font-body)',
      cursor: 'pointer',
      transition: 'all 0.2s',
      marginTop: '0.5rem',
    },
    outlinedBtnHover: {
      backgroundColor: 'var(--md-sys-color-primary-container-crimson)',
    }
  };

  return (
    <div style={styles.container}>
      
      {/* ---------------- SCREEN A: NFC SCANNING STATE ---------------- */}
      {!isCheckedIn && (
        <div style={styles.card}>
          <h3 style={styles.title}>NFC Seat Check-In</h3>
          <p className="m3-body-medium" style={{ color: 'var(--md-sys-color-outline)', marginTop: '-0.75rem' }}>
            Tap the button below or bring your smartphone close to the desk sticker to scan.
          </p>

          {/* Clean Scanning Animation State */}
          <div style={styles.scanIndicator}>
            {scanning && <div style={styles.scanWave}></div>}
            <svg viewBox="0 0 24 24" width="60" height="60" fill="currentColor">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H4V4h16v16zm-8-3c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0-8c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"/>
            </svg>
          </div>

          {/* Action and feedback states */}
          {scanning ? (
            <div style={{ minHeight: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <p style={{ color: 'var(--md-sys-color-primary)', fontWeight: '700', fontSize: '0.9rem', animation: 'pulse-dot 1.5s infinite' }}>
                🔄 {scanMessage}
              </p>
            </div>
          ) : (
            <button 
              onClick={handleCheckIn}
              style={styles.filledTonalBtn}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.filledTonalBtnHover.backgroundColor}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--md-sys-color-primary-container)'}
            >
              Check-in
            </button>
          )}

          {/* Explicit Microcopy guidelines */}
          <div style={styles.microcopyCard}>
            <span style={{ fontWeight: '700', color: 'var(--md-sys-color-on-surface)', display: 'block', marginBottom: '0.25rem' }}>
              NFC Verification Policy
            </span>
            <span>
              The system <span style={styles.boldMarker}>validates your active reservation</span>, matches the table <span style={styles.boldMarker}>Tag UID to your assigned seat</span>, and enforces a strict <span style={styles.boldMarker}>5-minute grace period</span>. Failure to tap check-in within 5 minutes of slot onset automatically cancels the reservation and issues an attendance warning strike.
            </span>
          </div>
        </div>
      )}

      {/* ---------------- SCREEN B: ACTIVE SESSION STATE ---------------- */}
      {isCheckedIn && (
        <div style={styles.card}>
          <h3 style={styles.title}>Active Study Session</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', marginTop: '-0.75rem' }}>
            <span style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--md-sys-color-primary-crimson)', backgroundColor: 'var(--md-sys-color-primary-container-crimson)', padding: '0.25rem 0.75rem', borderRadius: '8px', display: 'inline-block' }}>
              Zone A - Seat 42
            </span>
            <p className="m3-body-medium" style={{ color: 'var(--md-sys-color-outline)', fontSize: '0.8rem', marginTop: '0.25rem' }}>
              Checked in via NFC Tag (ID: A42-UTM)
            </p>
          </div>

          {/* Circular Progress Indicator showing remaining seat time */}
          <div style={styles.progressContainer}>
            <svg width="200" height="200" style={{ transform: 'rotate(-90deg)' }}>
              {/* Background circle track */}
              <circle
                cx="100"
                cy="100"
                r={radius}
                fill="transparent"
                stroke="var(--md-sys-color-surface-variant)"
                strokeWidth="12"
              />
              {/* Foreground animated M3 circle */}
              <circle
                cx="100"
                cy="100"
                r={radius}
                fill="transparent"
                stroke="var(--md-sys-color-primary)"
                strokeWidth="12"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                style={{ transition: 'stroke-dashoffset 1s linear' }}
              />
            </svg>
            <div style={styles.timeDisplay}>
              <span style={styles.timeString}>{formatTime(timeLeft)}</span>
              <span style={styles.timeLabel}>Remaining</span>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            <p className="m3-body-medium" style={{ color: 'var(--md-sys-color-outline)', fontSize: '0.85rem' }}>
              Your attendance status is verified. Remember to checkout when leaving!
            </p>
          </div>

          {/* M3 Outlined Button 'Manual Early Check-out' */}
          <button 
            onClick={handleEarlyCheckout}
            style={styles.outlinedBtn}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.outlinedBtnHover.backgroundColor}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            Manual Early Check-out
          </button>
        </div>
      )}

    </div>
  );
}
