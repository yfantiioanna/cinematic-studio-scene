import { useEffect, useState } from "react";
import logo from "@/assets/opio-logo.png";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 160,
        zIndex: 80,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: scrolled ? "rgba(13,10,10,0.4)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(8px)" : "none",
        transition: "background 400ms ease, backdrop-filter 400ms ease",
        pointerEvents: "none",
      }}
    >
      <img
        src={logo}
        alt="OPIO"
        style={{
          height: 144,
          width: "auto",
          filter: "brightness(0) invert(1)",
        }}
      />
    </nav>
  );
}
