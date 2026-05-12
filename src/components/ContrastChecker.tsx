import React, { useState } from "react";
import "./../styles/ContrastChecker.scss";

const ContrastChecker: React.FC = () => {
  const [bgColor, setBgColor] = useState<string>("#6f1179");

  const randomColor = () => {
    const randomHue = Math.floor(Math.random() * 360);
    setBgColor(`hsl(${randomHue}, 70%, 50%)`);
  };

  return (
    <section className="contrast-tool">
      <h2>Contraste en Esfera</h2>

      <input
        type="color"
        value={bgColor.startsWith("#") ? bgColor : "#6f1179"}
        onChange={(e) => setBgColor(e.target.value)}
      />

      <button onClick={randomColor}>Esfera Random</button>

      <div className="preview-box sphere" style={{ background: bgColor }}>
        <p style={{ color: "#fff" }}>Texto blanco</p>
        <p style={{ color: "#000" }}>Texto negro</p>
      </div>

      <p>Color actual: {bgColor}</p>
    </section>
  );
};

export default ContrastChecker;