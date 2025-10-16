import Footer from "@/components/ui/Shared/Footer"
import { Hero } from "./Hero"
import TrustedSection from "./TrustedSection"
// import WebFollow from "./WebFollow"
import Slider from "./Slider"
import ProductShowcase from "./Product/ProductShow"
import ProductOverview from "./Product/ProductOverview"
import FullScreenBankCard from "./FullScreenBankCard"


const Home = () => {
  return (
    <>
    <Hero />
    <ProductShowcase />
    <TrustedSection />
    <ProductOverview />
    <FullScreenBankCard />
    <Slider />
    <Footer />
    </>
  )
}

export default Home