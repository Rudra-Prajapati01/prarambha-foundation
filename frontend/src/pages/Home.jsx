import Navbar from "../components/common/Navbar"
import Hero from "../components/common/Hero"
import Story from "../components/common/Story"
import Footer from "../components/common/Footer"
import Programs from "../components/common/Programs"
import Stats from "../components/common/Stats"

function Home() {
  return (
    <div className="w-full overflow-x-hidden bg-white">

      <Navbar />

      <Hero />

      <Story />

      <Programs />

      <Stats />

      <Footer />

    </div>
  )
}

export default Home