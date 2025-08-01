# AcePlayNation - Login & Registration System

A professional, responsive login and registration system built with HTML, CSS, and JavaScript for the AcePlayNation sports organization website.

## 🚀 Features

### Registration System (`register.html`)
- **Form Fields:**
  - Full Name (letters and spaces only)
  - Email (valid email format)
  - University (minimum 3 characters)
  - Password (strong password requirements)
  - Section (dropdown selection)
  - APU Number (minimum 8 digits)

- **Validation:**
  - Real-time form validation
  - Comprehensive error messages
  - Password strength requirements
  - Input sanitization

- **User Experience:**
  - Password visibility toggle
  - Smooth animations and transitions
  - Loading states
  - Success feedback
  - Auto-redirect to login after registration

### Login System (`login.html`)
- **Form Fields:**
  - Email
  - Password

- **Fixed Credentials:**
  - Email: `admin@aceplay.com`
  - Password: `ace123`

- **Features:**
  - Credential validation
  - Password visibility toggle
  - Error handling with animations
  - Success feedback
  - Auto-redirect to homepage after login

## 🎨 Design Features

- **Modern UI/UX:**
  - Clean, professional design
  - Gradient backgrounds
  - Glassmorphism effects
  - Smooth hover and focus states
  - Responsive design for all devices

- **Animations:**
  - Loading spinners
  - Success pulse animations
  - Error shake animations
  - Smooth transitions

- **Accessibility:**
  - Proper form labels
  - Keyboard navigation support
  - Screen reader friendly
  - High contrast colors

## 📱 Responsive Design

- Mobile-first approach
- Optimized for tablets and desktops
- Flexible layouts
- Touch-friendly interface

## 🔧 Technical Implementation

### Frontend Only
- No frameworks or libraries (except Font Awesome for icons)
- Pure HTML, CSS, and JavaScript
- No backend or database required
- Client-side validation and processing

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Progressive enhancement
- Graceful degradation

## 📁 File Structure

```
FDD_Assignment/
├── index.html          # Main homepage with navigation
├── login.html          # Login page
├── register.html       # Registration page
├── about.html          # About page
├── gallery.html        # Gallery page
├── join.html           # Join page
├── contact.html        # Contact page
├── sponsors.html       # Sponsors page
├── assets/
│   ├── css/
│   │   └── style.css   # Main stylesheet
│   ├── js/
│   │   └── main.js     # Main JavaScript
│   ├── images/         # Image assets
│   └── videos/         # Video assets
└── README.md           # This file
```

## 🚀 Usage

1. **Open the website:**
   - Navigate to `index.html` in your browser
   - Or open any of the HTML files directly

2. **Registration:**
   - Click "Register" in the navigation or "Join Now" button
   - Fill out all required fields
   - Submit the form
   - You'll be redirected to login after successful registration

3. **Login:**
   - Click "Login" in the navigation
   - Use the demo credentials:
     - Email: `admin@aceplay.com`
     - Password: `ace123`
   - You'll be redirected to the homepage after successful login

## 🎯 Key Features Summary

- ✅ Professional, modern design
- ✅ Fully responsive
- ✅ Real-time form validation
- ✅ Password visibility toggle
- ✅ Loading states and animations
- ✅ Error handling with user feedback
- ✅ Auto-redirect functionality
- ✅ No backend dependencies
- ✅ Clean, commented code
- ✅ Accessibility features

## 🔒 Security Notes

This is a frontend-only demonstration system. In a production environment:
- Implement proper backend authentication
- Use HTTPS
- Hash passwords securely
- Implement session management
- Add CSRF protection
- Use environment variables for sensitive data

## 📝 License

This project is created for educational purposes as part of the FDD Assignment. 