import Navbar from "../components/common/Navbar"
import Footer from "../components/common/Footer"

import { usePageData }
from "../context/PageContext"

export default function DonateNow() {

  /* =====================================
      GLOBAL PAGE DATA
  ===================================== */

  const {
    pageData,
  } = usePageData()

  /* =====================================
      DYNAMIC DONATIONS
  ===================================== */

  const donations =
    pageData?.donate?.cards || []

  return (

    <>

      <style>{`

        .donate-page {
          background: #fff;
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* =====================================
            HERO
        ===================================== */

        .donate-hero {
          padding: 130px 20px 100px;

          background:
            linear-gradient(
              135deg,
              #fff4e8,
              #ffffff
            );

          text-align: center;

          position: relative;

          overflow: hidden;
        }

        .donate-hero::before {

          content: "";

          position: absolute;

          top: -120px;
          right: -120px;

          width: 420px;
          height: 420px;

          background: #FFD600;

          border-radius: 50%;

          opacity: 0.15;
        }

        .donate-hero::after {

          content: "";

          position: absolute;

          bottom: -150px;
          left: -150px;

          width: 420px;
          height: 420px;

          background: #E63946;

          border-radius: 50%;

          opacity: 0.08;
        }

        .hero-inner {
          max-width: 1000px;
          margin: auto;
          position: relative;
          z-index: 2;
        }

        .hero-tag {

          color: #E63946;

          font-size: 14px;

          font-weight: 800;

          letter-spacing: 3px;

          text-transform: uppercase;

          margin-bottom: 24px;
        }

        .hero-title {

          font-size:
            clamp(42px,6vw,78px);

          font-weight: 900;

          line-height: 1.05;

          color: #0B1B4D;

          margin-bottom: 28px;
        }

        .hero-title span {
          color: #E63946;
        }

        .hero-desc {

          max-width: 850px;

          margin: auto;

          color: #555;

          line-height: 2;

          font-size: 19px;
        }

        /* =====================================
            DONATION SECTION
        ===================================== */

        .donation-section {
          padding: 110px 20px;
        }

        .donation-container {
          max-width: 1250px;
          margin: auto;
        }

        .donation-grid {

          display: grid;

          grid-template-columns:
            repeat(
              auto-fit,
              minmax(320px,1fr)
            );

          gap: 35px;
        }

        .donation-card {

          background: white;

          border-radius: 32px;

          padding: 50px 38px;

          box-shadow:
            0 15px 50px rgba(0,0,0,0.07);

          border: 1px solid #eee;

          transition: 0.4s ease;

          text-align: center;

          position: relative;

          overflow: hidden;
        }

        .donation-card::before {

          content: "";

          position: absolute;

          top: -60px;
          right: -60px;

          width: 180px;
          height: 180px;

          background: #FFF3D6;

          border-radius: 50%;

          opacity: 0.7;
        }

        .donation-card:hover {

          transform:
            translateY(-10px);

          box-shadow:
            0 20px 60px rgba(0,0,0,0.12);
        }

        .donation-icon {

          font-size: 70px;

          margin-bottom: 28px;

          position: relative;

          z-index: 2;
        }

        .donation-title {

          font-size: 32px;

          font-weight: 800;

          color: #0B1B4D;

          margin-bottom: 18px;

          position: relative;

          z-index: 2;
        }

        .donation-amount {

          font-size: 46px;

          font-weight: 900;

          color: #E63946;

          margin-bottom: 22px;

          position: relative;

          z-index: 2;
        }

        .donation-desc {

          color: #666;

          line-height: 2;

          margin-bottom: 34px;

          position: relative;

          z-index: 2;
        }

        .donate-btn {

          display: inline-flex;

          align-items: center;

          justify-content: center;

          background: #E63946;

          color: white;

          padding: 16px 40px;

          border-radius: 999px;

          text-decoration: none;

          font-weight: 700;

          transition: 0.3s ease;

          position: relative;

          z-index: 2;
        }

        .donate-btn:hover {

          transform: scale(1.05);

          background: #d62839;
        }

        /* =====================================
            MOBILE
        ===================================== */

        @media(max-width:768px) {

          .donate-hero {
            padding: 110px 20px 80px;
          }

          .hero-title {
            font-size: 50px;
          }

          .hero-desc {
            font-size: 16px;
          }

          .donation-title {
            font-size: 28px;
          }

          .donation-amount {
            font-size: 38px;
          }

          .donation-card {
            padding: 40px 28px;
          }
        }

      `}</style>

      <div className="donate-page">

        {/* =====================================
            NAVBAR
        ===================================== */}

        <Navbar
          pageData={pageData}
        />

        {/* =====================================
            HERO
        ===================================== */}

        <section className="donate-hero">

          <div className="hero-inner">

            <p className="hero-tag">

              {
                pageData?.donate?.heroSubtitle ||
                "Support Inclusion & Early Intervention"
              }

            </p>

            <h1 className="hero-title">

              {
                pageData?.donate?.heroTitle ||
                "Donate"
              }

              <span> Now</span>

            </h1>

            <p className="hero-desc">

              {
                pageData?.donate?.heroDescription ||
                "Your contribution helps children receive therapy, inclusive education, developmental support, awareness programs, and a brighter future."
              }

            </p>

          </div>

        </section>

        {/* =====================================
            DONATION OPTIONS
        ===================================== */}

        <section className="donation-section">

          <div className="donation-container">

            <div className="donation-grid">

              {
                donations.map(
                  (item, index) => (

                    <div
                      className="donation-card"
                      key={index}
                    >

                      <div className="donation-icon">

                        {
                          item.icon || "❤️"
                        }

                      </div>

                      <div className="donation-title">

                        {item.title}

                      </div>

                      <div className="donation-amount">

                        {item.amount}

                      </div>

                      <div className="donation-desc">

                        {item.desc}

                      </div>

                      <a
                        href="/contact"
                        className="donate-btn"
                      >

                        {
                          item.buttonText ||
                          "Donate Now"
                        }

                      </a>

                    </div>
                  )
                )
              }

            </div>

          </div>

        </section>

        {/* =====================================
            FOOTER
        ===================================== */}

        <Footer
          pageData={pageData}
        />

      </div>

    </>
  )
}