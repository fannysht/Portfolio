// Background Diplomes page

import React, { useEffect, useRef } from "react";

export default function StarsBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const stars = [];

    const colors = [
      "rgba(100, 200, 180, OP)", // vert menthe clair
      "rgba(120, 220, 200, OP)", // vert turquoise doux
      "rgba(140, 240, 220, OP)", // bleu-vert pastel
      "rgba(180, 255, 230, OP)", // vert très clair
    ];

    const createStars = (count) => {
      for (let i = 0; i < count; i++) {
        const star = document.createElement("div");

        // Taille aléatoire 1 à 6px
        const size = 1 + Math.random() * 7;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        // Couleur aléatoire avec opacité
        const opacity = 0.2 + Math.random() * 0.6;
        const color = colors[Math.floor(Math.random() * colors.length)].replace(
          "OP",
          opacity
        );
        star.style.background = color;

        // Position initiale aléatoire
        star.style.position = "absolute";
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.borderRadius = "50%";

        // Glow
        star.style.boxShadow = `0 0 ${size}px ${color}`;

        // Durée et trajectoire aléatoire
        const duration = 60 + Math.random() * 60; // 60 à 120s
        star.style.animation = `fallStar ${duration}s linear infinite`;

        const offsetX = Math.random() * 100 - 50; // -50 à 50px horizontal
        star.style.transform = `translateX(0px)`;

        container.appendChild(star);
        stars.push({ node: star, offsetX });
      }

      let startTime = null;
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const elapsed = (timestamp - startTime) / 1000;

        stars.forEach(({ node, offsetX }) => {
          const speed = parseFloat(node.style.animationDuration) || 40;
          let top = (parseFloat(node.style.top) || 0) + (100 / speed) * 0.016; // déplacement vertical
          if (top > 100) top = -5;
          node.style.top = `${top}%`;

          node.style.transform = `translateX(${
            Math.sin(elapsed + offsetX) * 20
          }px)`;
        });

        requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    };

    createStars(200); // nombre total d’étoiles

    return () => {
      stars.forEach(({ node }) => container.removeChild(node));
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        overflow: "hidden",
        zIndex: 0,
      }}
    ></div>
  );
}
