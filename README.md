# LibraryGo 📱🏫

LibraryGo is an NFC-based university library seat management application tailored for a premium, fast check-in/checkout user experience. 

This repository sets up the interactive prototyping shell built with **Material 3 UI guidelines** to demonstrate the workflow of both students and administrative staff.

---

## 🎨 Design System & Aesthetics (Material 3)

The application shell implements the **Material 3 Design Guidelines** with the following features:
* **Primary Brand Colors**: Center-aligned on deep crimson and maroon (`#7209B7` and `#B7094C`), representing the UTM university brand.
* **Component Rounding Rules**: 
  * Dialogs & Cards: `28px` corner radius (`--md-shape-corner-extra-large`).
  * Inputs & Buttons: `12px` corner radius (`--md-shape-corner-medium`).
* **Typography Scaling**:
  * Expressive headers use the **Outfit** Google font.
  * Legible content and UI elements use the **Inter** Google font.
* **Theme Adaptability**: Native toggle support for both **Light Mode** and **Dark Mode** with immediate variable mapping.
* **Micro-interactions**: Ripple transitions, hover scales, active tab pill overlays, and smooth layout fade in.

---

## 📱 Architecture & Canvases

The shell contains two high-fidelity design targets:
1. **Student Mobile Canvas**:
   * Housed in a hyper-realistic smartphone frame.
   * Includes a fully-functional **Material 3 Bottom Navigation bar** (Home, Book, NFC Scan, Profile).
   * Interactive **NFC Fast Tap** simulated scanner area.
2. **Admin Desktop Canvas**:
   * Housed in a wide desktop web layout.
   * Features a left-aligned **Material 3 Navigation Drawer** (Overview, Seat Map, NFC Tags, Analytics, Settings).
   * Metric summary cards and active user check-in feeds.

---

## 🧪 Interactive Prototyping Controls

To facilitate real-time user flow demonstration, the layout includes a floating control panel on the left:
* **Canvas Switcher**: Instantly toggles the stage viewport between Mobile and Desktop devices.
* **Theme Switcher**: Shifts the theme between Light Mode and Dark Mode instantly.
* **NFC Tap Simulator**: Clicking "Tap Mobile NFC" triggers a mock student checking into a library desk. This plays an wave ripple animation on the Student's screen, sounds/shows a toast notification, and dynamically appends the transaction to the Admin's live occupancy feed in real-time!

---

## 🚀 How to Run

Since the application is built on a clean, modern vanilla web stack (HTML5, CSS3, ES6 JavaScript), you do not need any compilation or build steps:

1. Double-click `index.html` to open it directly in any browser, or use a local dev server (e.g., Live Server in VS Code).
2. Use the **Workspace Shell** controls on the left to navigate and test active features!
