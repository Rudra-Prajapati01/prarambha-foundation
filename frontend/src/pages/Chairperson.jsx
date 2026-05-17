import { useEffect, useState } from "react"

import Navbar from "../components/common/Navbar"
import Footer from "../components/common/Footer"

export default function Chairperson() {

  /* =========================================
     STATES
  ========================================= */

  const [pageData, setPageData] =
    useState(null)

  const [chairData, setChairData] =
    useState(null)

  const [loading, setLoading] =
    useState(true)

  /* =========================================
     FETCH ABOUT API
  ========================================= */

  useEffect(() => {

    const fetchChairperson = async () => {

      try {

        const response = await fetch(
          "https://prarambha-backend.onrender.com/api/pages/about"
        )

        const data =
          await response.json()

        console.log(data)

        /* FULL PAGE DATA */
        setPageData(data)

        /* ONLY CHAIRPERSON */
        setChairData(
          data?.chairperson
        )

      } catch (error) {

        console.log(error)

      } finally {

        setLoading(false)
      }
    }

    fetchChairperson()

  }, [])

  /* =========================================
     LOADING
  ========================================= */

  if (loading) {

    return (
      <>
        <Navbar pageData={pageData} />

        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "24px",
            fontWeight: "700",
          }}
        >
          Loading...
        </div>
      </>
    )
  }

  return (

    <>
      <style>{`

        .chair-page {
          background: #fff;
          min-height: 100vh;
        }

        .chair-section {
          padding: 100px 20px;
        }

        .chair-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 80px;
        }

        .chair-img-wrap {
          position: relative;
          flex-shrink: 0;
        }

        .chair-img {
          width: 420px;
          height: 520px;
          object-fit: cover;
          border-radius: 30px;
          position: relative;
          z-index: 2;
          box-shadow: 0 20px 60px rgba(0,0,0,0.15);
        }

        .chair-blob {
          position: absolute;
          top: -25px;
          left: -25px;
          width: 420px;
          height: 520px;
          background: #E6394615;
          border-radius: 30px;
          z-index: 1;
        }

        .section-tag {
          font-size: 13px;
          font-weight: 800;
          color: #E63946;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .section-title {
          font-size: clamp(40px, 5vw, 64px);
          font-weight: 900;
          color: #0B1B4D;
          line-height: 1.1;
          margin-bottom: 30px;
        }

        .section-title span {
          color: #E63946;
        }

        .chair-quote {
          font-size: 24px;
          line-height: 1.8;
          font-style: italic;
          color: #333;
          border-left: 5px solid #E63946;
          padding-left: 24px;
          margin-bottom: 35px;
        }

        .section-desc {
          color: #555;
          line-height: 2;
          font-size: 17px;
          margin-bottom: 30px;
        }

        .chair-name {
          font-size: 30px;
          font-weight: 900;
          color: #0B1B4D;
        }

        .chair-role {
          color: #E63946;
          font-weight: 700;
          margin-top: 8px;
          font-size: 18px;
        }

        @media (max-width: 1000px) {

          .chair-inner {
            flex-direction: column;
            text-align: center;
          }

          .chair-quote {
            border-left: none;
            border-top: 5px solid #E63946;
            padding-left: 0;
            padding-top: 24px;
          }

          .chair-img,
          .chair-blob {
            width: 320px;
            height: 420px;
          }
        }

        @media (max-width: 600px) {

          .chair-section {
            padding: 70px 20px;
          }

          .chair-img,
          .chair-blob {
            width: 100%;
            max-width: 300px;
            height: 380px;
          }

          .section-title {
            font-size: 42px;
          }

          .chair-quote {
            font-size: 20px;
          }
        }

      `}</style>

      <div className="chair-page">

        {/* NAVBAR */}
        <Navbar pageData={pageData} />

        {/* CHAIRPERSON SECTION */}
        <section className="chair-section">

          <div className="chair-inner">

            {/* IMAGE */}
            <div className="chair-img-wrap">

              <div className="chair-blob"></div>

              <img
                className="chair-img"
                src={
                  chairData?.image
                    ? `https://prarambha-backend.onrender.com${chairData.image}`
                    : "https://i.pravatar.cc/500?img=47"
                }
                alt="Chairperson"
              />

            </div>

            {/* CONTENT */}
            <div className="chair-content">

              <p className="section-tag">
                Message from the Chairperson
              </p>

              <h1 className="section-title">
                Leading with <span>Heart</span>
              </h1>

              <blockquote className="chair-quote">
                {chairData?.quote}
              </blockquote>

              <p className="section-desc">
                {chairData?.description}
              </p>

              <div className="chair-name">
                {chairData?.name}
              </div>

              <div className="chair-role">
                {chairData?.role}
              </div>

            </div>

          </div>

        </section>

        {/* FOOTER */}
        <Footer pageData={pageData} />

      </div>
    </>
  )
}