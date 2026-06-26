import Navbar from "../../components/common/Navbar"
import Footer from "../../components/common/Footer"

import {
  usePageData,
} from "../../context/PageContext"

export default function TherapySupport() { 
  // Component ka naam wahi rakha hai taki aapka routing break na ho, 
  // par UI me sab Special Education ho gaya hai.

  /* =====================================
      GLOBAL PAGE DATA
  ===================================== */

  const {
    pageData,
  } = usePageData()

  return (
    <>
      <style>{`

        .special-ed-page {
          background: #fff;
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* HERO */
        .special-ed-hero {
          padding: 120px 20px 90px;
          background: linear-gradient(135deg, #e9f6ff, #ffffff);
          position: relative;
          overflow: hidden;
        }

        .special-ed-hero::before {
          content: "";
          position: absolute;
          top: -150px;
          right: -150px;
          width: 420px;
          height: 420px;
          background: rgba(230, 57, 70, 0.08);
          border-radius: 50%;
        }

        .special-ed-inner {
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 70px;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .hero-tag {
          color: #E63946;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .hero-title {
          font-size: clamp(42px, 6vw, 72px);
          line-height: 1.1;
          font-weight: 900;
          color: #0B1B4D;
          margin-bottom: 24px;
        }

        .hero-title span {
          color: #E63946;
        }

        .hero-desc {
          color: #555;
          line-height: 1.9;
          font-size: 18px;
          margin-bottom: 35px;
        }

        .hero-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #E63946;
          color: white;
          padding: 18px 42px;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 700;
          transition: 0.3s;
        }

        .hero-btn:hover {
          transform: scale(1.05);
          background: #d62839;
        }

        .hero-image img {
          width: 100%;
          border-radius: 32px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
          object-fit: cover;
        }

        /* SPECIAL EDUCATION SECTION */
        .core-strength-section {
          padding: 100px 20px;
          background: #FAFAFA;
        }

        .core-strength-inner {
          max-width: 1200px;
          margin: auto;
          text-align: center;
        }

        .core-strength-title {
          font-size: clamp(38px, 5vw, 56px);
          font-weight: 900;
          color: #0B1B4D;
          margin-bottom: 16px;
        }

        .core-strength-title span {
          color: #E63946;
        }

        .ilp-subtitle {
          font-size: 24px;
          font-weight: 800;
          color: #0B1B4D;
          margin-bottom: 20px;
          letter-spacing: 0.5px;
        }

        .ilp-desc {
          color: #555;
          font-size: 20px;
          max-width: 800px;
          margin: 0 auto 60px;
          line-height: 1.6;
          font-weight: 500;
        }

        .focus-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }

        .focus-card {
          background: white;
          padding: 50px 30px;
          border-radius: 24px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.06);
          border-bottom: 5px solid #E63946;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          transition: transform 0.4s;
        }

        .focus-card:hover {
          transform: translateY(-8px);
        }

        .focus-icon {
          font-size: 48px;
          background: #e9f6ff;
          width: 100px;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: #0B1B4D;
        }

        .focus-text {
          font-size: 24px;
          color: #0B1B4D;
          font-weight: 800;
        }

        /* CTA */
        .cta-section {
          padding: 100px 20px;
          text-align: center;
          background: #fff6d6;
        }

        .cta-title {
          font-size: clamp(38px, 5vw, 60px);
          font-weight: 900;
          color: #0B1B4D;
          margin-bottom: 20px;
        }

        .cta-title span {
          color: #E63946;
        }

        .cta-desc {
          max-width: 800px;
          margin: auto;
          color: #555;
          line-height: 1.9;
          font-size: 18px;
          margin-bottom: 40px;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #E63946;
          color: white;
          padding: 18px 42px;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 700;
          transition: 0.3s;
        }

        .cta-btn:hover {
          transform: scale(1.05);
          background: #d62839;
        }

        @media(max-width:768px) {
          .special-ed-hero {
            padding: 90px 20px 70px;
          }
          .hero-title {
            font-size: 46px;
          }
          .hero-desc {
            font-size: 16px;
          }
          .core-strength-title {
            font-size: 32px;
          }
          .focus-card {
            padding: 40px 20px;
          }
        }

      `}</style>

      <div className="special-ed-page">

        {/* NAVBAR */}
        <Navbar pageData={pageData} />

        {/* HERO */}
        <section className="special-ed-hero">
          <div className="special-ed-inner">
            <div>
              <p className="hero-tag">Core Strength</p>
              <h1 className="hero-title">Special <span>Education</span></h1>
              <p className="hero-desc">
                We believe every child has the potential to learn and grow. 
                Through our Individualised Learning Plans (ILP), we provide structured, 
                step-by-step support tailored exactly to each child's pace and ability.
              </p>
              <a href="/contact" className="hero-btn">Get Support</a>
            </div>
            <div className="hero-image">
              <img
                src="https://res.cloudinary.com/dvg5yktms/image/upload/v1779097864/prarambha-foundation/f3xsjddxbifnfmyrycnl.jpg"
                alt="Special Education"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* SPECIAL EDUCATION (CORE STRENGTH) - ILP FOCUS */}
        <section className="core-strength-section">
          <div className="core-strength-inner">
            <h2 className="core-strength-title">
              Special Education <span>(Core Strength)</span>
            </h2>
            <h3 className="ilp-subtitle">Individualised Learning Plans (ILP)</h3>
            <p className="ilp-desc">
              Structured support based on each child’s pace & ability.
            </p>

            <div className="focus-grid">
              {/* Focus 1 */}
              <div className="focus-card">
                <div className="focus-icon">🗣️</div>
                <div className="focus-text">Communication</div>
              </div>
              
              {/* Focus 2 */}
              <div className="focus-card">
                <div className="focus-icon">🤝</div>
                <div className="focus-text">Behavior</div>
              </div>
              
              {/* Focus 3 */}
              <div className="focus-card">
                <div className="focus-icon">🎒</div>
                <div className="focus-text">Learning Readiness</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <h2 className="cta-title">
            Empowering <span>Every Child</span>
          </h2>
          <p className="cta-desc">
            With the right individualised support, guidance, and family involvement,
            children can build independence, confidence, and meaningful life skills.
          </p>
          <a href="/contact" className="cta-btn">Connect With Us</a>
        </section>

        {/* FOOTER */}
        <Footer pageData={pageData} />

      </div>
    </>
  )
}