import Navbar from "../../components/common/Navbar"
import Footer from "../../components/common/Footer"

import {
  usePageData,
} from "../../context/PageContext"

export default function InclusiveEducation() {

  /* =====================================
      GLOBAL PAGE DATA
  ===================================== */

  const {
    pageData,
  } = usePageData()

  const programs = [

    {
      title:
        "Inclusive Classroom Support",

      icon: "🏫",

      desc:
        "Creating safe, child-friendly, and inclusive classrooms where every child learns with participation, dignity, confidence, and equal opportunities.",
    },

    {
      title:
        "Montessori-Based Learning",

      icon: "📚",

      desc:
        "Hands-on Montessori-inspired learning methods that encourage independence, creativity, practical understanding, and joyful learning experiences.",
    },

    {
      title:
        "Individualised Learning Plans",

      icon: "📝",

      desc:
        "Structured ILP-based educational support designed around every child’s developmental level, strengths, pace, and learning needs.",
    },

    {
      title:
        "School Readiness Programs",

      icon: "🎒",

      desc:
        "Supporting communication, attention span, classroom behavior, emotional regulation, and readiness for inclusive school environments.",
    },

  ]

  return (
    <>
      <style>{`

        .edu-page {
          background: #fff;
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* HERO */

        .edu-hero {

          padding:
            120px 20px 90px;

          background:
            linear-gradient(
              135deg,
              #fff5ef,
              #ffffff
            );

          position: relative;

          overflow: hidden;
        }

        .edu-hero::before {

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

        .edu-inner {

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

        /* PROGRAMS */

        .program-section {
          padding: 100px 20px;
        }

        .program-container {
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

        .program-grid {

          display: grid;

          grid-template-columns:
            repeat(
              auto-fit,
              minmax(280px,1fr)
            );

          gap: 30px;
        }

        .program-card {

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

        .program-card:hover {

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

        .program-icon {

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

        .program-title {

          font-size: 26px;

          font-weight: 800;

          color: #0B1B4D;

          margin-bottom: 16px;
        }

        .program-desc {

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

          .edu-hero {
            padding:
              90px 20px 70px;
          }

          .hero-title {
            font-size: 46px;
          }

          .hero-desc {
            font-size: 16px;
          }

          .program-title {
            font-size: 22px;
          }
        }

      `}</style>

      <div className="edu-page">

        {/* NAVBAR */}

        <Navbar
          pageData={pageData}
        />

        {/* HERO */}

        <section className="edu-hero">

          <div className="edu-inner">

            <div>

              <p className="hero-tag">

                Inclusive Learning Initiative

              </p>

              <h1 className="hero-title">

                Inclusive <span>Education</span>

              </h1>

              <p className="hero-desc">

                Every child deserves an educational environment
                where they feel accepted, supported,
                respected, and encouraged to grow.
                Our inclusive education initiative combines
                Montessori-based learning,
                therapy-integrated support,
                and child-centered educational practices
                to help children learn with confidence and independence.

              </p>

              <a
                href="/contact"
                className="hero-btn"
              >

                Learn More

              </a>

            </div>

            <div className="hero-image">

              <img
                src="https://res.cloudinary.com/dvg5yktms/image/upload/v1779106407/prarambha-foundation/jvpzsgmbejxjjmsez0vk.jpg"

                alt="Inclusive Education"

                loading="lazy"
              />

            </div>

          </div>

        </section>

        {/* PROGRAMS */}

        <section className="program-section">

          <div className="program-container">

            <h2 className="section-title">

              Inclusive <span>Programs</span>

            </h2>

            <div className="program-grid">

              {
                programs.map(
                  (
                    item,
                    index
                  ) => (

                    <div
                      className="program-card"
                      key={index}
                    >

                      <div className="program-icon">
                        {item.icon}
                      </div>

                      <div className="program-title">
                        {item.title}
                      </div>

                      <div className="program-desc">
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

            Learning For <span>Every Child</span>

          </h2>

          <p className="cta-desc">

            Together we can create inclusive classrooms,
            equal opportunities,
            and brighter futures where every child feels valued,
            respected, supported,
            and empowered to learn independently.

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