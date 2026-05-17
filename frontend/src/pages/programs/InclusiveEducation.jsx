import Navbar from "../../components/common/Navbar"
import Footer from "../../components/common/Footer"

export default function InclusiveEducation() {

  const programs = [

    {
      title: "Inclusive Classroom Support",
      icon: "🏫",
      desc:
        "Creating child-friendly classrooms where every child learns with dignity, participation, and acceptance.",
    },

    {
      title: "Montessori-Based Learning",
      icon: "📚",
      desc:
        "Hands-on learning methods that build independence, curiosity, confidence, and practical understanding.",
    },

    {
      title: "Individualised Learning Plans",
      icon: "📝",
      desc:
        "Structured learning support based on every child’s pace, strengths, challenges, and developmental needs.",
    },

    {
      title: "School Readiness Programs",
      icon: "🎒",
      desc:
        "Helping children develop communication, attention, classroom behavior, and learning readiness skills.",
    },

    {
      title: "Special Education Support",
      icon: "💡",
      desc:
        "Supporting children with autism, ADHD, learning difficulties, and developmental challenges.",
    },

    {
      title: "Social & Life Skills",
      icon: "🤝",
      desc:
        "Building communication, interaction, emotional regulation, and real-world independence.",
    },
  ]

  return (
    <>
      <style>{`

        .edu-page {
          background: #fff;
          min-height: 100vh;
        }

        /* HERO */

        .edu-hero {
          padding: 120px 20px 90px;
          background:
            linear-gradient(
              135deg,
              #fff5ef,
              #ffffff
            );
        }

        .edu-inner {
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
          font-size: clamp(38px,5vw,60px);
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
            repeat(auto-fit,minmax(280px,1fr));
          gap: 30px;
        }

        .program-card {
          background: white;
          border-radius: 28px;
          padding: 40px 30px;
          box-shadow:
            0 10px 40px rgba(0,0,0,0.08);
          border: 1px solid #eee;
          transition: 0.4s;
        }

        .program-card:hover {
          transform: translateY(-8px);
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

      <div className="edu-page">

        <Navbar />


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

                Every child deserves a learning environment
                where they feel accepted, supported,
                understood, and encouraged.
                Our inclusive education programs help children
                learn with confidence through therapy-based,
                child-centered educational support.

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
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop"
                alt="Inclusive Education"
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
                programs.map((item, index) => (

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