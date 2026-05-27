import React, { useState, useEffect } from 'react';
import WorkspaceSidebar from './components/WorkspaceSidebar';
import MobileCanvas from './components/MobileCanvas';
import DesktopCanvas from './components/DesktopCanvas';

export default function App() {
  // Global Workspace Configuration states
  const [targetCanvas, setTargetCanvas] = useState('mobile');
  const [theme, setTheme] = useState('light');
  const [logs, setLogs] = useState(['System initialized. Ready.']);
  
  // Interactive Simulation Data states
  const [metrics, setMetrics] = useState({ bookings: 312, nfcScans: 88 });
  const [isNfcActive, setIsNfcActive] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  
  const [liveCheckIns, setLiveCheckIns] = useState([
    {
      id: 1,
      name: 'Siti Puteri',
      zone: 'Main Library Level 2',
      seat: 'Zone A (Seat 42)',
      status: 'NFC Check-In',
      time: 'Just now'
    },
    {
      id: 2,
      name: 'Ahmad Muaz',
      zone: 'Discussion Zone Level 1',
      seat: 'HotDesk 08',
      status: 'Reserved',
      time: '12 mins ago'
    }
  ]);

  // Synchronize document attribute with theme state
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Helper log emitter
  const appendLog = (msg) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs((prev) => [`[${timestamp}] ${msg}`, ...prev.slice(0, 15)]);
  };

  // Switch Theme Toggle
  const toggleTheme = () => {
    setTheme((prev) => {
      const nextTheme = prev === 'light' ? 'dark' : 'light';
      appendLog(`Workspace theme set to ${nextTheme.toUpperCase()}.`);
      return nextTheme;
    });
  };

  // Simulated NFC Seat Tap interaction
  const triggerNfcScan = () => {
    setIsNfcActive(true);
    appendLog('NFC scan triggered: Desk Tag [ID: NFC-UTM-A42]');
    
    // Play wave pulse animation on mobile screen for 2s
    setTimeout(() => {
      setIsNfcActive(false);
    }, 2000);

    // Update global statistics count
    setMetrics((prev) => ({
      bookings: prev.bookings + 1,
      nfcScans: prev.nfcScans + 1
    }));

    // Mock student demographic database lists
    const names = ['Amina Yasmin', 'Karthik Raja', 'Zulhilmi Haris', 'Chin Wei Kang', 'Sarah Connor'];
    const desks = ['Desk 12', 'Desk 09', 'Desk 56', 'Desk 112', 'Desk 23'];
    const levels = ['Level 2 • Main Hall', 'Level 1 • Quiet Area', 'Level 3 • Group Study', 'Level 2 • Corridor A', 'Level 1 • Discuss Zone'];
    
    const randomIdx = Math.floor(Math.random() * names.length);
    const selectedName = names[randomIdx];
    const selectedDesk = desks[randomIdx];
    const selectedLevel = levels[randomIdx];

    // Trigger toast overlay notification
    setToastMessage(`${selectedName} checked in at ${selectedDesk}`);
    
    // Prepend to live check-ins listing
    setLiveCheckIns((prev) => [
      {
        id: Date.now(),
        name: selectedName,
        zone: selectedLevel,
        seat: selectedDesk,
        status: 'NFC Check-In',
        time: 'Just now'
      },
      ...prev.slice(0, 3) // Maintain up to 4 items max
    ]);
  };

  // Clear toast after time duration runs
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage(null);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  return (
    <>
      {/* Workspace Sidebar Controller */}
      <WorkspaceSidebar
        targetCanvas={targetCanvas}
        setTargetCanvas={(canvas) => {
          setTargetCanvas(canvas);
          appendLog(`Canvas toggled to ${canvas.toUpperCase()} view.`);
        }}
        theme={theme}
        toggleTheme={toggleTheme}
        triggerNfcScan={triggerNfcScan}
        logs={logs}
      />

      {/* Main Screen Sandbox stage */}
      <main className="workspace-stage" aria-label="Main Prototyping Sandbox">
        
        {/* Dynamic header updates details based on active canvas target */}
        <header className="stage-header">
          <div className="stage-title">
            <h1>
              {targetCanvas === 'mobile' 
                ? 'Student Mobile App Canvas' 
                : 'Admin Desktop Web Dashboard'}
            </h1>
            <p>
              {targetCanvas === 'mobile'
                ? 'Material 3 • Mobile Bezel Container • Dynamic Tab Views'
                : 'Material 3 • Left-Aligned Navigation Drawer • Occupancy Feed'}
            </p>
          </div>
          <div className="status-badge" role="status">
            <div className="status-indicator-dot" aria-hidden="true"></div>
            Active React Prototyping
          </div>
        </header>

        {/* Stateful Conditional View Rendering */}
        {targetCanvas === 'mobile' ? (
          <MobileCanvas 
            triggerNfcScan={triggerNfcScan} 
            isNfcActive={isNfcActive} 
          />
        ) : (
          <DesktopCanvas 
            metrics={metrics} 
            liveCheckIns={liveCheckIns} 
          />
        )}

      </main>

      {/* Custom Material 3 Simulator Toast */}
      <div className={`simulation-toast ${toastMessage ? 'show' : ''}`} role="alert" aria-live="polite">
        <div style={{ fontSize: '1.5rem' }} aria-hidden="true">📱</div>
        <div>
          <p className="m3-title-medium" style={{ margin: 0, fontSize: '0.9rem' }}>Simulated NFC Scan Successful</p>
          <p className="m3-body-medium" style={{ margin: 0, fontSize: '0.8rem', opacity: 0.85 }}>{toastMessage}</p>
        </div>
      </div>
    </>
  );
}
