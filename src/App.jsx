import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/home/Home";
import About from "./pages/about/About"
import Projects from "./pages/projects/Projects"
import ProjectsDetails from "./pages/projects/ProjectDetails"
import Contact from "./pages/contact/Contact"

import { Route, Routes } from "react-router-dom";

function App() {
  return(
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/projects/:slug" element={<ProjectsDetails />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App
