import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { IntroOverlay } from "../components/IntroOverlay";
import { Nav } from "../components/Nav";
import DomeGallery from "../components/DomeGallery.jsx";
import { useReveal } from "../hooks/useReveal";

export const Route = createFileRoute("/")({
  component: Index,
});

const SECTION_LABEL: React.CSSProperties = {
  fontFamily: '"Cormorant Garamond", serif',
  fontWeight: 300,
  fontSize: 13,
  textTransform: "uppercase",
  letterSpacing: "0.4em",
  color: "#7A6560",
};

const H2: React.CSSProperties = {
  fontFamily: '"Cormorant Garamond", serif',
  fontWeight: 300,
  color: "#fff",
  letterSpacing: "0.02em",
  lineHeight: 1.1,
  margin: 0,
};

function Index() {
  const [introDone, setIntroDone] = useState(false);
  useReveal();

  useEffect(() => {
    if (introDone) {
      // re-run observer after intro completes (elements may already be in viewport)
      const els = document.querySelectorAll(".reveal");
      const io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io.unobserve(e.target);
            }
          }
        },
        { threshold: 0.1 }
      );
      els.forEach((el) => io.observe(el));
      return () => io.disconnect();
    }
  }, [introDone]);

  return (
    <div style={{ background: "#0D0A0A", color: "#fff", overflowX: "hidden" }}>
      <IntroOverlay onComplete={() => setIntroDone(true)} />
      <Nav />

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
          src="https://www.opioconceptstudio.gr/wp-content/uploads/2024/11/opioV2.mp4"
          poster="https://www.opioconceptstudio.gr/wp-content/uploads/2024/11/unnamed-3-scaled.jpg"
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
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
      <section
        style={{
          background: "#0D0A0A",
          padding: "120px 6vw",
        }}
      >
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
          <div className="reveal">
            <div style={SECTION_LABEL}>ΤΟ ΣΤΟΥΝΤΙΟ</div>
            <h2 style={{ ...H2, fontSize: "clamp(32px, 4.5vw, 52px)", marginTop: 28 }}>
              Ένας χώρος για κάθε δημιουργικό όραμα
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
              Το OPIO Concept Studio είναι μια πολυδιάστατη καλλιτεχνική καινοτομία στη
              Θεσσαλονίκη. Σχεδιασμένο για φωτογραφικό στούντιο, live performances, runway
              shows, workshops και εκθέσεις τέχνης — το OPIO προσφέρει έναν χώρο υψηλής
              αισθητικής για κάθε μορφή δημιουργίας.
            </p>
          </div>
          <div className="reveal" style={{ overflow: "hidden" }}>
            <img
              src="https://www.opioconceptstudio.gr/wp-content/uploads/2024/11/unnamed-1-scaled.jpg"
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
        className="gallery-section"
        style={{
          height: "100vh",
          background: "#0D0A0A",
          position: "relative",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            textAlign: "center",
            padding: "40px 0 12px",
            ...SECTION_LABEL,
          }}
        >
          GALLERY
        </div>
        <div style={{ flex: 1, minHeight: 0, position: "relative" }}>
          <DomeGallery
            images={[
              "https://www.opioconceptstudio.gr/wp-content/uploads/2024/11/unnamed-1-scaled.jpg",
              "https://www.opioconceptstudio.gr/wp-content/uploads/2024/11/unnamed-3-scaled.jpg",
              "https://www.opioconceptstudio.gr/wp-content/uploads/2024/11/unnamed-2-scaled.jpg",
              "https://www.opioconceptstudio.gr/wp-content/uploads/2024/11/unnamed-4-scaled.jpg",
              "https://www.opioconceptstudio.gr/wp-content/uploads/2024/11/unnamed-scaled.jpg",
              "https://www.opioconceptstudio.gr/wp-content/uploads/2024/11/unnamed-1-1.jpg",
            ]}
            overlayBlurColor="#0D0A0A"
            grayscale={true}
            openedImageWidth="380px"
            openedImageHeight="480px"
            imageBorderRadius="4px"
            openedImageBorderRadius="6px"
          />
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ background: "#0D0A0A", padding: "120px 6vw" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            className="reveal"
            style={{ ...SECTION_LABEL, textAlign: "center", marginBottom: 72 }}
          >
            ΥΠΗΡΕΣΙΕΣ
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "0 64px",
            }}
          >
            {[
              ["01", "Φωτογραφικό Στούντιο", "Πλήρης επαγγελματικός εξοπλισμός, ευέλικτος χώρος, φυσικό και τεχνητό φωτισμό."],
              ["02", "Live Performances & Runway", "Χώρος για shows, concept projects και παραστάσεις κάθε κλίμακας."],
              ["03", "Art Gallery", "Σύγχρονο περιβάλλον για εκθέσεις, καλλιτεχνικά projects και παρουσιάσεις έργων."],
              ["04", "Workshops", "Υποστήριξη όλων των μορφών τέχνης και καλλιτεχνικών ομάδων."],
            ].map(([num, title, desc]) => (
              <div key={num} className="service-card reveal">
                <div
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
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
                    fontFamily: '"DM Sans", sans-serif',
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
      </section>

      {/* CONTACT */}
      <section style={{ background: "#0D0A0A", padding: "120px 6vw" }}>
        <div
          className="reveal"
          style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}
        >
          <div style={SECTION_LABEL}>ΕΠΙΚΟΙΝΩΝΙΑ</div>
          <h2 style={{ ...H2, fontSize: "clamp(32px, 4vw, 48px)", marginTop: 24 }}>
            Ας μιλήσουμε
          </h2>

          <form
            onSubmit={(e) => e.preventDefault()}
            style={{ marginTop: 56, textAlign: "left" }}
          >
            <div style={{ marginBottom: 32 }}>
              <label className="opio-label" htmlFor="name">Ονοματεπώνυμο</label>
              <input id="name" type="text" className="opio-input" />
            </div>
            <div style={{ marginBottom: 32 }}>
              <label className="opio-label" htmlFor="email">Email</label>
              <input id="email" type="email" className="opio-input" />
            </div>
            <div style={{ marginBottom: 32 }}>
              <label className="opio-label" htmlFor="subject">Θέμα</label>
              <input id="subject" type="text" className="opio-input" />
            </div>
            <div style={{ marginBottom: 40 }}>
              <label className="opio-label" htmlFor="message">Μήνυμα</label>
              <textarea
                id="message"
                rows={5}
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
                fontFamily: '"Cormorant Garamond", serif',
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
              Αποστολή
            </button>
          </form>

          <div
            style={{
              marginTop: 56,
              color: "#7A6560",
              fontSize: 14,
              lineHeight: 2,
              fontWeight: 300,
            }}
          >
            <div>T. 6975526194</div>
            <div>E. info@opioconceptstudio.gr</div>
            <div style={{ marginTop: 8 }}>Ζεφύρων 3, Θεσσαλονίκη</div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#0D0A0A", padding: "48px 6vw 56px" }}>
        <div className="section-rule" style={{ maxWidth: 1200, margin: "0 auto 32px" }} />
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
            style={{ fontFamily: '"DM Sans", sans-serif', fontSize: 13, letterSpacing: "0.15em" }}
          >
            Facebook
          </a>
          <a
            className="social-link"
            href="https://www.instagram.com/opio_concept_studio"
            target="_blank"
            rel="noreferrer"
            style={{ fontFamily: '"DM Sans", sans-serif', fontSize: 13, letterSpacing: "0.15em" }}
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
            fontFamily: '"DM Sans", sans-serif',
          }}
        >
          OPIO Concept Studio © 2025
        </div>
      </footer>
    </div>
  );
}
