import React, { useState } from 'react';
import Login from '../../librarygo-monorepo/mobile-app/src/modules/auth/Login';
import Profile from '../../librarygo-monorepo/mobile-app/src/modules/auth/Profile';
import DashboardHome from '../../librarygo-monorepo/mobile-app/src/modules/dashboard/DashboardHome';
import BookingManager from '../../librarygo-monorepo/mobile-app/src/modules/booking/BookingManager';
import CheckInTimer from '../../librarygo-monorepo/mobile-app/src/modules/checkin/CheckInTimer';
import UtilitiesModule from '../../librarygo-monorepo/mobile-app/src/modules/utilities/UtilitiesModule';

export default function MobileCanvas({ triggerNfcScan, isNfcActive }) {
  // Centralized currentView routing inside the Student Mobile App
  const [currentView, setCurrentView] = useState('home');
  const [user, setUser] = useState(null); // Keeps track of logged-in student user

  // Array mapped list of Material 3 Bottom Navigation bar items (now including Utilities!)
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
      id: 'utilities',
      label: 'Utils',
      icon: (
        <svg viewBox="0 0 24 24" style={{ width: '22px', height: '22px', fill: 'currentColor' }}>
          <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z"/>
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
            
            {/* If user is not logged in, force Login screen view first */}
            {!user ? (
              <Login onLoginSuccess={(u) => setUser(u)} />
            ) : (
              <>
                {/* VIEW A: HOME VIEW (Strike Tracker & Standard Banner) */}
                {currentView === 'home' && <DashboardHome />}

                {/* VIEW B: BOOK SEAT VIEW (Reservation forms & FAB) */}
                {currentView === 'book' && <BookingManager />}

                {/* VIEW C: NFC SCANNER VIEW (Countdown Timer & Circular SVG progress ring) */}
                {currentView === 'scan' && <CheckInTimer />}

                {/* VIEW D: UTILITIES VIEW (Announcements, Complaints, Lost & Found grid) */}
                {currentView === 'utilities' && <UtilitiesModule />}

                {/* VIEW E: PROFILE VIEW (Avatar uploads & College metrics) */}
                {currentView === 'profile' && (
                  <Profile studentData={user} onLogout={() => setUser(null)} />
                )}
              </>
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
