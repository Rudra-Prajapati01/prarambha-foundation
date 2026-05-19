import Navbar from "../../components/common/Navbar"
import Footer from "../../components/common/Footer"

import {
  usePageData,
} from "../../context/PageContext"

export default function EarlyIntervention() {

  /* =====================================
      GLOBAL PAGE DATA
  ===================================== */

  const {
    pageData,
  } = usePageData()

  const services = [

    {
      title:
        "Autism & ADHD Support",

      icon: "🧠",

      desc:
        "Structured intervention programs focused on communication, behavior, attention, and emotional development.",
    },

    {
      title:
        "Developmental Delay Support",

      icon: "🌱",

      desc:
        "Helping children improve motor skills, social interaction, learning ability, and developmental milestones.",
    },

    {
      title:
        "Speech & Communication Development",

      icon: "🗣️",

      desc:
        "Supporting expressive language, listening skills, communication confidence, and speech clarity.",
    },

    {
      title:
        "School Readiness & ILP",

      icon: "🏫",

      desc:
        "Preparing children for inclusive classrooms through individualised learning plans and readiness programs.",
    },

  ]

  return (
    <>
      <style>{`

        .ei-page {
          background: #fff;
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* HERO */

        .ei-hero {

          padding:
            120px 20px 90px;

          background:
            linear-gradient(
              135deg,
              #fff6d6,
              #ffffff
            );

          position: relative;

          overflow: hidden;
        }

        .ei-hero::before {

          content: "";

          position: absolute;

          top: -150px;
          right: -150px;

          width: 400px;
          height: 400px;

          background:
            rgba(
              230,
              57,
              70,
              0.08
            );

          border-radius: 50%;
        }

        .ei-hero-inner {

          max-width: 1200px;

          margin: auto;

          display: grid;

          grid-template-columns:
            repeat(
              auto-fit,
              minmax(320px,1fr)
            );

          gap: 60px;

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

          padding: 18px 40px;

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

        /* SERVICES */

        .services-section {
          padding: 100px 20px;
        }

        .services-inner {
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

        .services-grid {

          display: grid;

          grid-template-columns:
            repeat(
              auto-fit,
              minmax(260px,1fr)
            );

          gap: 28px;
        }

        .service-card {

          background: white;

          padding: 40px 30px;

          border-radius: 28px;

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

        .service-card:hover {

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

        .service-icon {

          width: 70px;
          height: 70px;

          border-radius: 20px;

          background: #FFE5E7;

          display: flex;

          align-items: center;

          justify-content: center;

          font-size: 32px;

          margin-bottom: 24px;
        }

        .service-title {

          font-size: 24px;

          font-weight: 800;

          color: #0B1B4D;

          line-height: 1.5;
        }

        .service-desc {

          color: #666;

          line-height: 1.8;

          margin-top: 14px;

          font-size: 15px;
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

          line-height: 1.9;

          color: #555;

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

          .ei-hero {
            padding:
              90px 20px 70px;
          }

          .hero-title {
            font-size: 46px;
          }

          .hero-desc {
            font-size: 16px;
          }

          .service-title {
            font-size: 22px;
          }
        }

      `}</style>

      <div className="ei-page">

        {/* NAVBAR */}

        <Navbar
          pageData={pageData}
        />

        {/* HERO */}

        <section className="ei-hero">

          <div className="ei-hero-inner">

            <div>

              <p className="hero-tag">
                Early Childhood Support
              </p>

              <h1 className="hero-title">

                Early <span>Intervention</span>

              </h1>

              <p className="hero-desc">

                Early support can change the entire future of a child.
                At Prarambha Foundation, we help children with autism,
                ADHD, speech delays, learning difficulties, and
                developmental challenges through structured,
                child-centered intervention programs.

              </p>

              <a
                href="/contact"
                className="hero-btn"
              >

                Get Support

              </a>

            </div>

            <div className="hero-image">

              <img
                src="https://res.cloudinary.com/dvg5yktms/image/upload/v1779106706/prarambha-foundation/iwrcgpssqpg8vbwttw9s.jpg"

                alt="Early Intervention"

                loading="lazy"
              />

            </div>

          </div>

        </section>

        {/* SERVICES */}

        <section className="services-section">

          <div className="services-inner">

            <h2 className="section-title">

              Our Core <span>Programs</span>

            </h2>

            <div className="services-grid">

              {
                services.map(
                  (
                    item,
                    index
                  ) => (

                    <div
                      className="service-card"
                      key={index}
                    >

                      <div className="service-icon">
                        {item.icon}
                      </div>

                      <div className="service-title">
                        {item.title}
                      </div>

                      <p className="service-desc">

                        {item.desc}

                      </p>

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

            Every Child Deserves An <span>Opportunity</span>

          </h2>

          <p className="cta-desc">

            Early identification and timely intervention can
            transform a child’s development journey.
            Let’s work together to create a brighter future.

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
