import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./LandingPage.css";

export default function LandingPage() {
  useEffect(() => {
    const landingDiv = document.querySelector(".landing-div");
    const particles = [];

    // Create 50 particles
    for (let i = 0; i < 50; i++) {
      const p = document.createElement("span");
      p.className = "particle";
      p.style.top = `${Math.random() * 100}%`;
      p.style.left = `${Math.random() * 100}%`;
      const size = Math.random() * 3 + 2;
      p.style.width = `${size}px`;
      p.style.height = `${size}px`;
      p.style.opacity = Math.random();

      // Random delay for twinkle animation
      p.style.setProperty("--rand", Math.random());

      landingDiv.appendChild(p);
      particles.push(p);
    }

    // Move particles subtly based on cursor
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      particles.forEach((p, i) => {
        p.style.transform = `translate(${x * (i / 50)}px, ${y * (i / 50)}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="landing-div">
      <Link to="/analyze">
        <button className="landing-button">Get Started</button>
      </Link>
    </div>
  );
}
