export default function MissionSection({ data }) {

  return (
    <>
      <style>{`
        .mission-section {
          background: #fff;
          padding: 70px 40px;
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          gap: 60px;
          align-items: center;
        }

        .mission-img-wrap {
          flex: 1;
          position: relative;
        }

        .mission-img-wrap img {
          width: 100%;
          height: 500px;
          object-fit: cover;
          border-radius: 24px;
          box-shadow: 0 12px 40px rgba(0,0,0,0.12);
        }

        .mission-badge-float {
          position: absolute;
          bottom: -20px;
          left: -20px;
          background: #F4A020;
          color: #fff;
          font-weight: 800;
          padding: 14px 20px;
          border-radius: 16px;
          text-align: center;
          line-height: 1.4;
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }

        .mission-badge-float strong {
          font-size: 24px;
          display: block;
        }

        .mission-content {
          flex: 1;
        }

        .section-tag {
          font-weight: 800;
          font-size: 13px;
          color: #E63946;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .section-title {
          font-size: clamp(24px, 3vw, 42px);
          font-weight: 900;
          color: #1a1a2e;
          line-height: 1.25;
          margin-bottom: 18px;
        }

        .section-title span {
          color: #E63946;
        }

        .section-desc {
          font-size: 15px;
          color: #666;
          line-height: 1.9;
          margin-bottom: 24px;
        }

        .mission-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .mission-list li {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 15px;
          color: #444;
          font-weight: 500;
        }

        .mission-list li::before {
          content: '✓';
          width: 26px;
          height: 26px;
          background: #E63946;
          color: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 800;
          flex-shrink: 0;
        }

        @media (max-width: 900px) {
          .mission-section {
            flex-direction: column;
            padding: 40px 20px;
          }

          .mission-img-wrap img {
            height: 350px;
          }
        }
      `}</style>

      <section
        id="mission"
        className="mission-section"
      >

        <div className="mission-img-wrap">

          <img
            src={
              data?.image
                ? `https://prarambha-backend.onrender.com${data.image}`
                : "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80"
            }
            alt="mission"
          />

          <div className="mission-badge-float">
            <strong>14+</strong>
            Years of Impact
          </div>

        </div>

        <div className="mission-content">

          <p className="section-tag">
            {data?.heading || "Our Mission"}
          </p>

          <h2 className="section-title">
            {data?.title || "A Journey of Love & Purpose"}
          </h2>

          <p className="section-desc">
            {data?.content}
          </p>

          <ul className="mission-list">

            <li>
              Early intervention & child development programs
            </li>

            <li>
              Speech & behavioural therapy support
            </li>

            <li>
              Inclusive education for special children
            </li>

            <li>
              Family counselling & engagement
            </li>

            <li>
              Community support initiatives
            </li>

          </ul>

        </div>

      </section>
    </>
  )
}