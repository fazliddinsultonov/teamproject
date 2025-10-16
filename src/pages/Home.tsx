import Footer from "@/components/ui/Shared/Footer"
import { Hero } from "./Hero"
import TrustedSection from "./TrustedSection"
import WebFollow from "./WebFollow"
import Slider from "./Slider"
import ProductShowcase from "./Product/ProductShow"
import ProductOverview from "./Product/ProductOverview"


const Home = () => {
  return (
    <>
    <Hero />
    <WebFollow/>
    <ProductShowcase />
    <TrustedSection />
    <ProductOverview />
    <Slider />
    <Footer />
    </>
  )
}

export default Home