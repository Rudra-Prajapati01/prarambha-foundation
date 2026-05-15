import { useEffect, useState } from "react"
import axios from "axios"

import Navbar from "../components/common/Navbar"
import Hero from "../components/common/Hero"
import Story from "../components/common/Story"
import Footer from "../components/common/Footer"
import Programs from "../components/common/Programs"
import Stats from "../components/common/Stats"

function Home() {

  const [pageData, setPageData] = useState(null)

  useEffect(() => {

    fetchPage()

  }, [])

  const fetchPage = async () => {

    try {

      const { data } = await axios.get(
        "http://localhost:5000/api/pages/home"
      )

      setPageData(data)

    } catch (error) {

      console.log(error)
    }
  }

  if (!pageData) {

    return (

      <div
        className="
          min-h-screen
          flex
          items-center
          justify-center
          text-3xl
          font-extrabold
          text-[#1F2937]
        "
      >

        Loading...

      </div>

    )
  }

  return (

    <div className="w-full overflow-x-hidden bg-white">

      <Navbar />

      <Hero pageData={pageData} />

      <Story pageData={pageData} />

      <Programs pageData={pageData} />

      <Stats pageData={pageData} />

      <Footer pageData={pageData} />

    </div>
  )
}

export default Home