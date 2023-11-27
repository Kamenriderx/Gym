const BodyFat = () => {
    return (
      <div
        style={{
          display: "flex",
          height:"100vh",
          width:"100%"
        }}
      >
        <div style={{
        }}>
          <div
            style={{
              background:
                "radial-gradient(ellipse at center, #87CEEB, transparent 50%)",
              width:"50%",
              height:"100%",
              backgroundColor: "#333",
            }}
          >
            <img
              style={{
                objectFit: "cover",
                width: "100%",
              }}
              src="https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fs5kiAPPclAV4z2s7qj2x-%2Fimages%2Fbody-fat-level%2FFROM_20_TO_24.png&w=256&q=75"
              alt=""
            />
          </div>
        </div>
        <div style={{ color: "white", backgroundColor: "#444",width:"50%",height:"100%" }}>
          <h2>Elige tu nivel de grasa</h2>
        </div>
      </div>
    );
  };
  
  export default BodyFat;