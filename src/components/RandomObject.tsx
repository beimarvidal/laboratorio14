import React, { useState } from "react";
import "./../styles/RandomObject.scss";

type ObjectType =
  | "cube"
  | "sphere"
  | "diamond"
  | "triangle";

interface RandomShape {
  type: ObjectType;
  color: string;
  size: number;
  rotate: number;
}

const RandomObject: React.FC = () => {
  const generateObject = (): RandomShape => {
    const types: ObjectType[] = [
      "cube",
      "sphere",
      "diamond",
      "triangle",
    ];

    const randomHue = Math.floor(Math.random() * 360);

    return {
      type: types[Math.floor(Math.random() * types.length)],
      color: `hsl(${randomHue}, 70%, 50%)`,
      size: Math.floor(Math.random() * 80) + 120,
      rotate: Math.floor(Math.random() * 360),
    };
  };

  const [leftObject, setLeftObject] =
    useState<RandomShape>(() => generateObject());

  const [rightObject, setRightObject] =
    useState<RandomShape>(() => generateObject());

  const randomize = () => {
    setLeftObject(generateObject());
    setRightObject(generateObject());
  };

  return (
    <section className="random-section">
      <h2>Objeto Random</h2>

      <div className="objects-container">

        {/* OBJETO IZQUIERDO */}
        <div
          className={`shape ${leftObject.type}`}
          style={{
            background: leftObject.color,
            width:
              leftObject.type !== "triangle"
                ? `${leftObject.size}px`
                : "0px",

            height:
              leftObject.type !== "triangle"
                ? `${leftObject.size}px`
                : "0px",

            transform: `rotate(${leftObject.rotate}deg)`,

            borderBottom:
              leftObject.type === "triangle"
                ? `${leftObject.size}px solid ${leftObject.color}`
                : "",
          }}
        />

        {/* OBJETO DERECHO */}
        <div
          className={`shape ${rightObject.type}`}
          style={{
            background: rightObject.color,
            width:
              rightObject.type !== "triangle"
                ? `${rightObject.size}px`
                : "0px",

            height:
              rightObject.type !== "triangle"
                ? `${rightObject.size}px`
                : "0px",

            transform: `rotate(${rightObject.rotate}deg)`,

            borderBottom:
              rightObject.type === "triangle"
                ? `${rightObject.size}px solid ${rightObject.color}`
                : "",
          }}
        />

      </div>

      <button onClick={randomize}>
        Generar Random
      </button>
    </section>
  );
};

export default RandomObject;