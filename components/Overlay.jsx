export const Overlay = () => {
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
      <div style={{ pointerEvents: "auto", marginBottom: "2rem" }}>
        <button
          onClick={() => {
            const audio = new Audio("https://actions.google.com/sounds/v1/celebrations/cheering_and_clapping.ogg");
            audio.play();
          }}
          style={{
            padding: "1rem 2rem",
            fontSize: "1.2rem",
            fontWeight: "bold",
            background: "#fff",
            color: "#ff595e",
            border: "none",
            borderRadius: "50px",
            cursor: "pointer",
            boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
            transition: "transform 0.2s",
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
          🎵 Play Celebration
        </button>
      </div>
    </div>
  );
};
