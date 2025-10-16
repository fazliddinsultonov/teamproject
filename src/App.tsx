import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import { Navbar } from "./components/ui/Shared/Navbar"
import ContactSection from "./pages/Contact/ContactSection"
import NotFound from "./pages/404/404"
import Pricing from "./pages/pricing/Pricing"
import Feature from "./pages/Feature/Feature"


const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/contact" element={<ContactSection />}/>
      <Route path="/404" element={<NotFound />}/>
      <Route path="/pricing" element={<Pricing />}/>
      <Route path="/feature" element={<Feature  />}/>
    </Routes>
    </>
  )
}

export default App