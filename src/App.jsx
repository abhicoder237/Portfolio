import { Routes, Route } from "react-router-dom"
 
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
// import Projects from "./pages/Projects"
import About from "./pages/About"
import Project from "./pages/Project"
import CaseStudy from "./pages/CaseStudy"
import Talks from "./pages/Talks"
import Footer from "./pages/Footer"
 

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/case" element={<CaseStudy />} />
        <Route path="/talk" element={<Talks />} />
      </Routes>

      <Footer/>
    </>
  )
}

export default App
