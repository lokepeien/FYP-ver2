import React, { useState } from 'react';

export default function UtilitiesModule() {
  const [activeTab, setActiveTab] = useState('announcements');
  
  // Tab A States: Announcement list and Sort toggle
  const [sortLatest, setSortLatest] = useState(true);
  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      title: 'Extended Library Opening Hours',
      desc: 'UTM library will remain open until 12:00 AM daily during the exam period from June 1st to June 20th.',
      date: 'Today',
      badge: 'Important',
      badgeColor: '#BA1A1A',
      badgeBg: '#FFEAE9'
    },
    {
      id: 2,
      title: 'NFC Seat Check-In Policy',
      desc: 'Remember to tap in within 5 minutes of your booking start time to avoid reservation auto-release.',
      date: 'Yesterday',
      badge: 'Reminder',
      badgeColor: '#1A73E8',
      badgeBg: '#E8F0FE'
    },
    {
      id: 3,
      title: 'Level 3 Quiet Zone Upgrade',
      desc: 'Renovation completed! Seat bookings are now open for the postgraduate study room.',
      date: '3 days ago',
      badge: 'Updates',
      badgeColor: '#137333',
      badgeBg: '#E6F4EA'
    }
  ]);

  // Tab B States: Submit Complaint Form
  const [facilityType, setFacilityType] = useState('Power Outlet');
  const [description, setDescription] = useState('');
  const [attachedFileName, setAttachedFileName] = useState('');
  const [ticketSubmitted, setTicketSubmitted] = useState(false);

  // Tab C States: Lost and Found items grid
  const [lostCatalog, setLostCatalog] = useState([
    {
      id: 1,
      title: 'UTM Matric Card',
      desc: 'Blue UTM undergraduate student ID card belonging to Nurul Aisha.',
      location: 'Main Level 2 • Desk A12',
      status: 'Custody',
      statusColor: '#D97706',
      statusBg: '#FEF3C7',
      emoji: '💳'
    },
    {
      id: 2,
      title: 'Wireless Earbuds Case',
      desc: 'Black AirPods charging case found near the discussion pod.',
      location: 'Discussion Lounge • Pod 03',
      status: 'Custody',
      statusColor: '#D97706',
      statusBg: '#FEF3C7',
      emoji: '🎧'
    },
    {
      id: 3,
      title: 'Calculus Textbook',
      desc: 'Advanced Calculus textbook with custom handwritten study notes.',
      location: 'Postgraduate Area • Level 3',
      status: 'Claimed',
      statusColor: '#137333',
      statusBg: '#E6F4EA',
      emoji: '📘'
    },
    {
      id: 4,
      title: 'Scientific Calculator',
      desc: 'Casio ClassWiz calculator. Contact reception desk to retrieve.',
      location: 'Quiet Study • Desk C45',
      status: 'Custody',
      statusColor: '#D97706',
      statusBg: '#FEF3C7',
      emoji: '🧮'
    }
  ]);

  // Dynamic announcement sort toggle
  const handleSortToggle = () => {
    setSortLatest(!sortLatest);
    setAnnouncements((prev) => [...prev].reverse());
  };

  // Simulate complaint ticket submission
  const handleComplaintSubmit = (e) => {
    e.preventDefault();
    if (!description.trim()) {
      alert('Please fill out the issue description.');
      return;
    }
    setTicketSubmitted(true);
  };

  // Simulate file clip attachment trigger
  const handleFileAttach = () => {
    const fakeFiles = ['photo_outlet_faulty.jpg', 'broken_seat_A12.png', 'nfc_tag_unresponsive.jpg'];
    const idx = Math.floor(Math.random() * fakeFiles.length);
    setAttachedFileName(fakeFiles[idx]);
    alert(`File "${fakeFiles[idx]}" attached successfully!`);
  };

  // Material 3 roundings: 12px for inputs/buttons, 28px for cards
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      gap: '1rem',
    },
    tabBar: {
      display: 'flex',
      justifyContent: 'space-around',
      borderBottom: '1px solid var(--md-sys-color-outline-variant)',
      paddingBottom: '0.25rem',
      marginBottom: '0.5rem',
    },
    tabItem: {
      background: 'none',
      border: 'none',
      color: 'var(--md-sys-color-outline)',
      fontFamily: 'var(--font-body)',
      fontSize: '0.85rem',
      fontWeight: '700',
      cursor: 'pointer',
      padding: '0.5rem 0.25rem',
      position: 'relative',
      transition: 'color 0.2s',
    },
    tabItemActive: {
      color: 'var(--md-sys-color-primary)',
    },
    tabIndicator: {
      position: 'absolute',
      bottom: '0',
      left: '10%',
      width: '80%',
      height: '3px',
      borderRadius: '3px 3px 0 0',
      backgroundColor: 'var(--md-sys-color-primary)',
    },
    // Filter chip styling
    filterChip: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.35rem',
      alignSelf: 'flex-start',
      backgroundColor: 'transparent',
      border: '1.5px solid var(--md-sys-color-outline)',
      borderRadius: '8px',
      padding: '0.35rem 0.75rem',
      fontSize: '0.75rem',
      fontWeight: '600',
      fontFamily: 'var(--font-body)',
      color: 'var(--md-sys-color-on-surface)',
      cursor: 'pointer',
      transition: 'all 0.2s',
      marginBottom: '1rem',
    },
    filterChipActive: {
      backgroundColor: 'var(--md-sys-color-primary-container)',
      borderColor: 'var(--md-sys-color-primary)',
      color: 'var(--md-sys-color-on-primary-container)',
    },
    listContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem',
    },
    listItem: {
      backgroundColor: 'var(--md-sys-color-surface)',
      borderRadius: '16px',
      border: '1.5px solid var(--md-sys-color-outline-variant)',
      padding: '1rem 1.25rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
    },
    badge: {
      alignSelf: 'flex-start',
      fontSize: '0.7rem',
      fontWeight: '700',
      padding: '0.15rem 0.5rem',
      borderRadius: '6px',
    },
    annTitle: {
      fontSize: '0.9rem',
      fontWeight: '700',
      color: 'var(--md-sys-color-on-surface)',
    },
    annDesc: {
      fontSize: '0.8rem',
      color: 'var(--md-sys-color-outline)',
      lineHeight: '1.1rem',
    },
    annDate: {
      fontSize: '0.7rem',
      color: 'var(--md-sys-color-outline)',
      fontWeight: '500',
      alignSelf: 'flex-end',
      marginTop: '0.25rem',
    },
    // Form component
    form: {
      backgroundColor: 'var(--md-sys-color-surface)',
      borderRadius: '28px',
      border: '1px solid var(--md-sys-color-outline-variant)',
      padding: '1.5rem 1.25rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem',
      boxShadow: 'var(--md-elevation-1)',
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.35rem',
    },
    label: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.75rem',
      fontWeight: '600',
      color: 'var(--md-sys-color-outline)',
      paddingLeft: '0.25rem',
    },
    select: {
      width: '100%',
      padding: '0.75rem 1rem',
      borderRadius: '12px',
      border: '1.5px solid var(--md-sys-color-outline)',
      backgroundColor: 'transparent',
      color: 'var(--md-sys-color-on-background)',
      fontFamily: 'var(--font-body)',
      fontSize: '0.9rem',
      outline: 'none',
      appearance: 'none',
      backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'%2379747E\'%3e%3cpath d=\'M7 10l5 5 5-5z\'/%3e%3c/svg%3e")',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right 12px center',
      backgroundSize: '20px',
    },
    // M3 Filled text area
    textareaContainer: {
      position: 'relative',
    },
    textarea: {
      width: '100%',
      minHeight: '120px',
      padding: '0.75rem 1rem',
      borderRadius: '12px',
      border: '1.5px solid var(--md-sys-color-outline)',
      backgroundColor: 'var(--md-sys-color-surface-variant)',
      color: 'var(--md-sys-color-on-background)',
      fontFamily: 'var(--font-body)',
      fontSize: '0.9rem',
      outline: 'none',
      resize: 'none',
      transition: 'border-color 0.2s',
    },
    attachClip: {
      position: 'absolute',
      right: '12px',
      bottom: '12px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--md-sys-color-primary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    submitBtn: {
      width: '100%',
      padding: '0.8rem',
      borderRadius: '12px',
      border: 'none',
      backgroundColor: 'var(--md-sys-color-primary-crimson)',
      color: '#FFFFFF',
      fontFamily: 'var(--font-body)',
      fontWeight: '700',
      fontSize: '0.9rem',
      cursor: 'pointer',
      transition: 'all 0.2s',
      boxShadow: '0 4px 8px rgba(183, 9, 76, 0.2)',
      marginTop: '0.5rem',
    },
    // Grid system for Catalog
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1rem',
      width: '100%',
    },
    gridCard: {
      backgroundColor: 'var(--md-sys-color-surface)',
      borderRadius: '16px',
      border: '1.5px solid var(--md-sys-color-outline-variant)',
      padding: '1rem 0.75rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      alignItems: 'center',
      textAlign: 'center',
    },
    gridEmoji: {
      fontSize: '2.5rem',
      width: '64px',
      height: '64px',
      borderRadius: '12px',
      backgroundColor: 'rgba(0, 0, 0, 0.03)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '0.25rem',
    },
    gridTitle: {
      fontSize: '0.85rem',
      fontWeight: '700',
      color: 'var(--md-sys-color-on-surface)',
      lineHeight: '1.1rem',
    },
    gridDesc: {
      fontSize: '0.7rem',
      color: 'var(--md-sys-color-outline)',
      lineHeight: '0.9rem',
      minHeight: '36px',
    },
    gridLocation: {
      fontSize: '0.7rem',
      fontWeight: '600',
      color: 'var(--md-sys-color-primary-crimson)',
    }
  };

  return (
    <div style={styles.container}>
      
      {/* Dynamic Sub Tab Selector Bar */}
      <nav style={styles.tabBar} aria-label="Utilities Subviews">
        <button 
          onClick={() => setActiveTab('announcements')} 
          style={{ ...styles.tabItem, ...(activeTab === 'announcements' ? styles.tabItemActive : {}) }}
        >
          Announcements
          {activeTab === 'announcements' && <div style={styles.tabIndicator}></div>}
        </button>
        <button 
          onClick={() => setActiveTab('complaints')} 
          style={{ ...styles.tabItem, ...(activeTab === 'complaints' ? styles.tabItemActive : {}) }}
        >
          Report Issue
          {activeTab === 'complaints' && <div style={styles.tabIndicator}></div>}
        </button>
        <button 
          onClick={() => setActiveTab('catalog')} 
          style={{ ...styles.tabItem, ...(activeTab === 'catalog' ? styles.tabItemActive : {}) }}
        >
          Lost & Found
          {activeTab === 'catalog' && <div style={styles.tabIndicator}></div>}
        </button>
      </nav>

      {/* ---------------- TAB A: ANNOUNCEMENTS FEED ---------------- */}
      {activeTab === 'announcements' && (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          
          {/* M3 Filter Chip header at the top */}
          <button 
            onClick={handleSortToggle}
            style={{ 
              ...styles.filterChip, 
              ...(sortLatest ? styles.filterChipActive : {}) 
            }}
          >
            {sortLatest && (
              // Check tick icon
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" style={{ marginRight: '2px' }}>
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
            )}
            Sort by Latest
          </button>

          {/* Clean list structure using M3 List Items */}
          <div style={styles.listContainer}>
            {announcements.map((item) => (
              <article key={item.id} style={styles.listItem}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ ...styles.badge, color: item.badgeColor, backgroundColor: item.badgeBg }}>
                    {item.badge}
                  </span>
                  <span style={styles.annDate}>{item.date}</span>
                </div>
                <h4 style={styles.annTitle}>{item.title}</h4>
                <p style={styles.annDesc}>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      )}

      {/* ---------------- TAB B: SUBMIT COMPLAINT FORM ---------------- */}
      {activeTab === 'complaints' && (
        <div>
          {ticketSubmitted ? (
            <div style={styles.form} className="m3-mobile-card">
              <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎫</div>
                <h4 style={{ color: 'var(--md-sys-color-primary)', marginBottom: '0.5rem' }}>Ticket Created Successfully</h4>
                <p className="m3-body-medium" style={{ color: 'var(--md-sys-color-outline)', fontSize: '0.85rem' }}>
                  Complaint logged for <strong>{facilityType}</strong>. UTM library engineers have been notified.
                </p>
                <button 
                  onClick={() => {
                    setTicketSubmitted(false);
                    setDescription('');
                    setAttachedFileName('');
                  }}
                  style={styles.submitBtn}
                >
                  Create Another Ticket
                </button>
              </div>
            </div>
          ) : (
            <form style={styles.form} onSubmit={handleComplaintSubmit} className="m3-mobile-card">
              <h4 style={{ ...styles.annTitle, fontSize: '1rem', marginBottom: '-0.25rem' }}>Report Broken Facility</h4>
              
              {/* Select dropdown */}
              <div style={styles.formGroup}>
                <label style={styles.label}>FACILITY CATEGORY</label>
                <select 
                  value={facilityType}
                  onChange={(e) => setFacilityType(e.target.value)}
                  style={styles.select}
                >
                  <option value="Power Outlet">Faulty Power Outlet</option>
                  <option value="NFC Table Tag">Unresponsive NFC Tag</option>
                  <option value="Broken Desk/Chair">Damaged Table / Chair</option>
                  <option value="Air Conditioning">AC / Temperature Issues</option>
                  <option value="Lighting Fault">Dim or Flickering Light</option>
                </select>
              </div>

              {/* Multi-line M3 Filled text field description */}
              <div style={styles.formGroup}>
                <label style={styles.label}>ISSUE DESCRIPTION</label>
                <div style={styles.textareaContainer}>
                  <textarea 
                    placeholder="Describe the library issue in detail (e.g. Desk numbers, exact location, behavior)"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    style={styles.textarea}
                    required
                  />
                  {/* File attachment clip icon overlay */}
                  <button 
                    type="button"
                    onClick={handleFileAttach}
                    style={styles.attachClip}
                    title="Simulate Photo/File Attachment"
                  >
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                      <path d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-3.31 2.69-6 6-6s6 2.69 6 6v10c0 4.42-3.58 8-8 8s-8-3.58-8-8V4h2v11c0 3.31 2.69 6 6 6s6-2.69 6-6V5c0-2.21-1.79-4-4-4s-4 1.79-4 4v12.5c0 1.1.9 2 2 2s2-.9 2-2V6h2z"/>
                    </svg>
                  </button>
                </div>
                {attachedFileName && (
                  <p style={{ ...styles.annDate, color: '#137333', alignSelf: 'flex-start', marginTop: '0.25rem', fontWeight: '700' }}>
                    📎 Attached: {attachedFileName}
                  </p>
                )}
              </div>

              <button type="submit" style={styles.submitBtn}>
                Submit Complaint Ticket
              </button>
            </form>
          )}
        </div>
      )}

      {/* ---------------- TAB C: LOST & FOUND CATALOG ---------------- */}
      {activeTab === 'catalog' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h4 style={{ ...styles.annTitle, fontSize: '1rem', marginBottom: '-0.25rem' }}>Active Item Directory</h4>
          <p className="m3-body-medium" style={{ color: 'var(--md-sys-color-outline)', marginTop: '-0.75rem', fontSize: '0.8rem' }}>
            Browse items found in library levels. If you claim ownership, present proof at the main reception.
          </p>

          {/* Image-centric M3 Grid Layout */}
          <div style={styles.grid}>
            {lostCatalog.map((item) => (
              <div key={item.id} style={styles.gridCard}>
                <div style={styles.gridEmoji} aria-hidden="true">
                  {item.emoji}
                </div>
                <h5 style={styles.gridTitle}>{item.title}</h5>
                <p style={styles.gridDesc}>{item.desc}</p>
                <span style={styles.gridLocation}>{item.location}</span>
                <span 
                  style={{ 
                    ...styles.badge, 
                    color: item.statusColor, 
                    backgroundColor: item.statusBg,
                    marginTop: '0.5rem',
                    alignSelf: 'center' 
                  }}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
