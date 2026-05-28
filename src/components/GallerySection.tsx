import { useState } from "react";
import DomeGallery from "./DomeGallery.jsx";
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

const SECTION_LABEL: React.CSSProperties = {
  fontFamily: '"Play", sans-serif',
  fontWeight: 300,
  fontSize: 13,
  textTransform: "uppercase",
  letterSpacing: "0.4em",
  color: "#7A6560",
};

type GallerySectionProps = {
  isMobile: boolean;
};

export function GallerySection({ isMobile }: GallerySectionProps) {
  const [hintHidden, setHintHidden] = useState(false);

  return (
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
          segments={isMobile ? 20 : 35}
          dragSensitivity={isMobile ? 12 : 20}
          dragDampening={isMobile ? 1 : 2}
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
  );
}