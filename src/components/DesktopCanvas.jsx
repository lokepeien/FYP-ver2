import React, { useState } from 'react';

export default function DesktopCanvas({ metrics, liveCheckIns }) {
  // Centralized currentView routing inside the Admin Desktop dashboard
  const [currentView, setCurrentView] = useState('overview');

  // Mapped list of Material 3 left-aligned Navigation Drawer items
  const drawerItems = [
    {
      id: 'overview',
      label: 'Overview',
      icon: (
        <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>
      )
    },
    {
      id: 'seats',
      label: 'Seat Map',
      icon: (
        <svg viewBox="0 0 24 24"><path d="M4 11h5V5H4v6zm0 8h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-8h5V5h-5v6zm6-6v6h5V5h-5z"/></svg>
      )
    },
    {
      id: 'tags',
      label: 'NFC Tags',
      icon: (
        <svg viewBox="0 0 24 24"><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 8.25c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75z"/></svg>
      )
    },
    {
      id: 'analytics',
      label: 'Analytics',
      icon: (
        <svg viewBox="0 0 24 24"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>
      )
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: (
        <svg viewBox="0 0 24 24"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>
      )
    }
  ];

  return (
    <div className="desktop-canvas-wrapper">
      
      {/* Left-aligned M3 Navigation Drawer Layout */}
      <nav className="m3-navigation-drawer" aria-label="Librarian Admin Navigation">
        <div className="drawer-header">
          <h3>Librarian Deck</h3>
          <p>UTM Academic Library</p>
        </div>
        
        {drawerItems.map(item => (
          <a 
            key={item.id}
            onClick={() => setCurrentView(item.id)}
            className={`m3-drawer-item ${currentView === item.id ? 'active' : ''}`}
            role="button" 
            tabIndex={0} 
            title={`${item.label} Panel`}
          >
            {item.icon}
            {item.label}
          </a>
        ))}
      </nav>

      {/* Main Desktop Dashboard content view conditioned on currentView */}
      <main className="desktop-workspace">
        
        {/* VIEW A: OVERVIEW */}
        {currentView === 'overview' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%' }}>
            
            {/* Quick Grid Metrics with standard M3 card rounding (28dp equivalent = rounded-3xl / 28px) */}
            <div className="dashboard-grid">
              <div className="m3-desktop-card" style={{ borderRadius: '28px' }}>
                <div className="metric-header">
                  <span>ACTIVE BOOKINGS</span>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L11 13.17 8.41 10.59 7 12l4 4 7-7z"/>
                  </svg>
                </div>
                <div className="metric-value">{metrics.bookings}</div>
                <div className="metric-footer">
                  <span style={{ fontWeight: 700 }}>+12%</span> from yesterday
                </div>
              </div>

              <div className="m3-desktop-card" style={{ borderRadius: '28px' }}>
                <div className="metric-header">
                  <span>TOTAL SEAT UTILIZATION</span>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
                  </svg>
                </div>
                <div className="metric-value">78.5%</div>
                <div className="metric-footer">
                  <span>450 Available desks</span>
                </div>
              </div>

              <div className="m3-desktop-card" style={{ borderRadius: '28px' }}>
                <div className="metric-header">
                  <span>LIVE NFC SCANS</span>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H4V4h16v16zm-8-3c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5z"/>
                  </svg>
                </div>
                <div className="metric-value">{metrics.nfcScans}</div>
                <div className="metric-footer">
                  <span style={{ color: 'green', fontWeight: 700 }}>System Online</span>
                </div>
              </div>
            </div>

            {/* Detailed Grid columns */}
            <div className="desktop-columns">
              <div className="m3-desktop-card" style={{ minHeight: '300px', borderRadius: '28px' }}>
                <h4 className="m3-title-large">Live Seat Management</h4>
                <p className="m3-body-medium" style={{ color: 'var(--md-sys-color-outline)', marginBottom: '1rem' }}>
                  Real-time checkout, NFC registration activity, and occupancy logs.
                </p>
                
                <div className="list-container">
                  {liveCheckIns.map(item => {
                    const initials = item.name.split(' ').map(n => n[0]).join('');
                    return (
                      <div key={item.id} className="list-item" style={{ borderRadius: '12px', animation: 'slide-in-feed 0.4s ease-out forwards' }}>
                        <div className="list-item-info">
                          <div className="list-avatar">{initials}</div>
                          <div>
                            <p className="m3-body-medium" style={{ fontWeight: 600 }}>{item.name}</p>
                            <p className="m3-body-medium" style={{ fontSize: '0.75rem', color: 'var(--md-sys-color-outline)' }}>
                              {item.zone} • {item.seat}
                            </p>
                          </div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <span className="badge-tag crimson">{item.status}</span>
                          <p className="m3-body-medium" style={{ fontSize: '0.7rem', color: 'var(--md-sys-color-outline)', marginTop: '0.25rem' }}>
                            {item.time}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* NFC Health check */}
              <div className="m3-desktop-card" style={{ borderRadius: '28px' }}>
                <h4 className="m3-title-large">Tag Health Registry</h4>
                <p className="m3-body-medium" style={{ color: 'var(--md-sys-color-outline)', marginBottom: '0.5rem' }}>
                  Status tracker of university wide tags.
                </p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '0.5rem' }}>
                  <div style={{ display: 'flex', justifyStyle: 'space-between', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="m3-body-medium">Active NFC Desks</span>
                    <span style={{ fontWeight: 700 }}>642 / 650</span>
                  </div>
                  <div style={{ height: '8px', borderRadius: '4px', backgroundColor: 'var(--md-sys-color-outline-variant)', overflow: 'hidden' }}>
                    <div style={{ width: '98.7%', height: '100%', background: 'linear-gradient(90deg, var(--md-sys-color-primary), var(--md-sys-color-primary-crimson))', borderRadius: '4px' }}></div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', color: 'var(--md-sys-color-outline)' }}>
                    <span>Operational (98.7%)</span>
                    <span>8 errors reported</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* VIEW B: SEAT MAP */}
        {currentView === 'seats' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
            <div className="m3-desktop-card" style={{ borderRadius: '28px' }}>
              <h3 className="m3-headline-medium">Library Seat Grid View</h3>
              <p className="m3-body-medium" style={{ color: 'var(--md-sys-color-outline)' }}>
                Detailed interactive blueprint view of Library levels and occupancy.
              </p>
              
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px dashed var(--md-sys-color-outline)', minHeight: '250px', borderRadius: '12px', marginTop: '1rem' }}>
                <p className="m3-body-large" style={{ color: 'var(--md-sys-color-outline)' }}>[Seat blueprint grid rendering prototype mock]</p>
              </div>
            </div>
          </div>
        )}

        {/* VIEW C: NFC TAG MANAGEMENT */}
        {currentView === 'tags' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
            <div className="m3-desktop-card" style={{ borderRadius: '28px' }}>
              <h3 className="m3-headline-medium">NFC Tag Registry</h3>
              <p className="m3-body-medium" style={{ color: 'var(--md-sys-color-outline)' }}>
                Manage physical tag deployment, serial IDs, and table placements.
              </p>
              <button className="sim-btn" style={{ alignSelf: 'flex-start', width: 'auto', padding: '0.75rem 1.5rem', borderRadius: '12px' }}>
                Register New Tag
              </button>
            </div>
          </div>
        )}

        {/* VIEW D: ANALYTICS */}
        {currentView === 'analytics' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
            <div className="m3-desktop-card" style={{ borderRadius: '28px' }}>
              <h3 className="m3-headline-medium">Occupancy Reports</h3>
              <p className="m3-body-medium" style={{ color: 'var(--md-sys-color-outline)' }}>
                Peak usage reports, daily active check-ins, and study average duration metrics.
              </p>
            </div>
          </div>
        )}

        {/* VIEW E: SETTINGS */}
        {currentView === 'settings' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
            <div className="m3-desktop-card" style={{ borderRadius: '28px' }}>
              <h3 className="m3-headline-medium">Librarian Panel Configuration</h3>
              <p className="m3-body-medium" style={{ color: 'var(--md-sys-color-outline)' }}>
                Set dynamic reservation grace periods, checkout timeouts, and notification options.
              </p>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
