import Navbar from "./components/Navbar";

import Home from "./pages/Home/Home";
import About from "./pages/About/About"
import Projects from "./pages/Projects/Projects"
import ProjectsDetails from "./pages/Projects/ProjectDetails"
import Blog from "./pages/Blog/Blog"
import Contact from "./pages/Contact/Contact"

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
        <Route path="/blog" element={<Blog />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </>
  );
}

export default App
