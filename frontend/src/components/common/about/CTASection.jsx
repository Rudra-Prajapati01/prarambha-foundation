export default function CTASection({ data }) {

  return (
    <>
      <style>{`
        .cta-section {
          background: linear-gradient(
            135deg,
            #E63946,
            #F4A020
          );
          padding: 90px 20px;
          position: relative;
          overflow: hidden;
        }

        .cta-container {
          max-width: 1100px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 2;
        }

        .cta-tag {
          display: inline-block;
          background: rgba(255,255,255,0.18);
          color: #fff;
          padding: 8px 18px;
          border-radius: 50px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1px;
          margin-bottom: 20px;
          backdrop-filter: blur(6px);
        }

        .cta-title {
          font-size: clamp(34px, 5vw, 60px);
          font-weight: 900;
          color: #fff;
          line-height: 1.2;
          margin-bottom: 20px;
        }

        .cta-desc {
          max-width: 750px;
          margin: 0 auto 35px;
          color: rgba(255,255,255,0.92);
          font-size: 17px;
          line-height: 1.8;
        }

        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 18px;
          flex-wrap: wrap;
        }

        .cta-btn-primary {
          background: #fff;
          color: #E63946;
          padding: 16px 34px;
          border-radius: 50px;
          text-decoration: none;
          font-size: 15px;
          font-weight: 800;
          transition: 0.3s ease;
          box-shadow: 0 8px 24px rgba(0,0,0,0.15);
        }

        .cta-btn-primary:hover {
          transform: translateY(-4px);
        }

        .cta-btn-outline {
          border: 2px solid #fff;
          color: #fff;
          padding: 16px 34px;
          border-radius: 50px;
          text-decoration: none;
          font-size: 15px;
          font-weight: 800;
          transition: 0.3s ease;
        }

        .cta-btn-outline:hover {
          background: #fff;
          color: #E63946;
        }

        .cta-circle {
          position: absolute;
          border-radius: 50%;
          background: rgba(255,255,255,0.08);
        }

        .circle-one {
          width: 260px;
          height: 260px;
          top: -100px;
          left: -100px;
        }

        .circle-two {
          width: 320px;
          height: 320px;
          bottom: -150px;
          right: -120px;
        }

        @media (max-width: 768px) {
          .cta-section {
            padding: 70px 20px;
          }

          .cta-desc {
            font-size: 15px;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .cta-btn-primary,
          .cta-btn-outline {
            width: 100%;
            max-width: 320px;
          }
        }
      `}</style>

      <section className="cta-section">

        <div className="cta-circle circle-one"></div>

        <div className="cta-circle circle-two"></div>

        <div className="cta-container">

          <div className="cta-tag">
            💛 Make a Difference Today
          </div>

          <h2 className="cta-title">
            {data?.title}
          </h2>

          <p className="cta-desc">
            {data?.description}
          </p>

          <div className="cta-buttons">

            <a
              href="/donate"
              className="cta-btn-primary"
            >
              {data?.button1 || "Donate Now"}
            </a>

            <a
              href="/volunteer"
              className="cta-btn-outline"
            >
              {data?.button2 || "Become a Volunteer"}
            </a>

          </div>

        </div>

      </section>
    </>
  )
}