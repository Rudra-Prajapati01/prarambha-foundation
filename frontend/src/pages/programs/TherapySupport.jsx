import Navbar from "../../components/common/Navbar"
import Footer from "../../components/common/Footer"

export default function TherapySupport() {

  const therapies = [

    {
      title: "Speech Therapy",
      icon: "🗣️",
      desc:
        "Helping children improve speech clarity, language development, communication, and social interaction.",
    },

    {
      title: "Occupational Therapy",
      icon: "🧠",
      desc:
        "Supporting sensory integration, focus, fine motor skills, and daily functional independence.",
    },

    {
      title: "Behavior Therapy",
      icon: "💙",
      desc:
        "Structured support for emotional regulation, attention, behavior management, and confidence building.",
    },

    {
      title: "Sensory Integration",
      icon: "🎨",
      desc:
        "Therapy activities designed to improve sensory processing, responsiveness, and engagement.",
    },

    {
      title: "Attention Development",
      icon: "✨",
      desc:
        "Programs that improve concentration, classroom participation, listening, and task completion.",
    },

    {
      title: "Parent Guidance",
      icon: "👨‍👩‍👧",
      desc:
        "Training and counseling for parents to continue therapy support effectively at home.",
    },
  ]

  return (
    <>
      <style>{`

        .therapy-page {
          background: #fff;
          min-height: 100vh;
        }

        /* HERO */

        .therapy-hero {
          padding: 120px 20px 90px;
          background:
            linear-gradient(
              135deg,
              #e9f6ff,
              #ffffff
            );
        }

        .therapy-inner {
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns:
            repeat(auto-fit,minmax(320px,1fr));
          gap: 70px;
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
          font-size: clamp(42px,6vw,72px);
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
          padding: 18px 42px;
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

        /* THERAPIES */

        .therapy-section {
          padding: 100px 20px;
        }

        .therapy-container {
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

        .therapy-grid {
          display: grid;
          grid-template-columns:
            repeat(auto-fit,minmax(280px,1fr));
          gap: 30px;
        }

        .therapy-card {
          background: white;
          border-radius: 28px;
          padding: 40px 30px;
          box-shadow:
            0 10px 40px rgba(0,0,0,0.08);
          border: 1px solid #eee;
          transition: 0.4s;
        }

        .therapy-card:hover {
          transform: translateY(-8px);
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

        /* IMPACT */

        .impact-section {
          background:
            linear-gradient(
              135deg,
              #0B1B4D,
              #16295c
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
          font-size: 52px;
          font-weight: 900;
          color: #FFD600;
          margin-bottom: 12px;
        }

        .impact-text {
          color: #f1f1f1;
          line-height: 1.8;
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
          color: #555;
          line-height: 1.9;
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

      <div className="therapy-page">

        <Navbar />

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
                Our therapy programs are designed
                to support every child’s developmental journey.

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
                src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1200&auto=format&fit=crop"
                alt="Therapy Support"
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
                therapies.map((item, index) => (

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
                ))
              }

            </div>

          </div>

        </section>

        <Footer />

      </div>
    </>
  )
}