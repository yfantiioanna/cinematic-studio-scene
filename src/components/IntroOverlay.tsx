import { useEffect, useState } from "react";
import logo from "@/assets/opio-logo.png";

type Phase = "idle" | "flash" | "logo" | "moving" | "done";

export function IntroOverlay({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<Phase>("idle");
  const [overlayFade, setOverlayFade] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const t1 = setTimeout(() => setPhase("flash"), 400);
    const t2 = setTimeout(() => setPhase("logo"), 400 + 250);
    const t3 = setTimeout(() => setPhase("moving"), 400 + 250 + 700 + 1000);
    const t4 = setTimeout(() => setOverlayFade(true), 400 + 250 + 700 + 1000 + 800);
    const t5 = setTimeout(() => {
      setPhase("done");
      document.body.style.overflow = "";
      onComplete();
    }, 400 + 250 + 700 + 1000 + 800 + 600);
    return () => {
      [t1, t2, t3, t4, t5].forEach(clearTimeout);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  if (phase === "done") return null;

  const showFlash = phase === "flash";
  const logoVisible = phase === "logo" || phase === "moving";
  const moved = phase === "moving";

  const logoStyle: React.CSSProperties = moved
    ? {
        top: 6,
        left: 0,
        right: 0,
        transform: "translateY(0) scale(1)",
        height: 100,
      }
    : {
        top: "50%",
        left: 0,
        right: 0,
        transform: `translateY(-50%) scale(${logoVisible ? 1 : 1})`,
        height: 126,
      };

  return (
    <>
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "#000",
          zIndex: 90,
          opacity: overlayFade ? 0 : 1,
          transition: "opacity 600ms ease",
          pointerEvents: overlayFade ? "none" : "auto",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "-10%",
            width: "120vw",
            height: 1,
            background: "#fff",
            filter: "blur(0.5px) drop-shadow(0 0 6px rgba(255,255,255,0.85))",
            transform: "rotate(-18deg)",
            transformOrigin: "center",
            opacity: showFlash ? 1 : 0,
            transition: "opacity 250ms ease",
          }}
        />
      </div>

      <div
        style={{
          position: "fixed",
          display: "flex",
          justifyContent: "center",
          zIndex: 100,
          pointerEvents: "none",
          opacity: logoVisible ? 1 : 0,
          transition:
            "opacity 700ms ease, transform 1000ms cubic-bezier(0.65,0,0.35,1), top 1000ms cubic-bezier(0.65,0,0.35,1), height 1000ms cubic-bezier(0.65,0,0.35,1)",
          ...logoStyle,
        }}
      >
        <img
          src={logo}
          alt="OPIO"
          style={{
            height: "100%",
            width: "auto",
            display: "block",
            filter: "brightness(0) invert(1)",
          }}
        />
      </div>
    </>
  );
}
