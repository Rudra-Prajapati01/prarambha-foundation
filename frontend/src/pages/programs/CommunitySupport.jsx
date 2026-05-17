import Navbar from "../../components/common/Navbar"
import Footer from "../../components/common/Footer"

export default function CommunitySupport() {

  const supports = [

    {
      title: "Parent Counselling",
      icon: "👨‍👩‍👧",
      desc:
        "Helping parents understand child development, behavior, communication, and emotional support strategies.",
    },

    {
      title: "Teacher Training",
      icon: "👩‍🏫",
      desc:
        "Supporting educators with inclusive classroom strategies and child-centered learning methods.",
    },

    {
      title: "Awareness Programs",
      icon: "📢",
      desc:
        "Community awareness sessions about autism, ADHD, developmental delays, and early identification.",
    },

    {
      title: "Early Screening Camps",
      icon: "🩺",
      desc:
        "Screening initiatives for early identification of developmental and learning challenges in children.",
    },

    {
      title: "Family Guidance",
      icon: "💙",
      desc:
        "Providing emotional support and structured developmental guidance for families and caregivers.",
    },

    {
      title: "Community Outreach",
      icon: "🌍",
      desc:
        "Connecting with schools, families, and communities to promote inclusion and child development support.",
    },
  ]

  return (
    <>
      <style>{`

        .community-page {
          background: #fff;
          min-height: 100vh;
        }

        /* HERO */

        .community-hero {
          padding: 120px 20px 90px;
          background:
            linear-gradient(
              135deg,
              #eefdf4,
              #ffffff
            );
        }

        .community-inner {
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

        /* SUPPORT SECTION */

        .support-section {
          padding: 100px 20px;
        }

        .support-container {
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

        .support-grid {
          display: grid;
          grid-template-columns:
            repeat(auto-fit,minmax(280px,1fr));
          gap: 30px;
        }

        .support-card {
          background: white;
          border-radius: 28px;
          padding: 40px 30px;
          box-shadow:
            0 10px 40px rgba(0,0,0,0.08);
          border: 1px solid #eee;
          transition: 0.4s;
        }

        .support-card:hover {
          transform: translateY(-8px);
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

      <div className="community-page">

        <Navbar />


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
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop"
                alt="Community Support"
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
                supports.map((item, index) => (

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