import React, { useState, useRef } from 'react';

export default function Profile({ studentData, onLogout }) {
  // Mock student profile stats
  const [student, setStudent] = useState({
    name: studentData?.name || 'Siti Puteri',
    email: studentData?.email || 'sitiputeri@graduate.utm.my',
    id: '220914',
    college: 'Kolej Tun Dr. Ismail (KTDI)',
    strikes: 0,
    bookingsCount: 14,
    attendance: '98.5%'
  });

  const [avatarUrl, setAvatarUrl] = useState(null);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);

  // Simulate M3 image upload experience
  const handleAvatarClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploading(true);
      
      // Simulate API delay upload
      setTimeout(() => {
        const fakeUrl = URL.createObjectURL(file);
        setAvatarUrl(fakeUrl);
        setUploading(false);
      }, 1200);
    }
  };

  const handleLogoutSubmit = () => {
    if (onLogout) {
      onLogout();
    }
  };

  // M3 28px extra large corner for cards/profile dialog containers
  // M3 12px corner for small inputs, buttons, badges
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      maxWidth: '340px',
      margin: '0 auto',
      padding: '1.5rem 1.25rem',
      backgroundColor: 'var(--md-sys-color-surface)',
      borderRadius: '28px',
      border: '1px solid var(--md-sys-color-outline-variant)',
      boxShadow: 'var(--md-elevation-1)',
      alignItems: 'center',
    },
    avatarWrapper: {
      position: 'relative',
      cursor: 'pointer',
      width: '92px',
      height: '92px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'var(--md-sys-color-primary-container-crimson)',
      color: 'var(--md-sys-color-on-primary-container-crimson)',
      fontFamily: 'var(--font-headline)',
      fontSize: '2.25rem',
      fontWeight: '800',
      boxShadow: 'var(--md-elevation-2)',
      border: '3px solid var(--md-sys-color-primary-crimson)',
      overflow: 'hidden',
      transition: 'transform 0.2s ease',
    },
    avatarHover: {
      transform: 'scale(1.04)',
    },
    avatarImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    uploadOverlay: {
      position: 'absolute',
      bottom: '0',
      left: '0',
      right: '0',
      height: '24px',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      color: '#FFFFFF',
      fontSize: '0.65rem',
      fontWeight: '700',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      letterSpacing: '0.5px',
    },
    loadingSpinner: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '0.85rem',
      fontWeight: '600',
    },
    studentName: {
      fontFamily: 'var(--font-headline)',
      fontSize: '1.25rem',
      fontWeight: '700',
      color: 'var(--md-sys-color-on-background)',
      marginTop: '1rem',
      marginBottom: '0.25rem',
      textAlign: 'center',
    },
    studentId: {
      fontSize: '0.8rem',
      color: 'var(--md-sys-color-outline)',
      marginBottom: '1.5rem',
      fontWeight: '500',
    },
    detailsCard: {
      width: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.02)',
      border: '1px solid var(--md-sys-color-outline-variant)',
      borderRadius: '16px',
      padding: '1rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem',
      marginBottom: '1.5rem',
    },
    detailsRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: '0.85rem',
      borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
      paddingBottom: '0.5rem',
    },
    label: {
      color: 'var(--md-sys-color-outline)',
      fontWeight: '500',
    },
    value: {
      color: 'var(--md-sys-color-on-surface)',
      fontWeight: '700',
    },
    badge: {
      padding: '0.25rem 0.6rem',
      borderRadius: '12px',
      fontSize: '0.75rem',
      fontWeight: '700',
      backgroundColor: '#E6F4EA',
      color: '#137333',
    },
    logoutBtn: {
      width: '100%',
      padding: '0.75rem',
      borderRadius: '12px',
      border: '1.5px solid var(--md-sys-color-primary-crimson)',
      backgroundColor: 'transparent',
      color: 'var(--md-sys-color-primary-crimson)',
      fontFamily: 'var(--font-body)',
      fontWeight: '700',
      fontSize: '0.9rem',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      transition: 'all 0.2s ease',
    },
    logoutBtnHover: {
      backgroundColor: 'var(--md-sys-color-primary-container-crimson)',
    }
  };

  return (
    <div style={styles.container}>
      
      {/* Hidden File Input for Picture Upload */}
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileChange} 
        accept="image/*" 
        style={{ display: 'none' }} 
      />

      {/* Stateful Avatar circle */}
      <div 
        onClick={handleAvatarClick} 
        style={styles.avatarWrapper}
        title="Click to Upload Profile Photo"
      >
        {avatarUrl ? (
          <img src={avatarUrl} alt="Student Profile Avatar" style={styles.avatarImage} />
        ) : (
          <span>{student.name.split(' ').map(n => n[0]).join('')}</span>
        )}
        
        {uploading && (
          <div style={styles.loadingSpinner}>
            <span>Up...</span>
          </div>
        )}
        
        <div style={styles.uploadOverlay}>UPLOAD</div>
      </div>

      <h3 style={styles.studentName}>{student.name}</h3>
      <span style={styles.studentId}>UTM Matrix ID: {student.id}</span>

      {/* Info Dashboard Table (M3 Card styled) */}
      <div style={styles.detailsCard}>
        <div style={styles.detailsRow}>
          <span style={styles.label}>College Residence</span>
          <span style={{ ...styles.value, fontSize: '0.8rem' }}>{student.college}</span>
        </div>
        <div style={styles.detailsRow}>
          <span style={styles.label}>Active System Strikes</span>
          <span style={{ ...styles.badge, backgroundColor: student.strikes > 0 ? '#FCE8E6' : '#E6F4EA', color: student.strikes > 0 ? '#C5221F' : '#137333' }}>
            {student.strikes} Strikes
          </span>
        </div>
        <div style={styles.detailsRow}>
          <span style={styles.label}>Seat Bookings Count</span>
          <span style={styles.value}>{student.bookingsCount} reservations</span>
        </div>
        <div style={{ ...styles.detailsRow, borderBottom: 'none', paddingBottom: '0' }}>
          <span style={styles.label}>Attendance Rate</span>
          <span style={{ ...styles.value, color: 'var(--md-sys-color-primary)' }}>{student.attendance}</span>
        </div>
      </div>

      {/* Logout button */}
      <button 
        onClick={handleLogoutSubmit}
        style={styles.logoutBtn}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.logoutBtnHover.backgroundColor}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
      >
        {/* Logout exit door icon */}
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
        </svg>
        Sign Out Profile
      </button>

    </div>
  );
}
