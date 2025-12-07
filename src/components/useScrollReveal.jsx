import { useEffect } from "react";

export default function useScrollReveal(selector = ".skills-category") {
  useEffect(() => {
    const cards = Array.from(document.querySelectorAll(selector));
    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;

            const index = cards.indexOf(el);
            const columns = window.innerWidth >= 1024 ? 3 : 2; 
            const row = Math.floor(index / columns);

            const delay = row * 0.2; // 0.2s entre chaque ligne

            el.style.setProperty("--delay", `${delay}s`);
            el.classList.add("in-view");

            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    cards.forEach((c) => observer.observe(c));
  }, [selector]);
}
