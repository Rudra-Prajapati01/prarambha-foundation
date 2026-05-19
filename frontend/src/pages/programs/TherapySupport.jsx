import Navbar from "../../components/common/Navbar"
import Footer from "../../components/common/Footer"

import {
  usePageData,
} from "../../context/PageContext"

export default function TherapySupport() {

  /* =====================================
      GLOBAL PAGE DATA
  ===================================== */

  const {
    pageData,
  } = usePageData()

  const therapies = [

    {
      title:
        "Speech & Communication Therapy",

      icon: "🗣️",

      desc:
        "Supporting expressive language, listening skills, speech clarity, communication confidence, and social interaction development.",
    },

    {
      title:
        "Occupational Therapy Support",

      icon: "🧠",

      desc:
        "Helping children improve sensory integration, focus, fine motor skills, body coordination, and functional independence.",
    },

    {
      title:
        "Behavior & Emotional Support",

      icon: "💙",

      desc:
        "Structured developmental support focused on emotional regulation, attention, confidence building, and positive behavior management.",
    },
  ]

  return (
    <>
      <style>{`

        .therapy-page {
          background: #fff;
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* HERO */

        .therapy-hero {

          padding:
            120px 20px 90px;

          background:
            linear-gradient(
              135deg,
              #e9f6ff,
              #ffffff
            );

          position: relative;

          overflow: hidden;
        }

        .therapy-hero::before {

          content: "";

          position: absolute;

          top: -150px;
          right: -150px;

          width: 420px;
          height: 420px;

          background:
            rgba(
              230,
              57,
              70,
              0.08
            );

          border-radius: 50%;
        }

        .therapy-inner {

          max-width: 1200px;

          margin: auto;

          display: grid;

          grid-template-columns:
            repeat(
              auto-fit,
              minmax(320px,1fr)
            );

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

          font-size:
            clamp(
              42px,
              6vw,
              72px
            );

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

          box-shadow:
            0 20px 60px
            rgba(
              0,
              0,
              0,
              0.15
            );

          object-fit: cover;
        }

        /* THERAPY */

        .therapy-section {
          padding: 100px 20px;
        }

        .therapy-container {
          max-width: 1200px;
          margin: auto;
        }

        .section-title {

          text-align: center;

          font-size:
            clamp(
              38px,
              5vw,
              60px
            );

          font-weight: 900;

          color: #0B1B4D;

          margin-bottom: 70px;
        }

        .section-title span {
          color: #E63946;
        }

        .therapy-grid {

          display: grid;

          grid-template-columns:
            repeat(
              auto-fit,
              minmax(280px,1fr)
            );

          gap: 30px;
        }

        .therapy-card {

          background: white;

          border-radius: 28px;

          padding: 40px 30px;

          box-shadow:
            0 10px 40px
            rgba(
              0,
              0,
              0,
              0.08
            );

          border: 1px solid #eee;

          transition: 0.4s;
        }

        .therapy-card:hover {

          transform:
            translateY(-8px);

          box-shadow:
            0 18px 50px
            rgba(
              0,
              0,
              0,
              0.12
            );
        }

        .therapy-icon {

          width: 75px;
          height: 75px;

          border-radius: 22px;

          background: #FFE5E7;

          display: flex;

          align-items: center;

          justify-content: center;

          font-size: 34px;

          margin-bottom: 24px;
        }

        .therapy-title {

          font-size: 26px;

          font-weight: 800;

          color: #0B1B4D;

          margin-bottom: 16px;
        }

        .therapy-desc {

          color: #666;

          line-height: 1.9;

          font-size: 16px;
        }

        /* CTA */

        .cta-section {

          padding: 100px 20px;

          text-align: center;

          background: #fff6d6;
        }

        .cta-title {

          font-size:
            clamp(
              38px,
              5vw,
              60px
            );

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

          .therapy-hero {
            padding:
              90px 20px 70px;
          }

          .hero-title {
            font-size: 46px;
          }

          .hero-desc {
            font-size: 16px;
          }

          .therapy-title {
            font-size: 22px;
          }
        }

      `}</style>

      <div className="therapy-page">

        {/* NAVBAR */}

        <Navbar
          pageData={pageData}
        />

        {/* HERO */}

        <section className="therapy-hero">

          <div className="therapy-inner">

            <div>

              <p className="hero-tag">

                Child Development & Therapy

              </p>

              <h1 className="hero-title">

                Therapy <span>Support</span>

              </h1>

              <p className="hero-desc">

                Therapy is not just treatment —
                it is a bridge that helps children
                communicate, participate, learn,
                and grow with confidence.
                Our therapy programs combine
                developmental guidance,
                sensory activities,
                behavioral support,
                and communication development
                to support every child’s unique journey.

              </p>

              <a
                href="/contact"
                className="hero-btn"
              >

                Get Therapy Support

              </a>

            </div>

            <div className="hero-image">

              <img
                src="https://res.cloudinary.com/dvg5yktms/image/upload/v1779097864/prarambha-foundation/f3xsjddxbifnfmyrycnl.jpg"

                alt="Therapy Support"

                loading="lazy"
              />

            </div>

          </div>

        </section>

        {/* THERAPY CARDS */}

        <section className="therapy-section">

          <div className="therapy-container">

            <h2 className="section-title">

              Therapy <span>Programs</span>

            </h2>

            <div className="therapy-grid">

              {
                therapies.map(
                  (
                    item,
                    index
                  ) => (

                    <div
                      className="therapy-card"
                      key={index}
                    >

                      <div className="therapy-icon">
                        {item.icon}
                      </div>

                      <div className="therapy-title">
                        {item.title}
                      </div>

                      <div className="therapy-desc">
                        {item.desc}
                      </div>

                    </div>
                  )
                )
              }

            </div>

          </div>

        </section>

        {/* CTA */}

        <section className="cta-section">

          <h2 className="cta-title">

            Supporting Every Child’s <span>Growth</span>

          </h2>

          <p className="cta-desc">

            With the right therapy,
            guidance,
            structured support,
            and family involvement,
            children can build communication,
            independence,
            confidence,
            and meaningful life skills.

          </p>

          <a
            href="/contact"
            className="cta-btn"
          >

            Connect With Us

          </a>

        </section>

        {/* FOOTER */}

        <Footer
          pageData={pageData}
        />

      </div>
    </>
  )
}