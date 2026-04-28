# aora-mobile-app

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) [![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=black)](https://reactjs.org/) [![React Native](https://img.shields.io/badge/React%20Native-0.81.5-61DAFB?logo=react&logoColor=black)](https://reactnative.dev/) [![Expo](https://img.shields.io/badge/Expo-54.0.0-1B1F23?logo=expo&logoColor=white)](https://expo.dev/)

Aora is a mobile application designed to provide an intuitive user experience for managing various tasks within a cohesive interface. It leverages modern technologies to ensure efficient performance and a seamless deployment process. The application is built with a focus on user-centric design and responsive layouts, making it suitable for a wide range of mobile devices.

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
   npm start
   ```

4. **Run on your device:**
   - For Android:
     ```bash
     npm run android
     ```
   - For iOS:
     ```bash
     npm run ios
     ```
   - For web:
     ```bash
     npm run web
     ```

5. **Configure environment variables:**
   If any environment variables are needed, create a `.env` file in the root directory and define your variables there.

6. **Running tests (if applicable):**
   Currently, there are no defined test scripts in the package.json. You can add testing frameworks like Jest based on your requirements.

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

## Environment Variables
| Variable | Description | Required |
|----------|-------------|----------|
<!-- If no .env.example file is present, this section is skipped. -->

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.