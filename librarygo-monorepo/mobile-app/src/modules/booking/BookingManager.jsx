import React, { useState } from 'react';

export default function BookingManager() {
  // Booking Form State Management
  const [area, setArea] = useState('Main Hall Level 2');
  const [timeSlot, setTimeSlot] = useState('10:00 AM - 12:00 PM');
  const [duration, setDuration] = useState('2 Hours');
  
  // Stateful History Pane list of bookings
  const [bookings, setBookings] = useState([
    {
      id: 1,
      area: 'Main Hall Level 2',
      seat: 'Zone A - Seat 42',
      timeSlot: '12:00 PM - 02:00 PM',
      duration: '2 Hours',
      date: 'Today',
      status: 'Active',
      canCancel: true // Current reservation starts in 1 hour (>30 mins limit)
    },
    {
      id: 2,
      area: 'Quiet Study Zone Level 1',
      seat: 'Zone C - Seat 09',
      timeSlot: '08:00 AM - 10:00 AM',
      duration: '2 Hours',
      date: 'Today',
      status: 'Completed',
      canCancel: false
    },
    {
      id: 3,
      area: 'Discussion Lounge Level 1',
      seat: 'Group Pod 04',
      timeSlot: '02:00 PM - 05:00 PM',
      duration: '3 Hours',
      date: 'Yesterday',
      status: 'Completed',
      canCancel: false
    }
  ]);

  // Handle Seat Reservation
  const handleReserveSeat = (e) => {
    e.preventDefault();
    
    // Generate simulated seat placement
    const randomSeatNum = Math.floor(Math.random() * 120) + 1;
    const seatLabel = area.includes('Lounge') || area.includes('Pod')
      ? `Group Pod ${String(randomSeatNum).padStart(2, '0')}`
      : `Zone ${area[0]} - Seat ${randomSeatNum}`;

    const newBooking = {
      id: Date.now(),
      area,
      seat: seatLabel,
      timeSlot,
      duration,
      date: 'Today',
      status: 'Active',
      canCancel: true
    };

    setBookings((prev) => [newBooking, ...prev]);
    alert(`Success! Reserved Seat: ${seatLabel} inside ${area} for ${timeSlot} (${duration})`);
  };

  // Handle Cancellation option
  const handleCancelBooking = (bookingId) => {
    const booking = bookings.find(b => b.id === bookingId);
    if (!booking) return;

    if (!booking.canCancel) {
      alert('Unable to cancel booking: Cancellations only allowed up to 30 minutes before session.');
      return;
    }

    const confirmCancel = window.confirm('Are you sure you want to cancel this reservation?');
    if (confirmCancel) {
      setBookings((prev) => 
        prev.map(b => b.id === bookingId ? { ...b, status: 'Cancelled', canCancel: false } : b)
      );
    }
  };

  // Unified M3 layout spacing
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      gap: '2rem',
    },
    sectionTitle: {
      fontFamily: 'var(--font-headline)',
      fontSize: '1rem',
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      color: 'var(--md-sys-color-primary-crimson)',
      marginBottom: '0.75rem',
      paddingLeft: '0.25rem',
    },
    formCard: {
      backgroundColor: 'var(--md-sys-color-surface)',
      borderRadius: '28px', // M3 Card Rounding (28dp equivalent)
      border: '1px solid var(--md-sys-color-outline-variant)',
      padding: '1.5rem 1.25rem',
      boxShadow: 'var(--md-elevation-1)',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem',
      position: 'relative',
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
      borderRadius: '12px', // M3 Input rounding (12dp equivalent)
      border: '1.5px solid var(--md-sys-color-outline)',
      backgroundColor: 'transparent',
      color: 'var(--md-sys-color-on-background)',
      fontFamily: 'var(--font-body)',
      fontSize: '0.9rem',
      cursor: 'pointer',
      outline: 'none',
      appearance: 'none',
      backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'%2379747E\'%3e%3cpath d=\'M7 10l5 5 5-5z\'/%3e%3c/svg%3e")',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right 12px center',
      backgroundSize: '20px',
      transition: 'border-color 0.2s',
    },
    // M3 Extended Floating Action Button (FAB)
    extendedFab: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.75rem',
      backgroundColor: 'var(--md-sys-color-primary-container-crimson)',
      color: 'var(--md-sys-color-on-primary-container-crimson)',
      border: 'none',
      borderRadius: '16px', // M3 FAB rounding token
      padding: '1rem 1.5rem',
      fontSize: '0.9rem',
      fontWeight: '700',
      fontFamily: 'var(--font-body)',
      cursor: 'pointer',
      boxShadow: 'var(--md-elevation-3)',
      alignSelf: 'center',
      transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
      marginTop: '0.5rem',
    },
    extendedFabHover: {
      boxShadow: 'var(--md-elevation-4)',
      transform: 'scale(1.03)',
      backgroundColor: '#FFE3EC',
    },
    historyList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    },
    historyCard: {
      backgroundColor: 'var(--md-sys-color-surface)',
      borderRadius: '16px', // M3 smaller card outline rounding
      border: '1.5px solid var(--md-sys-color-outline-variant)',
      padding: '1rem 1.25rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem',
      boxShadow: 'none',
      transition: 'border-color 0.2s',
    },
    historyCardActive: {
      borderColor: 'var(--md-sys-color-primary)',
    },
    historyHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    areaTitle: {
      fontSize: '0.9rem',
      fontWeight: '700',
      color: 'var(--md-sys-color-on-surface)',
    },
    seatSubtitle: {
      fontSize: '0.8rem',
      color: 'var(--md-sys-color-outline)',
      fontWeight: '500',
    },
    badge: {
      fontSize: '0.7rem',
      fontWeight: '700',
      padding: '0.25rem 0.5rem',
      borderRadius: '8px',
      textTransform: 'uppercase',
    },
    cancelOption: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.35rem',
      borderTop: '1px solid rgba(0,0,0,0.05)',
      paddingTop: '0.75rem',
      marginTop: '0.25rem',
    },
    cancelBtn: {
      alignSelf: 'flex-start',
      background: 'none',
      border: 'none',
      color: 'var(--md-sys-color-primary-crimson)',
      fontSize: '0.8rem',
      fontWeight: '700',
      cursor: 'pointer',
      padding: '0',
      textDecoration: 'underline',
    },
    cancelBtnDisabled: {
      color: 'var(--md-sys-color-outline)',
      cursor: 'not-allowed',
      textDecoration: 'none',
    },
    microcopy: {
      fontSize: '0.7rem',
      color: 'var(--md-sys-color-outline)',
      fontStyle: 'italic',
      lineHeight: '1rem',
    }
  };

  return (
    <div style={styles.container}>
      
      {/* SECTION A: BOOKING FORM */}
      <div>
        <h3 style={styles.sectionTitle}>Reserve a Seat</h3>
        <form style={styles.formCard} onSubmit={handleReserveSeat}>
          
          {/* Library Area Dropdown */}
          <div style={styles.formGroup}>
            <label style={styles.label}>LIBRARY AREA</label>
            <select 
              value={area} 
              onChange={(e) => setArea(e.target.value)} 
              style={styles.select}
            >
              <option value="Main Hall Level 2">Main Hall Level 2</option>
              <option value="Quiet Study Zone Level 1">Quiet Study Zone Level 1</option>
              <option value="Discussion Lounge Level 1">Discussion Lounge Level 1</option>
              <option value="Postgraduate Zone Level 3">Postgraduate Zone Level 3</option>
            </select>
          </div>

          {/* Time Slots Dropdown */}
          <div style={styles.formGroup}>
            <label style={styles.label}>TIME SLOT</label>
            <select 
              value={timeSlot} 
              onChange={(e) => setTimeSlot(e.target.value)} 
              style={styles.select}
            >
              <option value="08:00 AM - 10:00 AM">08:00 AM - 10:00 AM</option>
              <option value="10:00 AM - 12:00 PM">10:00 AM - 12:00 PM</option>
              <option value="12:00 PM - 02:00 PM">12:00 PM - 02:00 PM</option>
              <option value="02:00 PM - 04:00 PM">02:00 PM - 04:00 PM</option>
              <option value="04:00 PM - 06:00 PM">04:00 PM - 06:00 PM</option>
            </select>
          </div>

          {/* Durations Dropdown */}
          <div style={styles.formGroup}>
            <label style={styles.label}>RESERVATION DURATION</label>
            <select 
              value={duration} 
              onChange={(e) => setDuration(e.target.value)} 
              style={styles.select}
            >
              <option value="1 Hour">1 Hour</option>
              <option value="2 Hours">2 Hours (Standard)</option>
              <option value="3 Hours">3 Hours</option>
              <option value="4 Hours">4 Hours (Max Limit)</option>
            </select>
          </div>

          {/* M3 Extended FAB 'Reserve Seat' */}
          <button 
            type="submit" 
            style={styles.extendedFab}
            onMouseOver={(e) => {
              e.currentTarget.style.boxShadow = styles.extendedFabHover.boxShadow;
              e.currentTarget.style.transform = styles.extendedFabHover.transform;
              e.currentTarget.style.backgroundColor = styles.extendedFabHover.backgroundColor;
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.boxShadow = 'var(--md-elevation-3)';
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.backgroundColor = 'var(--md-sys-color-primary-container-crimson)';
            }}
          >
            {/* Calendar Event Plus icon */}
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm-8-7h2v3h3v2h-3v3h-2v-3H8v-2h3v-3z"/>
            </svg>
            Reserve Seat
          </button>
        </form>
      </div>

      {/* SECTION B: HISTORY PANE */}
      <div>
        <h3 style={styles.sectionTitle}>Booking History</h3>
        <div style={styles.historyList}>
          {bookings.map((booking) => {
            const isActive = booking.status === 'Active';
            const isCancelled = booking.status === 'Cancelled';
            const isCompleted = booking.status === 'Completed';

            let badgeBg = '#E8F0FE';
            let badgeColor = '#1A73E8';
            if (isCancelled) {
              badgeBg = '#FCE8E6';
              badgeColor = '#C5221F';
            } else if (isCompleted) {
              badgeBg = '#E6F4EA';
              badgeColor = '#137333';
            }

            return (
              <div 
                key={booking.id} 
                style={{ 
                  ...styles.historyCard, 
                  ...(isActive ? styles.historyCardActive : {}) 
                }}
              >
                <div style={styles.historyHeader}>
                  <div>
                    <h4 style={styles.areaTitle}>{booking.area}</h4>
                    <span style={styles.seatSubtitle}>{booking.seat} • {booking.date}</span>
                  </div>
                  <span style={{ ...styles.badge, backgroundColor: badgeBg, color: badgeColor }}>
                    {booking.status}
                  </span>
                </div>

                <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem', color: 'var(--md-sys-color-outline)' }}>
                  <span>🕒 {booking.timeSlot}</span>
                  <span>⏳ {booking.duration}</span>
                </div>

                {/* Cancel Booking option with dynamic limits */}
                {isActive && (
                  <div style={styles.cancelOption}>
                    <button 
                      onClick={() => handleCancelBooking(booking.id)}
                      style={{ 
                        ...styles.cancelBtn, 
                        ...(!booking.canCancel ? styles.cancelBtnDisabled : {}) 
                      }}
                      disabled={!booking.canCancel}
                    >
                      Cancel Reservation
                    </button>
                    
                    <p style={styles.microcopy}>
                      ⚠️ Cancellations only allowed up to 30 minutes before session.
                    </p>
                  </div>
                )}
                
                {/* Visual feedback for already cancelled bookings */}
                {isCancelled && (
                  <p style={{ ...styles.microcopy, color: 'var(--md-sys-color-error)', marginTop: '0.25rem' }}>
                    This booking has been cancelled and the slot was released back to UTM library database.
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
