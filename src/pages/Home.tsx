import Footer from "@/components/ui/Shared/Footer"
import { Hero } from "./Hero"
import TrustedSection from "./TrustedSection"
import WebFollow from "./WebFollow"
import Slider from "./Slider"
import ProductShowcase from "./ProductShow"


const Home = () => {
  return (
    <>
    <Hero />
    <WebFollow/>
    <ProductShowcase />
    <TrustedSection />
    <Slider />
    <Footer />
    </>
  )
}

export default Home