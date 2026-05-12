import React, { useState } from "react";
import "./../styles/ColorHarmonizer.scss";

interface ColorObject {
  type: string;
  val: string;
}

const ColorHarmonizer: React.FC = () => {
  const [hue, setHue] = useState<number>(180);

  const randomHue = () => {
    setHue(Math.floor(Math.random() * 360));
  };

  const getHarmonizedColors = (hue: number): ColorObject[] => {
    return [
      { type: "Base", val: `hsl(${hue}, 70%, 50%)` },
      { type: "Complementario", val: `hsl(${(hue + 180) % 360}, 70%, 50%)` },
      { type: "Triada A", val: `hsl(${(hue + 120) % 360}, 70%, 50%)` },
      { type: "Triada B", val: `hsl(${(hue + 240) % 360}, 70%, 50%)` },
    ];
  };

  const colors = getHarmonizedColors(hue);

  return (
    <section className="harmonies">
      <h2>Cubo de Armonía</h2>

      <input
        type="range"
        min="0"
        max="360"
        value={hue}
        onChange={(e) => setHue(parseInt(e.target.value))}
      />

      <button onClick={randomHue}>Random</button>

      <div className="scene">
        <div className="cube3d">
          <div
            className="face front"
            style={{ background: colors[0].val }}
          >
            {colors[0].type}
          </div>

          <div
            className="face back"
            style={{ background: colors[1].val }}
          >
            {colors[1].type}
          </div>

          <div
            className="face right"
            style={{ background: colors[2].val }}
          >
            {colors[2].type}
          </div>

          <div
            className="face left"
            style={{ background: colors[3].val }}
          >
            {colors[3].type}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColorHarmonizer;