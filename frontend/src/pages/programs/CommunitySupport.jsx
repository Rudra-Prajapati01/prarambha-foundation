import Navbar from "../../components/common/Navbar"
import Footer from "../../components/common/Footer"

import {
  usePageData,
} from "../../context/PageContext"

export default function CommunitySupport() {
  // Component name kept the same to avoid breaking your routing

  /* =====================================
      GLOBAL PAGE DATA
  ===================================== */

  const {
    pageData,
  } = usePageData()

  // NEW CONTENT: Parent Guidance & Counselling
  const guidanceTopics = [
    {
      title: "Practical Home Strategies",
      icon: "🏠",
      desc: "Actionable, easy-to-implement techniques and activities designed to support your child's learning and development directly at home.",
    },
    {
      title: "Daily Routine & Behavior Guidance",
      icon: "📅",
      desc: "Helping families establish structured daily schedules and positive behavior management techniques for a balanced, peaceful environment.",
    },
    {
      title: "Awareness About Child Development",
      icon: "🌱",
      desc: "Educating parents on key developmental milestones, helping them understand their child's unique pace, strengths, and abilities.",
    },
    {
      title: "Continuous Support For Parents",
      icon: "💙",
      desc: "Providing ongoing emotional support, dedicated counseling, and a safe space for parents to share experiences and grow together.",
    },
  ]

  return (
    <>
      <style>{`

        .guidance-page {
          background: #fff;
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* HERO */
        .guidance-hero {
          padding: 120px 20px 90px;
          background: linear-gradient(135deg, #eefdf4, #ffffff);
          position: relative;
          overflow: hidden;
        }

        .guidance-hero::before {
          content: "";
          position: absolute;
          top: -150px;
          right: -150px;
          width: 400px;
          height: 400px;
          background: rgba(230, 57, 70, 0.08);
          border-radius: 50%;
        }

        .guidance-inner {
          max-width: 1250px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
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
          font-size: clamp(38px, 5vw, 64px);
          line-height: 1.1;
          font-weight: 900;
          color: #0B1B4D;
          margin-bottom: 24px;
          text-transform: uppercase;
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
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
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
          font-size: clamp(38px, 5vw, 60px);
          font-weight: 900;
          color: #0B1B4D;
          margin-bottom: 70px;
        }

        .section-title span {
          color: #E63946;
        }

        .support-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }

        .support-card {
          background: white;
          border-radius: 28px;
          padding: 40px 30px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          border: 1px solid #eee;
          transition: 0.4s;
          display: flex;
          flex-direction: column;
        }

        .support-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 18px 50px rgba(0, 0, 0, 0.12);
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
          font-size: 24px;
          font-weight: 800;
          color: #0B1B4D;
          margin-bottom: 16px;
          line-height: 1.3;
        }

        .support-desc {
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
          font-size: clamp(38px, 5vw, 60px);
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
          .guidance-hero {
            padding: 90px 20px 70px;
          }
          .hero-title {
            font-size: 40px;
          }
          .hero-desc {
            font-size: 16px;
          }
          .support-title {
            font-size: 22px;
          }
        }

      `}</style>

      <div className="guidance-page">

        {/* NAVBAR */}
        <Navbar pageData={pageData} />

        {/* HERO */}
        <section className="guidance-hero">
          <div className="guidance-inner">
            <div>
              <p className="hero-tag">Family Empowerment</p>
              <h1 className="hero-title">PARENT GUIDANCE & <span>COUNSELLING</span></h1>
              <p className="hero-desc">
                Parents are a child's first and most important teachers. We provide you with 
                the knowledge, strategies, and emotional support needed to confidently nurture 
                your child's development, handle daily challenges, and create a thriving home environment.
              </p>
              <a href="/contact" className="hero-btn">Get Support</a>
            </div>
            <div className="hero-image">
              <img
                src="https://res.cloudinary.com/dvg5yktms/image/upload/v1779106661/prarambha-foundation/q7yijmcjwuujquaklc15.jpg"
                alt="Parent Guidance and Counselling"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* SUPPORT CARDS */}
        <section className="support-section">
          <div className="support-container">
            <h2 className="section-title">Our Guidance <span>Focus</span></h2>
            <div className="support-grid">
              {guidanceTopics.map((item, index) => (
                <div className="support-card" key={index}>
                  <div className="support-icon">{item.icon}</div>
                  <div className="support-title">{item.title}</div>
                  <div className="support-desc">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <h2 className="cta-title">You Are Not <span>Alone</span></h2>
          <p className="cta-desc">
            Navigating a child's developmental journey can be challenging, but you don't 
            have to do it by yourself. Connect with our counselors to get the continuous 
            support and practical guidance your family deserves.
          </p>
          <a href="/contact" className="cta-btn">Connect With A Counselor</a>
        </section>

        {/* FOOTER */}
        <Footer pageData={pageData} />

      </div>
    </>
  )
}