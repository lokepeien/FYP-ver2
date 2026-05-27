import React from 'react';

export default function WorkspaceSidebar({
  targetCanvas,
  setTargetCanvas,
  theme,
  toggleTheme,
  triggerNfcScan,
  logs
}) {
  return (
    <aside class="workspace-sidebar" aria-label="Workspace Prototyping Panel">
      <div class="logo-container">
        <div class="logo-icon" aria-hidden="true">L</div>
        <div class="logo-text">
          <h2>LibraryGo</h2>
          <span>React Shell</span>
        </div>
      </div>

      {/* Switch Design Targets */}
      <div class="control-section">
        <span class="control-title">Design Target Canvases</span>
        <div class="m3-card-control">
          <button 
            onClick={() => setTargetCanvas('mobile')}
            class={`view-btn ${targetCanvas === 'mobile' ? 'active' : ''}`} 
            title="Switch to Student Mobile App Shell"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: '20px', height: '20px', fill: 'currentColor' }}>
              <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
            </svg>
            Student Mobile
          </button>
          
          <button 
            onClick={() => setTargetCanvas('desktop')}
            class={`view-btn ${targetCanvas === 'desktop' ? 'active' : ''}`} 
            title="Switch to Admin Desktop Dashboard Shell"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: '20px', height: '20px', fill: 'currentColor' }}>
              <path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z"/>
            </svg>
            Admin Desktop
          </button>
        </div>
      </div>

      {/* Theme Selection */}
      <div class="control-section">
        <span class="control-title">Workspace Aesthetics</span>
        <div class="m3-card-control">
          <button onClick={toggleTheme} class="theme-toggle-btn" aria-label="Toggle light and dark theme mode">
            <div class="theme-status">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-12.37c-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06c.39-.38.39-1.02 0-1.41zm-12.37 12.37c-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06c.39-.38.39-1.02 0-1.41z"/>
              </svg>
              <span id="theme-label-text">{theme === 'dark' ? 'Dark Theme' : 'Light Theme'}</span>
            </div>
            <div class="switch-pill" aria-hidden="true"></div>
          </button>
        </div>
      </div>

      {/* Prototype Interactions Simulator */}
      <div class="control-section">
        <span class="control-title">Interactive Prototyping</span>
        <div class="m3-card-control sim-console">
          <p class="m3-body-medium" style={{ marginBottom: '0.25rem' }}>NFC Tag Simulation</p>
          <button 
            onClick={triggerNfcScan}
            class="sim-btn" 
            title="Click to trigger simulated NFC seat tap event"
          >
            Tap Mobile NFC
          </button>
          
          <div class="console-log" aria-live="polite">
            {logs.length === 0 ? (
              <span>System idle. Ready for interaction.</span>
            ) : (
              logs.map((log, idx) => (
                <div key={idx} style={{ marginBottom: '2px' }}>{log}</div>
              ))
            )}
          </div>
        </div>
      </div>

      <footer class="workspace-footer">
        <p>LibraryGo React Shell</p>
        <p style={{ marginTop: '0.25rem' }}>Designed for UTM</p>
      </footer>
    </aside>
  );
}
