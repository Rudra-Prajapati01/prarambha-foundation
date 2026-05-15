export default function ChairpersonSection({ data }) {

  return (
    <>
      <style>{`
        .chair-section {
          background: #fff;
          padding: 80px 40px;
        }

        .chair-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          gap: 60px;
          align-items: center;
        }

        .chair-img-wrap {
          position: relative;
          flex-shrink: 0;
        }

        .chair-img-wrap img {
          width: 320px;
          height: 400px;
          object-fit: cover;
          border-radius: 24px;
          position: relative;
          z-index: 2;
          box-shadow: 0 10px 40px rgba(0,0,0,0.15);
        }

        .chair-blob {
          position: absolute;
          top: -20px;
          left: -20px;
          width: 320px;
          height: 400px;
          background: #E6394618;
          border-radius: 24px;
          z-index: 1;
        }

        .section-tag {
          font-size: 13px;
          font-weight: 800;
          color: #E63946;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .section-title {
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 900;
          color: #1a1a2e;
          margin-bottom: 20px;
        }

        .section-title span {
          color: #E63946;
        }

        .chair-quote {
          font-size: 20px;
          line-height: 1.7;
          font-style: italic;
          color: #333;
          border-left: 5px solid #E63946;
          padding-left: 20px;
          margin-bottom: 24px;
        }

        .section-desc {
          color: #666;
          line-height: 1.8;
          margin-bottom: 20px;
        }

        .chair-name {
          font-size: 22px;
          font-weight: 900;
          color: #1a1a2e;
        }

        .chair-role {
          color: #E63946;
          font-weight: 600;
          margin-top: 4px;
        }

        @media (max-width: 900px) {
          .chair-inner {
            flex-direction: column;
            text-align: center;
          }

          .chair-quote {
            border-left: none;
            border-top: 5px solid #E63946;
            padding-left: 0;
            padding-top: 20px;
          }

          .chair-img-wrap img,
          .chair-blob {
            width: 280px;
            height: 340px;
          }
        }

        @media (max-width: 600px) {
          .chair-section {
            padding: 60px 20px;
          }
        }
      `}</style>

      <section className="chair-section">

        <div className="chair-inner">

          <div className="chair-img-wrap">

            <div className="chair-blob"></div>

            <img
              src={
                data?.image
                  ? `http://localhost:5000${data.image}`
                  : "https://i.pravatar.cc/500?img=47"
              }
              alt="Chairperson"
            />

          </div>

          <div className="chair-content">

            <p className="section-tag">
              Message from the Chairperson
            </p>

            <h2 className="section-title">
              Leading with <span>Heart</span>
            </h2>

            <blockquote className="chair-quote">
              {data?.quote}
            </blockquote>

            <p className="section-desc">
              {data?.description}
            </p>

            <div className="chair-name">
              {data?.name}
            </div>

            <div className="chair-role">
              {data?.role}
            </div>

          </div>

        </div>

      </section>
    </>
  )
}