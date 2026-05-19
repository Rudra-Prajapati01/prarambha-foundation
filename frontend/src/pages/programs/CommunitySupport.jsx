import Navbar from "../../components/common/Navbar"
import Footer from "../../components/common/Footer"

import {
  usePageData,
} from "../../context/PageContext"

export default function CommunitySupport() {

  /* =====================================
      GLOBAL PAGE DATA
  ===================================== */

  const {
    pageData,
  } = usePageData()

  const supports = [

    {
      title: "Parent Counselling",
      icon: "👨‍👩‍👧",

      desc:
        "Helping parents understand child development, behavior, communication, emotional regulation, and home-based support strategies for children.",
    },

    {
      title: "Teacher Training",
      icon: "👩‍🏫",

      desc:
        "Supporting educators with inclusive classroom practices, structured learning methods, and child-centered educational strategies.",
    },


    {
      title: "Early Screening Camps",
      icon: "🩺",

      desc:
        "Organizing developmental screening initiatives to identify learning and developmental concerns at an early stage.",
    },

    {
      title: "Family Guidance",
      icon: "💙",

      desc:
        "Providing structured emotional support, developmental guidance, and counseling support for parents and caregivers.",
    },
  ]

  const impacts = [

    {
      number: "500+",
      text:
        "Families reached through awareness and guidance programs",
    },

    {
      number: "100+",
      text:
        "Teachers supported with inclusive education training",
    },

    {
      number: "50+",
      text:
        "Community awareness and screening initiatives conducted",
    },

    {
      number: "1000+",
      text:
        "Children impacted through early intervention support",
    },
  ]

  return (
    <>
      <style>{`

        .community-page {
          background: #fff;
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* HERO */

        .community-hero {

          padding:
            120px 20px 90px;

          background:
            linear-gradient(
              135deg,
              #eefdf4,
              #ffffff
            );

          position: relative;

          overflow: hidden;
        }

        .community-hero::before {

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

        .community-inner {

          max-width: 1250px;

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

        /* SUPPORT SECTION */

        .support-section {
          padding: 100px 20px;
        }

        .support-container {
          max-width: 1250px;
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

        .support-grid {

          display: grid;

          grid-template-columns:
            repeat(
              auto-fit,
              minmax(280px,1fr)
            );

          gap: 30px;
        }

        .support-card {

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

        .support-card:hover {

          transform:
            translateY(-8px);
        }

        .support-icon {

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

        .support-title {

          font-size: 26px;

          font-weight: 800;

          color: #0B1B4D;

          margin-bottom: 16px;
        }

        .support-desc {

          color: #666;

          line-height: 1.9;

          font-size: 16px;
        }

        /* POSTER SECTION */

        .poster-section {

          padding:
            100px 20px;

          background: #fff;
        }

        .poster-container {

          max-width: 1250px;

          margin: auto;
        }

        .poster-grid {

          display: grid;

          grid-template-columns:
            repeat(
              auto-fit,
              minmax(320px,1fr)
            );

          gap: 30px;
        }

        .poster-card {

          overflow: hidden;

          border-radius: 30px;

          box-shadow:
            0 15px 50px
            rgba(
              0,
              0,
              0,
              0.12
            );
        }

        .poster-card img {

          width: 100%;

          display: block;
        }

        /* CTA */

        .cta-section {

          padding:
            100px 20px;

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

        /* MOBILE */

        @media(max-width:768px) {

          .community-hero {
            padding:
              90px 20px 70px;
          }

          .hero-title {
            font-size: 46px;
          }

          .hero-desc {
            font-size: 16px;
          }

          .support-title {
            font-size: 24px;
          }

          .impact-number {
            font-size: 42px;
          }
        }

      `}</style>

      <div className="community-page">

        {/* NAVBAR */}

        <Navbar
          pageData={pageData}
        />

        {/* HERO */}

        <section className="community-hero">

          <div className="community-inner">

            <div>

              <p className="hero-tag">

                Family & Community Initiative

              </p>

              <h1 className="hero-title">

                Community <span>Support</span>

              </h1>

              <p className="hero-desc">

                Supporting a child means supporting
                families, schools, teachers,
                and communities together.
                Through awareness, guidance,
                outreach, and early screening,
                we help create a more inclusive society.

              </p>

              <a
                href="/contact"
                className="hero-btn"
              >

                Connect With Us

              </a>

            </div>

            <div className="hero-image">

              <img
                src="https://res.cloudinary.com/dvg5yktms/image/upload/v1779106661/prarambha-foundation/q7yijmcjwuujquaklc15.jpg"

                alt="Community Support"

                loading="lazy"
              />

            </div>

          </div>

        </section>

        {/* SUPPORT CARDS */}

        <section className="support-section">

          <div className="support-container">

            <h2 className="section-title">

              Community <span>Programs</span>

            </h2>

            <div className="support-grid">

              {
                supports.map(
                  (
                    item,
                    index
                  ) => (

                    <div
                      className="support-card"
                      key={index}
                    >

                      <div className="support-icon">
                        {item.icon}
                      </div>

                      <div className="support-title">
                        {item.title}
                      </div>

                      <div className="support-desc">
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

            Together We Build An <span>Inclusive Future</span>

          </h2>

          <p className="cta-desc">

            Join our mission to empower children,
            support families,
            and create awareness for inclusive education
            and early intervention across communities.

          </p>

          <a
            href="/donate"
            className="cta-btn"
          >

            Support Our Mission

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