import Navbar from "../components/common/Navbar"
import Footer from "../components/common/Footer"

export default function DonateNow() {

  const donations = [
    {
      title: "Sponsor a Child",
      amount: "₹45,000",
      desc:
        "Support therapy, education, intervention, and development programs for one child.",
      icon: "❤️",
    },

    {
      title: "Therapy Support Kit",
      amount: "₹25,000",
      desc:
        "Help provide sensory tools, therapy materials, and learning resources.",
      icon: "🧠",
    },

    {
      title: "Inclusive Classroom",
      amount: "₹1,50,000",
      desc:
        "Support classroom setup, learning equipment, and inclusive education infrastructure.",
      icon: "🏫",
    },
  ]

  return (
    <>
      <style>{`

        .donate-page {
          background: #fff;
          min-height: 100vh;
        }

        /* HERO */

        .donate-hero {
          padding: 120px 20px 90px;
          background:
            linear-gradient(
              135deg,
              #fff4e8,
              #ffffff
            );
          text-align: center;
        }

        .hero-inner {
          max-width: 1000px;
          margin: auto;
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
          font-weight: 900;
          line-height: 1.1;
          color: #0B1B4D;
          margin-bottom: 24px;
        }

        .hero-title span {
          color: #E63946;
        }

        .hero-desc {
          max-width: 800px;
          margin: auto;
          color: #555;
          line-height: 1.9;
          font-size: 18px;
        }

        /* CARDS */

        .donation-section {
          padding: 100px 20px;
        }

        .donation-container {
          max-width: 1200px;
          margin: auto;
        }

        .donation-grid {
          display: grid;
          grid-template-columns:
            repeat(auto-fit,minmax(300px,1fr));
          gap: 30px;
        }

        .donation-card {
          background: white;
          border-radius: 30px;
          padding: 45px 35px;
          box-shadow:
            0 12px 40px rgba(0,0,0,0.08);
          border: 1px solid #eee;
          transition: 0.4s;
          text-align: center;
        }

        .donation-card:hover {
          transform: translateY(-8px);
        }

        .donation-icon {
          font-size: 60px;
          margin-bottom: 24px;
        }

        .donation-title {
          font-size: 30px;
          font-weight: 800;
          color: #0B1B4D;
          margin-bottom: 16px;
        }

        .donation-amount {
          font-size: 42px;
          font-weight: 900;
          color: #E63946;
          margin-bottom: 20px;
        }

        .donation-desc {
          color: #666;
          line-height: 1.9;
          margin-bottom: 30px;
        }

        .donate-btn {
          display: inline-block;
          background: #E63946;
          color: white;
          padding: 16px 36px;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 700;
          transition: 0.3s;
        }

        .donate-btn:hover {
          transform: scale(1.05);
        }

        /* QR SECTION */

        .qr-section {
          background:
            linear-gradient(
              135deg,
              #0B1B4D,
              #16295c
            );

          padding: 100px 20px;
          text-align: center;
          color: white;
        }

        .qr-title {
          font-size: clamp(38px,5vw,60px);
          font-weight: 900;
          margin-bottom: 20px;
        }

        .qr-title span {
          color: #FFD600;
        }

        .qr-desc {
          max-width: 700px;
          margin: auto;
          line-height: 1.9;
          color: #f1f1f1;
          margin-bottom: 50px;
        }

        .qr-box {
          width: 260px;
          height: 260px;
          margin: auto;
          background: white;
          border-radius: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #999;
          font-weight: 700;
          padding: 20px;
        }

        @media(max-width:768px) {

          .donate-hero {
            padding: 100px 20px 70px;
          }

          .hero-title {
            font-size: 48px;
          }

          .donation-title {
            font-size: 26px;
          }
        }

      `}</style>

      <div className="donate-page">

        <Navbar pageData={pageData} />


        {/* HERO */}

        <section className="donate-hero">

          <div className="hero-inner">

            <p className="hero-tag">
              Support Inclusion & Early Intervention
            </p>

            <h1 className="hero-title">
              Donate <span>Now</span>
            </h1>

            <p className="hero-desc">

              Your contribution helps children receive therapy,
              inclusive education, developmental support,
              awareness programs, and a brighter future.

            </p>

          </div>

        </section>

        {/* DONATION OPTIONS */}

        <section className="donation-section">

          <div className="donation-container">

            <div className="donation-grid">

              {
                donations.map((item, index) => (

                  <div
                    className="donation-card"
                    key={index}
                  >

                    <div className="donation-icon">
                      {item.icon}
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
                      Donate Now
                    </a>

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
