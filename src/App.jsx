import { Routes, Route, useLocation } from "react-router-dom"
 
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
// import Projects from "./pages/Projects"
import About from "./pages/About"
import Project from "./pages/Project"
import CaseStudy from "./pages/CaseStudy"
import Talks from "./pages/Talks"
import Footer from "./pages/Footer"
import { useEffect, useState } from "react"
import Loader from "./pages/Loder"
 

const App = () => {

  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Show loader when path changes
    setLoading(true);
    
    // Simulate a brief delay for assets to settle
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200); // 1.2 seconds feels premium

    return () => clearTimeout(timer);
  }, [location]); // Triggers on every page change
  return (
    <>
      <Navbar />

      {loading && <Loader />}

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
