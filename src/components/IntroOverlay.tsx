import { useEffect, useState } from "react";

type Phase = "idle" | "flash" | "logo" | "moving" | "done";

export function IntroOverlay({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<Phase>("idle");
  const [overlayFade, setOverlayFade] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const t1 = setTimeout(() => setPhase("flash"), 400);
    const t2 = setTimeout(() => setPhase("logo"), 400 + 250);
    const t3 = setTimeout(() => setPhase("moving"), 400 + 250 + 700 + 1000);
    const t4 = setTimeout(() => {
      setOverlayFade(true);
    }, 400 + 250 + 700 + 1000 + 800);
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

  if (phase === "done") {
    return (
      <div
        className="font-serif"
        style={{
          position: "fixed",
          top: 26,
          left: 0,
          right: 0,
          textAlign: "center",
          color: "#fff",
          fontSize: 26,
          letterSpacing: "0.4em",
          zIndex: 100,
          pointerEvents: "none",
          fontWeight: 300,
        }}
      >
        OPIO
      </div>
    );
  }

  const showFlash = phase === "flash";
  const logoVisible = phase === "logo" || phase === "moving";
  const moved = phase === "moving";

  const logoStyle: React.CSSProperties = moved
    ? {
        top: 26,
        left: 0,
        right: 0,
        transform: "translateY(0) scale(1)",
        fontSize: 26,
        letterSpacing: "0.4em",
      }
    : {
        top: "50%",
        left: 0,
        right: 0,
        transform: `translateY(-50%) scale(${logoVisible ? 1 : 0.85})`,
        fontSize: 140,
        letterSpacing: "0.3em",
      };

  return (
    <>
      {/* Black overlay */}
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
        {/* Diagonal line flashes */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "10%",
            width: "60vw",
            height: 1,
            background: "#fff",
            filter: "blur(0.5px) drop-shadow(0 0 6px rgba(255,255,255,0.8))",
            transform: "rotate(28deg)",
            transformOrigin: "left center",
            opacity: showFlash ? 1 : 0,
            transition: "opacity 250ms ease",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "20%",
            right: "10%",
            width: "60vw",
            height: 1,
            background: "#fff",
            filter: "blur(0.5px) drop-shadow(0 0 6px rgba(255,255,255,0.8))",
            transform: "rotate(28deg)",
            transformOrigin: "right center",
            opacity: showFlash ? 1 : 0,
            transition: "opacity 250ms ease",
          }}
        />
      </div>

      {/* Animated OPIO logo */}
      <div
        className="font-serif"
        style={{
          position: "fixed",
          textAlign: "center",
          color: "#fff",
          fontWeight: 300,
          textTransform: "uppercase",
          zIndex: 100,
          pointerEvents: "none",
          opacity: logoVisible ? 1 : 0,
          transition:
            "opacity 700ms ease, transform 800ms cubic-bezier(0.65,0,0.35,1), top 800ms cubic-bezier(0.65,0,0.35,1), font-size 800ms cubic-bezier(0.65,0,0.35,1), letter-spacing 800ms cubic-bezier(0.65,0,0.35,1)",
          ...logoStyle,
        }}
      >
        OPIO
      </div>
    </>
  );
}
