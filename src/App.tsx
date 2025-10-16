import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import { Navbar } from "./components/ui/Shared/Navbar"
import ContactSection from "./pages/Contact/ContactSection"
import NotFound from "./pages/404/404"


const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/contact" element={<ContactSection />}/>
      <Route path="/404" element={<NotFound />}/>
    </Routes>
    </>
  )
}

export default App