import Navbar from "../../components/common/Navbar"
import Footer from "../../components/common/Footer"

import {
  usePageData,
} from "../../context/PageContext"

export default function GuidanceOnTherapySupport() {

  /* =====================================
      GLOBAL PAGE DATA
  ===================================== */

  const {
    pageData,
  } = usePageData()

  return (
    <>
      <style>{`

        .guidance-page {
          background: #fff;
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* HERO */
        .guidance-hero {
          padding: 120px 20px 90px;
          background: linear-gradient(135deg, #f0f8ff, #ffffff);
          position: relative;
          overflow: hidden;
        }

        .guidance-hero::before {
          content: "";
          position: absolute;
          top: -150px;
          right: -150px;
          width: 420px;
          height: 420px;
          background: rgba(58, 134, 255, 0.08);
          border-radius: 50%;
        }

        .guidance-inner {
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
          font-size: clamp(38px, 5vw, 64px);
          line-height: 1.2;
          font-weight: 900;
          color: #0B1B4D;
          margin-bottom: 24px;
          text-transform: uppercase;
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

        /* CONTENT SECTION */
        .content-section {
          padding: 100px 20px;
          background: #FAFAFA;
        }
        
        .content-inner {
          max-width: 1000px;
          margin: auto;
        }

        .content-block {
          background: #fff;
          padding: 40px;
          border-radius: 20px;
          margin-bottom: 30px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.04);
          border-left: 6px solid #E63946;
          transition: transform 0.3s ease;
        }

        .content-block:hover {
          transform: translateY(-5px);
        }

        .content-block:nth-child(2) {
          border-left-color: #3A86FF;
        }

        .content-block:nth-child(3) {
          border-left-color: #FFBE0B;
        }

        .content-block h2 {
          font-size: 26px;
          color: #0B1B4D;
          font-weight: 800;
          margin-bottom: 20px;
        }

        .content-block p, .content-block ul {
          color: #555;
          font-size: 18px;
          line-height: 1.8;
          margin: 0;
        }

        .content-block ul {
          padding-left: 20px;
          margin-top: 15px;
        }

        .content-block ul li {
          margin-bottom: 12px;
        }
        
        .content-block ul li strong {
          color: #0B1B4D;
          font-size: 19px;
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
          .guidance-hero {
            padding: 90px 20px 70px;
          }
          .hero-title {
            font-size: 40px;
          }
          .hero-desc {
            font-size: 16px;
          }
          .content-block {
            padding: 25px;
          }
          .content-block h2 {
            font-size: 22px;
          }
        }

      `}</style>

      <div className="guidance-page">

        {/* NAVBAR */}
        <Navbar pageData={pageData} />

        {/* HERO */}
        <section className="guidance-hero">
          <div className="guidance-inner">
            <div>
              <p className="hero-tag">Professional Support & Care</p>
              <h1 className="hero-title">GUIDANCE ON <span>THERAPY SUPPORT</span></h1>
              <p className="hero-desc">
                Understanding your child's developmental needs is the first step towards their growth. 
                Explore when therapy is required, the different types of therapies available, 
                and how we connect you with the right professionals.
              </p>
              <a href="/contact" className="hero-btn">Consult With Us</a>
            </div>
            <div className="hero-image">
              <img
                src="https://res.cloudinary.com/dvg5yktms/image/upload/v1779097864/prarambha-foundation/f3xsjddxbifnfmyrycnl.jpg"
                alt="Guidance on Therapy Support"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* CONTENT SECTION (Exactly as requested) */}
        <section className="content-section">
          <div className="content-inner">
            
            {/* Point 1 */}
            <div className="content-block">
              <h2>When therapy is needed</h2>
              <p>
                Therapy becomes essential when a child exhibits delays in achieving standard developmental milestones. 
                This includes facing persistent challenges with emotional regulation, struggling with daily life activities, 
                or experiencing noticeable difficulties in communication, learning, and social interactions with peers. 
                Early identification and intervention provide the best foundation for improvement.
              </p>
            </div>

            {/* Point 2 */}
            <div className="content-block">
              <h2>Types of therapy explained (Speech, OT, Behavioural)</h2>
              <ul>
                <li><strong>Speech Therapy:</strong> Designed to help children improve their articulation, vocabulary, and overall expressive and receptive language skills, giving them the confidence to communicate their thoughts clearly.</li>
                <li><strong>OT (Occupational Therapy):</strong> Focuses on developing both fine and gross motor skills, improving sensory processing, and building the functional independence required for everyday tasks like writing, eating, and dressing.</li>
                <li><strong>Behavioural Therapy:</strong> Aids children in understanding and managing their emotions, reinforcing positive behaviors, reducing challenging actions, and building healthy, constructive social habits.</li>
              </ul>
            </div>

            {/* Point 3 */}
            <div className="content-block">
              <h2>Referral to appropriate professionals (if needed)</h2>
              <p>
                We believe in providing the most accurate and holistic care for every child. 
                If a child requires specialized medical diagnosis, clinical evaluation, or advanced therapeutic 
                intervention that falls outside our primary scope, we guide families step-by-step and 
                directly refer them to trusted, certified pediatric professionals and specialists.
              </p>
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <h2 className="cta-title">Take the <span>Right Step</span></h2>
          <p className="cta-desc">
            Professional guidance can make a world of difference in a child's developmental journey. 
            Reach out to us today to understand the best support system for your child.
          </p>
          <a href="/contact" className="cta-btn">Get In Touch</a>
        </section>

        {/* FOOTER */}
        <Footer pageData={pageData} />

      </div>
    </>
  )
}