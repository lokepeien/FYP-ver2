import React, { useState } from 'react';

export default function MobileCanvas({ triggerNfcScan, isNfcActive }) {
  // Centralized currentView routing inside the Student Mobile App
  const [currentView, setCurrentView] = useState('home');

  // Array mapped list of Material 3 Bottom Navigation bar items
  const navItems = [
    {
      id: 'home',
      label: 'Home',
      icon: (
        <svg viewBox="0 0 24 24" style={{ width: '22px', height: '22px', fill: 'currentColor' }}>
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </svg>
      )
    },
    {
      id: 'book',
      label: 'Book',
      icon: (
        <svg viewBox="0 0 24 24" style={{ width: '22px', height: '22px', fill: 'currentColor' }}>
          <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm-7-3h5v-5h-5v5z"/>
        </svg>
      )
    },
    {
      id: 'scan',
      label: 'NFC Scan',
      icon: (
        <svg viewBox="0 0 24 24" style={{ width: '22px', height: '22px', fill: 'currentColor' }}>
          <path d="M4 20h16V4H4v16zm4-12h8v8H8V8z"/>
        </svg>
      )
    },
    {
      id: 'profile',
      label: 'Profile',
      icon: (
        <svg viewBox="0 0 24 24" style={{ width: '22px', height: '22px', fill: 'currentColor' }}>
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      )
    }
  ];

  return (
    <div className="mobile-canvas-wrapper">
      <article className="smartphone-frame">
        <div className="smartphone-island" aria-hidden="true">
          <div className="island-camera"></div>
          <div className="island-speaker"></div>
        </div>
        
        {/* Smartphone Screen Contents */}
        <div className="smartphone-screen">
          
          {/* Simulated Screen Status Bar */}
          <div className="screen-status-bar" aria-hidden="true">
            <span className="status-time">12:30 PM</span>
            <div className="status-icons">
              <svg className="status-icon" viewBox="0 0 24 24" style={{ width: '14px', height: '14px', fill: 'currentColor' }}><path d="M2 22h20V2z"/></svg>
              <svg className="status-icon" viewBox="0 0 24 24" style={{ width: '14px', height: '14px', fill: 'currentColor' }}><path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 19.4c-3.9-5.1-3.3-12.4 1.8-16.7 5.1-4.3 12.7-3.6 17 1.5l-1.8 1.8c-2.3-1.8-5.2-3-8.35-3zM12 21c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8l1.45 1.45c-.1.44-.15.9-.15 1.35 0 2.21 1.79 4 4 4 .45 0 .91-.05 1.35-.15l1.45 1.45c-.83.45-1.79.7-2.8.7z"/></svg>
              <svg className="status-icon" viewBox="0 0 24 24" style={{ width: '14px', height: '14px', fill: 'currentColor' }}><path d="M17 5H3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM15 15H5V9h10v6z"/></svg>
            </div>
          </div>

          {/* Scrollable screen views based on currentView state */}
          <div className="mobile-app-content">
            
            {/* VIEW A: HOME VIEW */}
            {currentView === 'home' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
                <div className="m3-mobile-card elevated" style={{ borderRadius: '28px' }}>
                  <h3 className="m3-title-large">Welcome to LibraryGo</h3>
                  <p className="m3-body-medium">Locate your seat, scan the NFC tag on the desk, and check-in instantly.</p>
                </div>

                <div className="nfc-wave-container" style={{ borderRadius: '28px' }}>
                  {isNfcActive && <div className="nfc-wave-active"></div>}
                  <div className="nfc-icon-wrapper" onClick={triggerNfcScan} title="Simulate NFC Desk Scan">
                    <svg viewBox="0 0 24 24">
                      <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H4V4h16v16zm-8-3c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0-8c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"/>
                    </svg>
                  </div>
                  <h4 className="m3-title-medium">NFC Quick Scanner</h4>
                  <p className="m3-body-medium" style={{ opacity: 0.8, marginTop: '0.25rem' }}>Tap your smartphone near any desk tag to check-in or checkout.</p>
                </div>

                <div className="m3-mobile-card" style={{ borderRadius: '28px' }}>
                  <h4 className="m3-title-medium">Your Bookings</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.25rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--md-sys-color-outline-variant)', paddingBottom: '0.5rem' }}>
                      <div>
                        <p className="m3-body-medium" style={{ fontWeight: 600 }}>Zone A - Seat 42</p>
                        <p className="m3-body-medium" style={{ fontSize: '0.75rem', color: 'var(--md-sys-color-outline)' }}>Main Hall (Level 2)</p>
                      </div>
                      <span className="badge-tag crimson">NFC Checked</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* VIEW B: BOOK SEAT VIEW */}
            {currentView === 'book' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
                <h3 className="m3-headline-medium">Book a Seat</h3>
                <p className="m3-body-medium">Choose a level or reserve a hot desk directly.</p>
                
                <div className="m3-mobile-card" style={{ borderRadius: '28px' }}>
                  <h4 className="m3-title-medium">Zone Selector</h4>
                  <p className="m3-body-medium">Select preferred quiet zones or group discussion zones.</p>
                  <button className="m3-btn-mobile" style={{ marginTop: '0.5rem', borderRadius: '12px' }}>Select Zone</button>
                </div>
              </div>
            )}

            {/* VIEW C: NFC SCANNER VIEW */}
            {currentView === 'scan' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', alignItems: 'center', justifyContent: 'center', textAlign: 'center', minHeight: '250px' }}>
                <div className="nfc-icon-wrapper" onClick={triggerNfcScan} style={{ width: '80px', height: '80px' }}>
                  <svg viewBox="0 0 24 24" width="40" height="40"><path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H4V4h16v16zm-8-3c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0-8c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"/></svg>
                </div>
                <h3 className="m3-headline-medium">Simulated Tag Scanner</h3>
                <p className="m3-body-medium">Align device with NFC Tag placed on study tables.</p>
                <p className="m3-body-medium" style={{ color: 'var(--md-sys-color-primary)', fontWeight: 700, marginTop: '0.5rem' }}>[Tap NFC scanner or Workspace Control simulation trigger to scan]</p>
              </div>
            )}

            {/* VIEW D: PROFILE VIEW */}
            {currentView === 'profile' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
                <h3 className="m3-headline-medium">Student Profile</h3>
                <div className="m3-mobile-card" style={{ alignItems: 'center', textAlign: 'center', borderRadius: '28px' }}>
                  <div className="list-avatar" style={{ width: '60px', height: '60px', fontSize: '1.5rem' }}>SP</div>
                  <h4 className="m3-title-medium" style={{ marginTop: '0.5rem' }}>Siti Puteri</h4>
                  <p className="m3-body-medium" style={{ color: 'var(--md-sys-color-outline)' }}>UTM Student ID: 220914</p>
                </div>
              </div>
            )}

          </div>

          {/* Material 3 Bottom Navigation bar - Stateful Mapped items */}
          <nav className="m3-bottom-nav" aria-label="Student Mobile Navigation">
            {navItems.map(item => (
              <a 
                key={item.id}
                onClick={() => setCurrentView(item.id)}
                className={`m3-bottom-nav-item ${currentView === item.id ? 'active' : ''}`} 
                role="button" 
                tabIndex={0} 
                title={`${item.label} Tab`}
              >
                <div className="bottom-nav-icon-container">
                  {item.icon}
                </div>
                <span>{item.label}</span>
              </a>
            ))}
          </nav>

          {/* Smartphone Bezel Bottom Pill indicator */}
          <div className="smartphone-bezel-bottom" aria-hidden="true">
            <div className="home-indicator"></div>
          </div>

        </div>
      </article>
    </div>
  );
}
