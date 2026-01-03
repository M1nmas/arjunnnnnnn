# 🌊 Ocean Theme Birthday Wish

An immersive, interactive 3D birthday experience built with **React Three Fiber**.

![Ocean Theme Preview](https://via.placeholder.com/800x400?text=Ocean+Theme+Birthday+Preview)

## ✨ Features

- **🐠 Interactive "Dive In" Experience**: The scene and music are triggered by a user interaction, ensuring a seamless start.
- **🎈 3D Floating Bubbles**: Custom-styled 3D balloons that float like bubbles in an underwater current.
- **🎵 Atmospheric Audio**: Plays a celebration song upon entry.
- **🌊 Deep Ocean Atmosphere**:
  - Custom fog and lighting for depth.
  - "Night" environment preset for beautiful reflections.
  - Dynamic background gradients.
- **🎨 Glassmorphism UI**: Modern, frosted-glass styling for the wishes card.

## 🛠️ Tech Stack

- **[React](https://react.dev/)**: UI Library.
- **[React Three Fiber (R3F)](https://docs.pmnd.rs/react-three-fiber/)**: 3D Renderer for React.
- **[Drei](https://github.com/pmndrs/drei)**: Useful helpers for R3F (OrbitControls, Text3D, Environment).
- **[Vite](https://vitejs.dev/)**: Fast build tool and dev server.

## 🚀 Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```

3.  **Build for Production**:
    ```bash
    npm run build
    ```

## 📂 Project Structure

- `src/components/Experience.jsx`: Main 3D scene (Lights, Controls).
- `src/components/Overlay.jsx`: HTML UI layer (Button, Wishes Card).
- `src/components/Balloons.jsx`: Logic for generating and animating 3D balloons.
- `src/components/Text3D.jsx`: 3D Text rendering.
- `public/birthday_song.mp3`: Background audio file.

---
Made with 💙 and React Three Fiber.
