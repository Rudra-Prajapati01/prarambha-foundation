function TeamCard({
  name,
  role,
  image,
  color,
}) {

  /* =====================================
      IMAGE SUPPORT
  ===================================== */

  const teamImage =
    image
      ? image.startsWith("http")
        ? image
        : `https://prarambha-backend.onrender.com${image}`
      : "https://i.pravatar.cc/300"

  return (

    <div className="team-card">

      <div
        className="team-avatar"

        style={{
          borderColor:
            color || "#E63946",
        }}
      >

        <img
          src={teamImage}

          alt={name}

          loading="lazy"

          onError={(e) => {

            e.target.onerror = null

            e.target.src =
              "https://i.pravatar.cc/300"
          }}
        />

      </div>

      <h3 className="team-name">
        {name}
      </h3>

      <p
        className="team-role"

        style={{
          color:
            color || "#E63946",
        }}
      >
        {role}
      </p>

    </div>
  )
}

export default function TeamSection({
  data,
}) {

  return (
    <>
      <style>{`

        .team-section {
          background: #fff;
          padding: 80px 40px;
        }

        .team-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
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
          line-height: 1.2;
        }

        .section-title span {
          color: #E63946;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }

        .team-card {
          background: #fafafa;
          border-radius: 24px;
          padding: 30px 20px;
          text-align: center;
          transition: 0.3s ease;
          box-shadow: 0 4px 16px rgba(0,0,0,0.05);
        }

        .team-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.12);
        }

        .team-avatar {
          width: 110px;
          height: 110px;
          margin: 0 auto 20px;
          border-radius: 50%;
          overflow: hidden;
          border: 5px solid #E63946;
        }

        .team-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: 0.4s ease;
        }

        .team-avatar img:hover {
          transform: scale(1.08);
        }

        .team-name {
          font-size: 20px;
          font-weight: 800;
          color: #1a1a2e;
          margin-bottom: 8px;
        }

        .team-role {
          font-size: 15px;
          font-weight: 600;
        }

        @media (max-width: 992px) {

          .team-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {

          .team-grid {
            grid-template-columns: 1fr;
          }

          .team-section {
            padding: 60px 20px;
          }
        }

      `}</style>

      <section className="team-section">

        <div className="team-container">

          {/* HEADER */}

          <div className="section-header">

            <p className="section-tag">
              The People Behind the Mission
            </p>

            <h2 className="section-title">
              Meet Our <span>Team</span>
            </h2>

          </div>

          {/* TEAM GRID */}

          <div className="team-grid">

            {data?.map(
              (member, index) => (

                <TeamCard
                  key={index}
                  {...member}
                />

              )
            )}

          </div>

        </div>

      </section>
    </>
  )
}