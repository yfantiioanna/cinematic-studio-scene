import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { IntroOverlay } from "../components/IntroOverlay";
import { Nav } from "../components/Nav";
import DomeGallery from "../components/DomeGallery.jsx";
import g1 from "../assets/gallery/g1.jpg";
import g2 from "../assets/gallery/g2.jpg";
import g3 from "../assets/gallery/g3.jpg";
import g4 from "../assets/gallery/g4.jpg";
import g5 from "../assets/gallery/g5.jpg";
import g6 from "../assets/gallery/g6.jpg";
import g7 from "../assets/gallery/g7.jpg";
import g8 from "../assets/gallery/g8.jpg";
import g9 from "../assets/gallery/g9.jpg";
import g10 from "../assets/gallery/g10.jpg";
import g11 from "../assets/gallery/g11.jpg";
import g12 from "../assets/gallery/g12.jpg";
import g13 from "../assets/gallery/g13.jpg";
import g14 from "../assets/gallery/g14.jpg";
import g15 from "../assets/gallery/g15.jpg";
import g16 from "../assets/gallery/g16.jpg";
import g17 from "../assets/gallery/g17.jpg";
import g18 from "../assets/gallery/g18.jpg";
import g19 from "../assets/gallery/g19.jpg";
import g20 from "../assets/gallery/g20.jpg";
import g21 from "../assets/gallery/g21.jpg";
import g22 from "../assets/gallery/g22.jpg";
import g23 from "../assets/gallery/g23.jpg";
import g24 from "../assets/gallery/g24.jpg";
import g25 from "../assets/gallery/g25.jpg";
import g26 from "../assets/gallery/g26.jpg";
import g27 from "../assets/gallery/g27.jpg";
import contactBg from "../assets/gallery/g3.jpg";
import studioImg from "../assets/studio.jpg";
import { useReveal } from "../hooks/useReveal";

export const Route = createFileRoute("/")({
  component: Index,
});

const SECTION_LABEL: React.CSSProperties = {
  fontFamily: '"Play", sans-serif',
  fontWeight: 300,
  fontSize: 13,
  textTransform: "uppercase",
  letterSpacing: "0.4em",
  color: "#7A6560",
};

const H2: React.CSSProperties = {
  fontFamily: '"Play", sans-serif',
  fontWeight: 300,
  color: "#fff",
  letterSpacing: "0.02em",
  lineHeight: 1.1,
  margin: 0,
};

const HERO_VIDEO_SRC = "https://opioconceptstudio.gr/wp-content/uploads/2024/11/opioV2.mp4";

function Index() {
  const [introDone, setIntroDone] = useState(false);
  const [hintHidden, setHintHidden] = useState(false);
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const contactBoxRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLElement>(null);
  const handleIntroComplete = useCallback(() => setIntroDone(true), []);
  useReveal();

  useEffect(() => {
    const video = heroVideoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.autoplay = true;
    video.loop = true;

    const playVideo = () => {
      video.muted = true;
      void video.play().catch(() => {});
    };

    playVideo();
    video.addEventListener("loadedmetadata", playVideo);
    video.addEventListener("loadeddata", playVideo);
    video.addEventListener("canplay", playVideo);
    document.addEventListener("touchstart", playVideo, { passive: true });
    document.addEventListener("pointerdown", playVideo, { passive: true });
    document.addEventListener("click", playVideo);
    document.addEventListener("visibilitychange", playVideo);

    return () => {
      video.removeEventListener("loadedmetadata", playVideo);
      video.removeEventListener("loadeddata", playVideo);
      video.removeEventListener("canplay", playVideo);
      document.removeEventListener("touchstart", playVideo);
      document.removeEventListener("pointerdown", playVideo);
      document.removeEventListener("click", playVideo);
      document.removeEventListener("visibilitychange", playVideo);
    };
  }, []);

  useEffect(() => {
    if (!introDone) return;
    const els = document.querySelectorAll(".reveal, .reveal-stagger, .about-rise, .draw-line");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [introDone]);

  // Mouse parallax on contact box
  useEffect(() => {
    const section = contactSectionRef.current;
    const box = contactBoxRef.current;
    if (!section || !box) return;
    const onMove = (e: MouseEvent) => {
      const r = box.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = (e.clientX - cx) / (r.width / 2);
      const dy = (e.clientY - cy) / (r.height / 2);
      const rotY = Math.max(-4, Math.min(4, dx * 4));
      const rotX = Math.max(-4, Math.min(4, -dy * 4));
      box.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    };
    const onLeave = () => {
      box.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    };
    section.addEventListener("mousemove", onMove);
    section.addEventListener("mouseleave", onLeave);
    return () => {
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseleave", onLeave);
    };
  }, [introDone]);

  return (
    <div style={{ background: "#110608", color: "#fff", overflowX: "hidden", position: "relative" }}>
      <div className="grain-overlay" aria-hidden="true" />
      <IntroOverlay onComplete={handleIntroComplete} />
      {introDone && <Nav />}


      {/* HERO VIDEO */}
      <section
        style={{
          width: "100vw",
          height: "100vh",
          position: "relative",
          overflow: "hidden",
        }}
        className="hero-mask"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          // @ts-ignore - iOS Safari attribute
          webkit-playsinline="true"
          // @ts-ignore - HTML attribute (not just JSX prop)
          x5-playsinline="true"
          preload="auto"
          controls={false}
          disablePictureInPicture
          src={HERO_VIDEO_SRC}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          ref={heroVideoRef}
        />

        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: 1,
            background: "rgba(168,154,143,0.3)",
          }}
        />
      </section>

      {/* ABOUT */}
      <section style={{ background: "#110608", padding: "60px 6vw" }} className="about-rise">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 64,
            maxWidth: 1400,
            margin: "0 auto",
            alignItems: "center",
          }}
        >
          <div className="reveal-stagger">
            <div style={SECTION_LABEL}>THE STUDIO</div>
            <h2 style={{ ...H2, fontSize: "clamp(32px, 4.5vw, 52px)", marginTop: 28 }}>
              A space for every creative vision
            </h2>
            <p
              style={{
                marginTop: 32,
                fontSize: 15,
                lineHeight: 1.8,
                color: "#A89A8F",
                fontWeight: 300,
                maxWidth: 560,
              }}
            >
              OPIO Concept Studio is a multidimensional artistic innovation in
              Thessaloniki. Designed for photo shoots, live performances, runway
              shows, workshops and art exhibitions — OPIO offers a space of refined
              aesthetics for every form of creation.
            </p>
          </div>
          <div className="reveal" style={{ overflow: "hidden" }}>
            <img
              src={studioImg}
              alt="OPIO studio interior"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                filter: "saturate(0.7)",
                borderRadius: 0,
              }}
            />
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section
        style={{
          height: "100vh",
          background: "#110608",
          position: "relative",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ textAlign: "center", padding: "20px 0 6px", ...SECTION_LABEL }}>
          GALLERY
        </div>
        <div className={`gallery-hint${hintHidden ? " hidden" : ""}`}>drag to explore</div>
        <div className="gallery-section" style={{ flex: 1, minHeight: 0, position: "relative" }}>
          <DomeGallery
            images={[
              g1, g2, g3, g4, g5, g6, g7, g8, g9, g10,
              g11, g12, g13, g14, g15, g16, g17, g18, g19, g20,
              g21, g22, g23, g24, g25, g26, g27,
            ]}
            overlayBlurColor="#110608"
            grayscale={false}
            fit={0.6}
            openedImageWidth="420px"
            openedImageHeight="530px"
            imageBorderRadius="4px"
            openedImageBorderRadius="6px"
            autoRotate={true}
            autoRotateSpeed={0.015}
            onUserDragStart={() => setHintHidden(true)}
          />
        </div>
      </section>


      {/* SERVICES */}
      <section style={{ background: "#110608", padding: "60px 6vw" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            className="reveal"
            style={{ ...SECTION_LABEL, textAlign: "center", marginBottom: 36 }}
          >
            SERVICES
          </div>
          <div className="services-card reveal">
            <div
              className="reveal-stagger"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "0 64px",
              }}
            >
              {[
                ["01", "Photography Studio", "A versatile, fully-equipped studio space designed for fashion, portrait, product and editorial photography."],
                ["02", "Events & Performances", "Live performances, runway shows, concept projects and productions of every scale."],
                ["03", "Showroom", "Permanent home to two clothing brands — a space where fashion meets art."],
              ].map(([num, title, desc]) => (
                <div key={num} className="service-card">
                  <div
                    style={{
                      fontFamily: '"Play", sans-serif',
                      fontSize: 13,
                      color: "#5C4A47",
                      textTransform: "uppercase",
                      letterSpacing: "0.3em",
                      marginBottom: 16,
                    }}
                  >
                    {num}
                  </div>
                  <h3
                    style={{
                      margin: 0,
                      fontFamily: '"Play", sans-serif',
                      fontSize: 20,
                      fontWeight: 400,
                      color: "#fff",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {title}
                  </h3>
                  <p
                    style={{
                      marginTop: 16,
                      fontSize: 14,
                      color: "#A89A8F",
                      lineHeight: 1.7,
                      fontWeight: 300,
                    }}
                  >
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        ref={contactSectionRef}
        className="contact-bg"
        style={{ padding: "40px 6vw", backgroundImage: `url(${contactBg})` }}
      >
        <div className="reveal" style={{ textAlign: "center", marginBottom: 28 }}>
          <div style={SECTION_LABEL}>CONTACT</div>
          <h2 style={{ ...H2, fontSize: "clamp(32px, 4vw, 48px)", marginTop: 24 }}>
            Let's talk
          </h2>
        </div>

        <div className="contact-layout">
        <div ref={contactBoxRef} className="contact-box reveal">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="opio-field">
              <label className="opio-label" htmlFor="name">Full name</label>
              <input id="name" type="text" className="opio-input" />
            </div>
            <div className="opio-field">
              <label className="opio-label" htmlFor="email">Email</label>
              <input id="email" type="email" className="opio-input" />
            </div>
            <div className="opio-field">
              <label className="opio-label" htmlFor="subject">Subject</label>
              <input id="subject" type="text" className="opio-input" />
            </div>
            <div className="opio-field" style={{ marginBottom: 20 }}>
              <label className="opio-label" htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={3}
                className="opio-input"
                style={{ resize: "vertical" }}
              />
            </div>
            <button
              type="submit"
              style={{
                width: "100%",
                background: "#3D0A0F",
                color: "#fff",
                border: "none",
                borderRadius: 0,
                padding: "20px 24px",
                fontFamily: '"Play", sans-serif',
                fontWeight: 400,
                fontSize: 16,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "background 400ms ease",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.background = "#5C4A47")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.background = "#3D0A0F")
              }
            >
              Send
            </button>
          </form>

          <div
            style={{
              marginTop: 48,
              color: "#7A6560",
              fontSize: 14,
              lineHeight: 2,
              fontWeight: 300,
              textAlign: "center",
            }}
          >
            <div>T. 6975526194</div>
            <div>E. info@opioconceptstudio.gr</div>
            <div style={{ marginTop: 8 }}>Zefyron 3, Thessaloniki</div>
          </div>
        </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#110608", padding: "24px 6vw 28px" }}>
        <div className="section-rule" style={{ maxWidth: 1200, margin: "0 auto 16px" }} />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 32,
            marginBottom: 20,
          }}
        >
          <a
            className="social-link"
            href="https://www.facebook.com/profile.php?id=61566384603284"
            target="_blank"
            rel="noreferrer"
            style={{ fontFamily: '"Play", sans-serif', fontSize: 13, letterSpacing: "0.15em" }}
          >
            Facebook
          </a>
          <a
            className="social-link"
            href="https://www.instagram.com/opio_concept_studio"
            target="_blank"
            rel="noreferrer"
            style={{ fontFamily: '"Play", sans-serif', fontSize: 13, letterSpacing: "0.15em" }}
          >
            Instagram
          </a>
        </div>
        <div
          style={{
            textAlign: "center",
            color: "#5C4A47",
            fontSize: 12,
            letterSpacing: "0.15em",
            fontFamily: '"Play", sans-serif',
          }}
        >
          OPIO Concept Studio © 2025
        </div>
      </footer>
    </div>
  );
}
