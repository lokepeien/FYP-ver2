import React, { useState } from 'react';

export default function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [forgotPasswordMode, setForgotPasswordMode] = useState(false);
  const [recoveryEmail, setRecoveryEmail] = useState('');
  const [recoverySuccess, setRecoverySuccess] = useState(false);

  // Validate UTM Student email domain
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Email address is required.');
      return;
    }

    if (!email.toLowerCase().endsWith('@graduate.utm.my')) {
      setError('Please use a valid UTM student email ending in @graduate.utm.my');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    // Success handshake trigger
    if (onLoginSuccess) {
      onLoginSuccess({ email, name: 'Siti Puteri' });
    }
  };

  // Simulated Recovery handler
  const handleRecoverySubmit = (e) => {
    e.preventDefault();
    if (!recoveryEmail.toLowerCase().endsWith('@graduate.utm.my')) {
      setError('Please use a valid UTM student email ending in @graduate.utm.my');
      return;
    }
    setError('');
    setRecoverySuccess(true);
  };

  // M3 Rounding tokens: 12px for inputs/buttons, 28px for card containers
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      maxWidth: '340px',
      margin: '0 auto',
      padding: '2rem 1.25rem',
      backgroundColor: 'var(--md-sys-color-surface)',
      borderRadius: '28px', // M3 28dp card corner
      border: '1px solid var(--md-sys-color-outline-variant)',
      boxShadow: 'var(--md-elevation-1)',
    },
    header: {
      textAlign: 'center',
      marginBottom: '2rem',
    },
    title: {
      fontFamily: 'var(--font-headline)',
      fontSize: '1.75rem',
      fontWeight: '700',
      background: 'linear-gradient(90deg, var(--md-sys-color-primary-crimson), var(--md-sys-color-primary))',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      marginBottom: '0.5rem',
    },
    subtitle: {
      fontSize: '0.85rem',
      color: 'var(--md-sys-color-outline)',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem',
    },
    inputGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.35rem',
      position: 'relative',
    },
    label: {
      fontFamily: 'var(--font-body)',
      fontSize: '0.75rem',
      fontWeight: '600',
      color: 'var(--md-sys-color-primary-crimson)',
      paddingLeft: '0.25rem',
    },
    input: {
      width: '100%',
      padding: '0.75rem 1rem',
      borderRadius: '12px', // M3 12dp container corner
      border: '1px solid var(--md-sys-color-outline)',
      backgroundColor: 'transparent',
      color: 'var(--md-sys-color-on-background)',
      fontFamily: 'var(--font-body)',
      fontSize: '0.9rem',
      outline: 'none',
      transition: 'all 0.2s ease',
    },
    inputActive: {
      border: '2px solid var(--md-sys-color-primary)',
    },
    passwordToggle: {
      position: 'absolute',
      right: '12px',
      bottom: '10px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--md-sys-color-outline)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    forgotLink: {
      alignSelf: 'flex-end',
      background: 'none',
      border: 'none',
      color: 'var(--md-sys-color-primary)',
      fontSize: '0.8rem',
      fontWeight: '600',
      cursor: 'pointer',
      textDecoration: 'none',
      marginTop: '-0.5rem',
      transition: 'color 0.2s',
    },
    submitBtn: {
      padding: '0.8rem',
      borderRadius: '12px', // M3 12dp button corner
      border: 'none',
      backgroundColor: 'var(--md-sys-color-primary-crimson)',
      color: '#FFFFFF',
      fontFamily: 'var(--font-body)',
      fontWeight: '700',
      fontSize: '0.9rem',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      boxShadow: '0 4px 8px rgba(183, 9, 76, 0.2)',
      marginTop: '0.5rem',
    },
    errorText: {
      color: 'var(--md-sys-color-error)',
      fontSize: '0.75rem',
      fontWeight: '500',
      paddingLeft: '0.25rem',
    },
    backBtn: {
      alignSelf: 'center',
      background: 'none',
      border: 'none',
      color: 'var(--md-sys-color-outline)',
      fontSize: '0.8rem',
      fontWeight: '600',
      cursor: 'pointer',
      marginTop: '1rem',
    }
  };

  // FORGOT PASSWORD RECOVERY INTERFACE
  if (forgotPasswordMode) {
    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>Recover Password</h2>
          <p style={styles.subtitle}>Enter your UTM student email to retrieve password reset link.</p>
        </div>

        {recoverySuccess ? (
          <div style={{ textAlign: 'center', padding: '1rem 0' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📧</div>
            <h4 style={{ color: 'var(--md-sys-color-primary)', marginBottom: '0.5rem' }}>Email Sent Successfully!</h4>
            <p className="m3-body-medium" style={{ color: 'var(--md-sys-color-outline)', fontSize: '0.85rem' }}>
              Check your inbox at <strong>{recoveryEmail}</strong> for recovery steps.
            </p>
            <button 
              onClick={() => {
                setForgotPasswordMode(false);
                setRecoverySuccess(false);
                setRecoveryEmail('');
              }}
              style={styles.submitBtn}
            >
              Back to Login
            </button>
          </div>
        ) : (
          <form style={styles.form} onSubmit={handleRecoverySubmit}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>UTM STUDENT EMAIL</label>
              <input 
                type="email" 
                placeholder="username@graduate.utm.my"
                value={recoveryEmail}
                onChange={(e) => setRecoveryEmail(e.target.value)}
                style={styles.input}
                required
              />
            </div>
            
            {error && <span style={styles.errorText}>{error}</span>}
            
            <button type="submit" style={styles.submitBtn}>
              Send Recovery Link
            </button>

            <button 
              type="button" 
              onClick={() => {
                setForgotPasswordMode(false);
                setError('');
              }}
              style={styles.backBtn}
            >
              Back to Login
            </button>
          </form>
        )}
      </div>
    );
  }

  // STANDARD M3 LOGIN SCREEN INTERFACE
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>Student Login</h2>
        <p style={styles.subtitle}>LibraryGo Portal • UTM Johor Bahru</p>
      </div>

      <form style={styles.form} onSubmit={handleSubmit}>
        
        {/* Email input field */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>EMAIL ADDRESS</label>
          <input 
            type="email" 
            placeholder="username@graduate.utm.my"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
        </div>

        {/* Password input field */}
        <div style={styles.inputGroup}>
          <label style={styles.label}>PASSWORD</label>
          <input 
            type={showPassword ? 'text' : 'password'} 
            placeholder="Enter secure password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ ...styles.input, paddingRight: '2.5rem' }}
            required
          />
          <button 
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            style={styles.passwordToggle}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              // Eye-Slash Icon
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M12 17c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1v2c0 .55.45 1 1 1zm0-14C6.48 3 2 7.48 2 13s4.48 10 10 10 10-4.48 10-10S17.52 3 12 3zm0 18c-4.41 0-8-3.59-8-8 0-1.48.41-2.86 1.12-4.06l10.94 10.94C14.86 20.59 13.48 21 12 21zm6.88-4.06L7.94 5.99C9.14 5.28 10.52 4.9 12 4.9c4.41 0 8 3.59 8 8 0 1.48-.41 2.86-1.12 4.04z"/>
              </svg>
            ) : (
              // Eye Icon
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
              </svg>
            )}
          </button>
        </div>

        <button 
          type="button" 
          onClick={() => {
            setForgotPasswordMode(true);
            setError('');
          }}
          style={styles.forgotLink}
        >
          Forgot Password?
        </button>

        {error && <span style={styles.errorText}>{error}</span>}

        <button type="submit" style={styles.submitBtn}>
          Sign In
        </button>
      </form>
    </div>
  );
}
