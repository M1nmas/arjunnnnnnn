export { Overlay };
import { useState } from "react";

const Overlay = ({ started, setStarted }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "2rem",
        alignItems: "center",
      }}
    >


      {!started && (
        <div style={{ pointerEvents: "auto", marginBottom: "20%" }}>
          <button
            onClick={() => {
              const audio = new Audio("/birthday_song.mp3");
              audio.play();
              setStarted(true);
            }}
            style={{
              padding: "1.5rem 3rem",
              fontSize: "1.5rem",
              fontWeight: "bold",
              background: "linear-gradient(135deg, #00b4d8 0%, #0077b6 100%)",
              color: "#fff",
              border: "none",
              borderRadius: "50px",
              cursor: "pointer",
              boxShadow: "0 0 20px rgba(0, 180, 216, 0.5)",
              transition: "all 0.3s ease",
              fontFamily: "'Outfit', sans-serif",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.boxShadow = "0 0 30px rgba(0, 180, 216, 0.8)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 0 20px rgba(0, 180, 216, 0.5)";
            }}
          >
            🐠 Dive In
          </button>
        </div>
      )}
    </div>
  );
};
