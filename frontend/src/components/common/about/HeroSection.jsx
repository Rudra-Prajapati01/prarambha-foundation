export default function HeroSection({ data }) {

  return (
    <>
      <style>{`
        .about-hero {
          background: #fffbe8;
          padding: 80px 40px 0;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          gap: 60px;
          max-width: 1200px;
          margin: 0 auto;
          min-height: 420px;
        }

        .hero-text {
          flex: 1;
          z-index: 2;
        }

        .hero-badge {
          display: inline-block;
          background: #E63946;
          color: #fff;
          padding: 6px 18px;
          border-radius: 50px;
          margin-bottom: 18px;
          font-weight: 700;
        }

        .hero-title {
          font-size: clamp(32px, 5vw, 54px);
          font-weight: 900;
          line-height: 1.15;
          margin-bottom: 20px;
        }

        .hero-title span {
          color: #E63946;
        }

        .hero-desc {
          color: #555;
          line-height: 1.8;
          margin-bottom: 32px;
        }

        .hero-cta {
          display: inline-block;
          background: #E63946;
          color: #fff;
          padding: 14px 32px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 700;
          transition: 0.3s ease;
        }

        .hero-cta:hover {
          background: #cf2e3c;
          transform: translateY(-2px);
        }

        .hero-img-wrap {
          flex: 1;
          position: relative;
          display: flex;
          justify-content: center;
        }

        .hero-img-wrap img {
          width: 340px;
          height: 420px;
          object-fit: cover;
          border-radius: 24px 24px 0 0;
          position: relative;
          z-index: 1;
          transition: 0.4s ease;
        }

        .hero-img-wrap img:hover {
          transform: scale(1.03);
        }

        .hero-blob {
          position: absolute;
          right: -40px;
          bottom: 0;
          width: 380px;
          height: 380px;
          background: #F4A020;
          border-radius: 60%;
        }

        .dots-decor {
          position: absolute;
          right: 60px;
          top: 40px;
          display: grid;
          grid-template-columns: repeat(5, 8px);
          gap: 8px;
        }

        .dots-decor span {
          width: 8px;
          height: 8px;
          background: #2A9BD430;
          border-radius: 50%;
        }

        @media (max-width: 900px) {

          .about-hero {
            flex-direction: column;
            padding: 40px 20px;
            text-align: center;
          }

          .hero-img-wrap img,
          .hero-blob {
            display: none;
          }

          .hero-title {
            font-size: 36px;
          }

          .hero-desc {
            font-size: 15px;
          }
        }
      `}</style>

      <div style={{ background: "#fffbe8" }}>

        <div className="about-hero">

          {/* LEFT CONTENT */}

          <div className="hero-text">

            <div className="hero-badge">
              {data?.subtitle || "About Us"}
            </div>

            <h1 className="hero-title">
              {data?.title || "Empowering Every Child With Inclusion"}
            </h1>

            <p className="hero-desc">
              {
                data?.description ||
                "We believe every child deserves equal opportunities, quality support, and a caring environment to grow with confidence and dignity."
              }
            </p>

            <a
              href="#mission"
              className="hero-cta"
            >
              {data?.buttonText || "Learn More"}
            </a>

          </div>

          {/* RIGHT IMAGE */}

          <div className="hero-img-wrap">

            <div className="hero-blob"></div>

            <div className="dots-decor">
              {Array.from({ length: 25 }).map((_, i) => (
                <span key={i}></span>
              ))}
            </div>

            <img
              src={
                data?.image
                  ? data.image.startsWith("http")
                    ? data.image
                    : `https://prarambha-backend.onrender.com${data.image}`
                  : "https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&q=80"
              }

              alt="about hero"

              onError={(e) => {

                e.target.onerror = null

                e.target.src =
                  "https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&q=80"
              }}

              loading="lazy"
            />

          </div>

        </div>

      </div>
    </>
  )
}