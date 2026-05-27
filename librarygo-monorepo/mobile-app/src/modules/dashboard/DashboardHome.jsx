import React, { useState } from 'react';

export default function DashboardHome() {
  const [strikes, setStrikes] = useState(1); // Defaults to 1 strike to demonstrate banner out-of-the-box
  const [bannerDismissed, setBannerDismissed] = useState(false);

  // M3 Rounding tokens: 12px for inputs/buttons, 28px for cards
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      gap: '1rem',
    },
    banner: {
      backgroundColor: 'var(--md-sys-color-primary-container-crimson)',
      color: 'var(--md-sys-color-on-primary-container-crimson)',
      padding: '1rem 1.25rem',
      borderRadius: '16px', // M3 Standard Banner rounding
      border: '1px solid var(--md-sys-color-primary-crimson)',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem',
      boxShadow: 'var(--md-elevation-1)',
      animation: 'slide-down 0.3s ease-out forwards',
    },
    bannerHeader: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '0.75rem',
    },
    bannerIcon: {
      fontSize: '1.5rem',
      flexShrink: '0',
      marginTop: '-2px',
    },
    bannerTitle: {
      fontFamily: 'var(--font-headline)',
      fontSize: '0.9rem',
      fontWeight: '700',
      lineHeight: '1.2rem',
    },
    bannerActions: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '0.5rem',
    },
    bannerBtn: {
      background: 'none',
      border: 'none',
      color: 'var(--md-sys-color-primary-crimson)',
      fontFamily: 'var(--font-body)',
      fontSize: '0.8rem',
      fontWeight: '700',
      cursor: 'pointer',
      padding: '0.35rem 0.75rem',
      borderRadius: '8px',
      transition: 'background-color 0.2s',
    },
    bannerBtnFilled: {
      backgroundColor: 'var(--md-sys-color-primary-crimson)',
      color: '#FFFFFF',
      border: 'none',
      fontFamily: 'var(--font-body)',
      fontSize: '0.8rem',
      fontWeight: '700',
      cursor: 'pointer',
      padding: '0.35rem 0.75rem',
      borderRadius: '8px',
      transition: 'opacity 0.2s',
    },
    card: {
      backgroundColor: 'var(--md-sys-color-surface)',
      borderRadius: '28px', // M3 Extra Large Corner
      padding: '1.5rem 1.25rem',
      border: '1px solid var(--md-sys-color-outline-variant)',
      boxShadow: 'var(--md-elevation-1)',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      transition: 'all 0.2s ease',
    },
    strikeTracker: {
      alignItems: 'center',
      textAlign: 'center',
    },
    badgeContainer: {
      position: 'relative',
      width: '100px',
      height: '100px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '0.5rem',
    },
    badgeOuter: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      border: '4px dashed var(--md-sys-color-outline-variant)',
      animation: 'rotate-dashed 20s linear infinite',
    },
    badgeInner: {
      width: '82px',
      height: '82px',
      borderRadius: '50%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#FFFFFF',
      fontFamily: 'var(--font-headline)',
      boxShadow: 'var(--md-elevation-2)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    },
    badgeValue: {
      fontSize: '2.5rem',
      fontWeight: '800',
      lineHeight: '2.2rem',
    },
    badgeLimit: {
      fontSize: '0.75rem',
      fontWeight: '600',
      opacity: '0.85',
    },
    simControlCard: {
      backgroundColor: 'rgba(0, 0, 0, 0.02)',
      border: '1px dashed var(--md-sys-color-outline)',
      borderRadius: '16px',
      padding: '1rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem',
      marginTop: '0.5rem',
    },
    simBtnGroup: {
      display: 'flex',
      gap: '0.5rem',
    },
    simBtn: {
      flex: 1,
      padding: '0.5rem',
      borderRadius: '10px',
      border: '1px solid var(--md-sys-color-outline-variant)',
      backgroundColor: 'var(--md-sys-color-surface)',
      color: 'var(--md-sys-color-on-surface)',
      fontFamily: 'var(--font-body)',
      fontSize: '0.8rem',
      fontWeight: '700',
      cursor: 'pointer',
      transition: 'all 0.2s',
    }
  };

  // Get status details based on strike counts
  const getStrikeStatus = () => {
    if (strikes === 0) {
      return {
        label: 'Good Standing',
        color: '#137333', // M3 Green
        bg: '#E6F4EA',
        desc: 'You have no system warnings. Keep it up!'
      };
    }
    if (strikes >= 1 && strikes <= 2) {
      return {
        label: 'System Warning',
        color: '#D97706', // M3 Amber
        bg: '#FEF3C7',
        desc: 'Ensure you checkout of seats using the NFC tag.'
      };
    }
    if (strikes >= 3 && strikes <= 4) {
      return {
        label: 'Critical Warning',
        color: '#C5221F', // M3 Red
        bg: '#FCE8E6',
        desc: 'Approaching blacklist status. Avoid missing slots.'
      };
    }
    return {
      label: 'Blacklisted Status',
      color: '#111111', // Solid Black/Crimson
      bg: '#E5E5E5',
      desc: 'Library booking privileges revoked. Visit reception desk.'
    };
  };

  const status = getStrikeStatus();

  return (
    <div style={styles.container}>
      
      {/* 1. M3 STANDARD WARNING BANNER (Shown if strikes > 0 and not dismissed) */}
      {strikes > 0 && !bannerDismissed && (
        <div style={styles.banner} role="alert">
          <div style={styles.bannerHeader}>
            <span style={styles.bannerIcon} aria-hidden="true">⚠️</span>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={styles.bannerTitle}>
                If your strike count exceeds 5, you will be blacklisted and must visit the front counter in person.
              </span>
            </div>
          </div>
          <div style={styles.bannerActions}>
            <button 
              onClick={() => {
                alert('Appeal support requested. Please email fyp-support@graduate.utm.my with check-in receipts.');
              }}
              style={styles.bannerBtnFilled}
            >
              Appeal Strike
            </button>
            <button 
              onClick={() => setBannerDismissed(true)} 
              style={styles.bannerBtn}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.05)'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              Dismiss
            </button>
          </div>
        </div>
      )}

      {/* 2. GREETINGS HEADER CARD */}
      <div className="m3-mobile-card elevated" style={{ borderRadius: '28px' }}>
        <h3 className="m3-title-large" style={{ margin: 0 }}>Hi, Siti Puteri</h3>
        <p className="m3-body-medium" style={{ margin: 0, opacity: 0.9 }}>
          UTM Johor Bahru campus is active. You have 1 active seat reservation today.
        </p>
      </div>

      {/* 3. M3 ELEVATED CARD: STRIKE TRACKER */}
      <div style={{ ...styles.card, ...styles.strikeTracker }} className="m3-mobile-card">
        <h4 className="m3-title-medium" style={{ color: 'var(--md-sys-color-primary-crimson)', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '1px' }}>
          Library Strike Tracker
        </h4>

        {/* Big numeric badge */}
        <div style={styles.badgeContainer}>
          <div style={styles.badgeOuter}></div>
          <div style={{ ...styles.badgeInner, backgroundColor: status.color }}>
            <span style={styles.badgeValue}>{strikes}</span>
            <span style={styles.badgeLimit}>/ 5 MAX</span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          <span style={{ fontSize: '0.9rem', fontWeight: '700', color: status.color, backgroundColor: status.bg, padding: '0.25rem 0.75rem', borderRadius: '12px', display: 'inline-block' }}>
            {status.label}
          </span>
          <p className="m3-body-medium" style={{ color: 'var(--md-sys-color-outline)', marginTop: '0.5rem', fontSize: '0.85rem' }}>
            {status.desc}
          </p>
        </div>

        {/* Dynamic interactive simulator to let users trigger/verify the warning banner instantly */}
        <div style={styles.simControlCard}>
          <p style={{ margin: 0, fontSize: '0.75rem', fontWeight: '700', color: 'var(--md-sys-color-outline)' }}>
            PROTOTYPE STRIKE ADJUSTER
          </p>
          <div style={styles.simBtnGroup}>
            <button 
              onClick={() => {
                setStrikes(prev => Math.max(0, prev - 1));
                setBannerDismissed(false); // Reset banner dismissal
              }} 
              style={styles.simBtn}
            >
              - Remove Strike
            </button>
            <button 
              onClick={() => {
                setStrikes(prev => Math.min(5, prev + 1));
                setBannerDismissed(false); // Reset banner dismissal
              }} 
              style={styles.simBtn}
            >
              + Add Strike
            </button>
          </div>
          <p style={{ margin: 0, fontSize: '0.65rem', color: 'var(--md-sys-color-outline)', fontStyle: 'italic' }}>
            (Adjust strikes to test how the warning banner reacts dynamically)
          </p>
        </div>
      </div>

    </div>
  );
}
