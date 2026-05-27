document.addEventListener('DOMContentLoaded', () => {
  
  // --- DOM References ---
  const btnShowMobile = document.getElementById('btn-show-mobile');
  const btnShowDesktop = document.getElementById('btn-show-desktop');
  const mobilePanel = document.getElementById('mobile-panel');
  const desktopPanel = document.getElementById('desktop-panel');
  const stageMainTitle = document.getElementById('stage-main-title');
  const stageSubTitle = document.getElementById('stage-sub-title');
  
  const btnThemeToggle = document.getElementById('btn-theme-toggle');
  const themeLabelText = document.getElementById('theme-label-text');
  
  const btnSimNfc = document.getElementById('btn-sim-nfc');
  const simLog = document.getElementById('sim-log');
  const toast = document.getElementById('toast');
  const toastText = document.getElementById('toast-text');
  const nfcPulse = document.getElementById('nfc-pulse');
  const mNfcTapTarget = document.getElementById('m-nfc-tap-target');
  
  const dMetricBookings = document.getElementById('d-metric-bookings');
  const dMetricNfc = document.getElementById('d-metric-nfc');
  const adminLiveFeed = document.getElementById('admin-live-feed');

  // --- Switch Target Canvas (Mobile vs Desktop) ---
  btnShowMobile.addEventListener('click', () => {
    btnShowMobile.classList.add('active');
    btnShowDesktop.classList.remove('active');
    
    mobilePanel.classList.add('active');
    desktopPanel.classList.remove('active');
    
    stageMainTitle.textContent = 'Student Mobile App Shell';
    stageSubTitle.textContent = 'Material 3 • Mobile Bezel Container • Dynamic Views';
  });

  btnShowDesktop.addEventListener('click', () => {
    btnShowDesktop.classList.add('active');
    btnShowMobile.classList.remove('active');
    
    desktopPanel.classList.add('active');
    mobilePanel.classList.remove('active');
    
    stageMainTitle.textContent = 'Admin Desktop Web Dashboard';
    stageSubTitle.textContent = 'Material 3 • Left-Aligned Navigation Drawer • Responsive Grid';
  });

  // --- Mobile Tab Navigation ---
  const mobileNavItems = document.querySelectorAll('.m3-bottom-nav-item');
  const mobileTabViews = document.querySelectorAll('.mobile-tab-view');

  mobileNavItems.forEach(item => {
    item.addEventListener('click', () => {
      // Remove active from all items
      mobileNavItems.forEach(nav => nav.classList.remove('active'));
      // Add active to current
      item.classList.add('active');
      
      // Hide all sub-views
      mobileTabViews.forEach(view => view.style.styleOpacity = '0');
      mobileTabViews.forEach(view => view.style.display = 'none');
      
      // Show corresponding view
      const targetViewId = item.getAttribute('data-tab');
      const targetView = document.getElementById(targetViewId);
      if (targetView) {
        targetView.style.display = 'flex';
        setTimeout(() => {
          targetView.style.opacity = '1';
        }, 10);
      }
      
      logAction(`Mobile Canvas navigated to: ${item.querySelector('span').textContent}`);
    });
  });

  // --- Desktop Navigation Drawer ---
  const drawerItems = document.querySelectorAll('.m3-drawer-item');
  const desktopTabViews = document.querySelectorAll('.desktop-tab-view');

  drawerItems.forEach(item => {
    item.addEventListener('click', () => {
      // Remove active from all items
      drawerItems.forEach(nav => nav.classList.remove('active'));
      // Add active to current
      item.classList.add('active');
      
      // Hide all sub-views
      desktopTabViews.forEach(view => view.style.display = 'none');
      
      // Show corresponding view
      const targetViewId = item.getAttribute('data-tab');
      const targetView = document.getElementById(targetViewId);
      if (targetView) {
        targetView.style.display = 'flex';
      }
      
      logAction(`Desktop Dashboard navigated to: ${item.textContent.trim()}`);
    });
  });

  // --- Theme Toggle System ---
  let isDarkMode = false;
  btnThemeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      themeLabelText.textContent = 'Dark Theme';
      logAction('Workspace theme set to DARK.');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      themeLabelText.textContent = 'Light Theme';
      logAction('Workspace theme set to LIGHT.');
    }
  });

  // --- Interactive NFC Tap Simulation ---
  let simulatedScanCount = 0;
  
  function triggerNfcScan() {
    simulatedScanCount++;
    logAction(`NFC scan triggered: Desk Tag [ID: NFC-UTM-A42]`);
    
    // Play wave pulse animation on mobile screen if in view
    if (nfcPulse) {
      nfcPulse.style.display = 'block';
      setTimeout(() => {
        nfcPulse.style.display = 'none';
      }, 2000);
    }
    
    // Play scale effect on the icon wrapper
    if (mNfcTapTarget) {
      mNfcTapTarget.style.transform = 'scale(1.2) rotate(15deg)';
      setTimeout(() => {
        mNfcTapTarget.style.transform = '';
      }, 300);
    }

    // Dynamic library metrics update
    if (dMetricBookings) {
      const currentBookings = parseInt(dMetricBookings.textContent);
      dMetricBookings.textContent = currentBookings + 1;
    }
    if (dMetricNfc) {
      const currentNfc = parseInt(dMetricNfc.textContent);
      dMetricNfc.textContent = currentNfc + 1;
    }

    // Generate random UTM student details for live feed demonstration
    const names = ['Amina Yasmin', 'Karthik Raja', 'Zulhilmi Haris', 'Chin Wei Kang', 'Sarah Connor'];
    const ids = ['220561', '220756', '220412', '220993', '220188'];
    const desks = ['Desk 12', 'Desk 09', 'Desk 56', 'Desk 112', 'Desk 23'];
    const levels = ['Level 2 • Main Hall', 'Level 1 • Quiet Area', 'Level 3 • Group Study', 'Level 2 • Corridor A', 'Level 1 • Discuss Zone'];
    
    const randomIdx = Math.floor(Math.random() * names.length);
    const selectedName = names[randomIdx];
    const selectedId = ids[randomIdx];
    const selectedDesk = desks[randomIdx];
    const selectedLevel = levels[randomIdx];
    const initials = selectedName.split(' ').map(n => n[0]).join('');

    // Trigger gorgeous toast message
    if (toast) {
      toastText.textContent = `${selectedName} checked in at ${selectedDesk}`;
      toast.classList.add('show');
      
      setTimeout(() => {
        toast.classList.remove('show');
      }, 4000);
    }

    // Append to live feed in Admin dashboard
    if (adminLiveFeed) {
      const feedItem = document.createElement('div');
      feedItem.className = 'list-item';
      feedItem.style.animation = 'slide-in-feed 0.4s ease-out forwards';
      feedItem.innerHTML = `
        <div class="list-item-info">
          <div class="list-avatar">${initials}</div>
          <div>
            <p class="m3-body-medium" style="font-weight: 600;">${selectedName}</p>
            <p class="m3-body-medium" style="font-size: 0.75rem; color: var(--md-sys-color-outline);">${selectedLevel} • ${selectedDesk}</p>
          </div>
        </div>
        <div style="text-align: right;">
          <span class="badge-tag crimson">NFC Check-In</span>
          <p class="m3-body-medium" style="font-size: 0.7rem; color: var(--md-sys-color-outline); margin-top: 0.25rem;">Just now</p>
        </div>
      `;
      
      // Prepend to show latest on top
      adminLiveFeed.insertBefore(feedItem, adminLiveFeed.firstChild);
      
      // Keep only up to 4 items in listing
      if (adminLiveFeed.children.length > 4) {
        adminLiveFeed.removeChild(adminLiveFeed.lastChild);
      }
    }
  }

  // Bind simulation buttons
  if (btnSimNfc) {
    btnSimNfc.addEventListener('click', triggerNfcScan);
  }
  
  if (mNfcTapTarget) {
    mNfcTapTarget.addEventListener('click', triggerNfcScan);
  }

  // --- Logger helper ---
  function logAction(msg) {
    const time = new Date().toLocaleTimeString();
    simLog.innerHTML = `[${time}] ${msg}<br>` + simLog.innerHTML;
  }
});
