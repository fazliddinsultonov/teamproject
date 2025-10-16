import Footer from "@/components/ui/Shared/Footer"
import { Hero } from "./Hero"
import TrustedSection from "./TrustedSection"
import WebFollow from "./WebFollow"
import Slider from "./Slider"


const Home = () => {
  return (
    <>
    <Hero />
    <WebFollow/>
    <TrustedSection />
    <Slider />
    <Footer />
    </>
  )
}

export default Home