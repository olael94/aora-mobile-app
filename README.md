# aora-mobile-app

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) [![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=black)](https://reactjs.org/) [![React Native](https://img.shields.io/badge/React%20Native-0.81.5-61DAFB?logo=react&logoColor=black)](https://reactnative.dev/) [![Expo](https://img.shields.io/badge/Expo-54.0.0-1B1F23?logo=expo&logoColor=white)](https://expo.dev/)

Aora is a full-stack mobile video sharing app built with React Native and Expo. Users can create accounts, sign in, and browse an AI-generated video feed. The app features a trending videos section, bookmarks, a search screen, user profiles, and the ability to upload original video content. Built with Appwrite as the backend for authentication, database, and file storage, and styled with NativeWind (Tailwind CSS for React Native).

Built as part of the [JavaScript Mastery React Native Course for Beginners](https://www.youtube.com/watch?v=ZBCUegTZF7M) for CS-370 Mobile Development at Ensign College. The code implementation had to be modified due to technologies discrepancies.

## Features
- User authentication and authorization
- Dynamic tab navigation for easy access to different sections
- Search functionality to quickly find content
- Media handling capabilities, including video and image support
- Adaptive UI for both iOS and Android platforms
- Support for background audio playback and picture-in-picture mode

## Technologies Used
- JavaScript
- React
- React Native
- Expo
- Babel
- TailwindCSS
- Various Expo libraries (e.g., expo-av, expo-image-picker)

## Prerequisites
- Node.js (version 14 or higher)
- npm (comes with Node.js)
- Expo CLI (installed globally using npm)

## How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/aora-mobile-app.git
   cd aora-mobile-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npx expo start -c
   ```

4. **Download ExpoGo app:**
   - Google Play (Android)
     https://play.google.com/store/apps/details?id=host.exp.exponent
   - App Store (iOS)
     https://apps.apple.com/app/expo-go/id982107779


5. **Scan the QR code with ExpoGo:**
   Scan the QR code displayed in the terminal or browser to run the app on your mobile device.


6. **Look for the Aora app loaded in the app:**
   The app should now be installed and ready to use.

## Project Structure
```
app/                                    # Main application directory
    (auth)/                              # Authentication related components
    (tabs)/                              # Tab navigation components
    search/                              # Search functionality components
assets/                                  # Asset files
    fonts/                               # Font files
    icons/                               # Icon files
    images/                              # Image files
components/                              # Reusable UI components
constants/                               # Constants for the app
context/                                 # Context API for state management
lib/                                     # Utility functions and libraries
package.json                             # Project manifest file
```

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.