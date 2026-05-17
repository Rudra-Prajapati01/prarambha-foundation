import Navbar from "../../components/common/Navbar"
import Footer from "../../components/common/Footer"

export default function EarlyIntervention() {

  const services = [

    "Autism Support",

    "ADHD Support",

    "Developmental Delay Support",

    "Specific Learning Disorder Support",

    "Speech & Communication Development",

    "School Readiness Program",

    "Individualised Learning Plans (ILP)",

    "Behavior & Attention Support",
  ]

  return (
    <>
      <style>{`

        .ei-page {
          background: #fff;
          min-height: 100vh;
        }

        /* HERO */

        .ei-hero {
          padding: 120px 20px 90px;
          background:
            linear-gradient(
              135deg,
              #fff6d6,
              #ffffff
            );
        }

        .ei-hero-inner {
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns:
            repeat(auto-fit,minmax(320px,1fr));
          gap: 60px;
          align-items: center;
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
          display: inline-block;
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
        }

        .hero-image img {
          width: 100%;
          border-radius: 32px;
          box-shadow:
            0 20px 60px rgba(0,0,0,0.15);
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
          font-size: clamp(38px,5vw,60px);
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
            repeat(auto-fit,minmax(260px,1fr));
          gap: 28px;
        }

        .service-card {
          background: white;
          padding: 40px 30px;
          border-radius: 28px;
          box-shadow:
            0 10px 40px rgba(0,0,0,0.08);
          border: 1px solid #eee;
          transition: 0.4s;
        }

        .service-card:hover {
          transform: translateY(-8px);
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

        /* IMPACT */

        .impact-section {
          background:
            linear-gradient(
              135deg,
              #0B1B4D,
              #1A2E6C
            );

          padding: 100px 20px;
          color: white;
        }

        .impact-inner {
          max-width: 1200px;
          margin: auto;
          text-align: center;
        }

        .impact-grid {
          margin-top: 70px;
          display: grid;
          grid-template-columns:
            repeat(auto-fit,minmax(240px,1fr));
          gap: 30px;
        }

        .impact-card {
          background:
            rgba(255,255,255,0.08);

          padding: 40px 20px;
          border-radius: 28px;
          backdrop-filter: blur(10px);
        }

        .impact-number {
          font-size: 54px;
          font-weight: 900;
          color: #FFD600;
          margin-bottom: 12px;
        }

        .impact-text {
          line-height: 1.8;
          color: #f1f1f1;
        }

        /* CTA */

        .cta-section {
          padding: 100px 20px;
          text-align: center;
          background: #fff6d6;
        }

        .cta-title {
          font-size: clamp(38px,5vw,60px);
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
          display: inline-block;
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
        }

      `}</style>

      <div className="ei-page">

        <Navbar pageData={pageData} />


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
                src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1200&auto=format&fit=crop"
                alt="Early Intervention"
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
                services.map((item, index) => (

                  <div
                    className="service-card"
                    key={index}
                  >

                    <div className="service-icon">
                      🧩
                    </div>

                    <div className="service-title">
                      {item}
                    </div>

                  </div>
                ))
              }

            </div>

          </div>

        </section>

        <Footer pageData={pageData} />

      </div>
    </>
  )
}