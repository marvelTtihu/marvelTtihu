import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import About from "./pages/about/About"
import Projects from "./pages/projects/Projects"
import ProjectsDetails from "./pages/projects/ProjectDetails"
import Contact from "./pages/contact/Contact"

import { ThemeProvider } from "./context/ThemeContext";
import { Route, Routes } from "react-router-dom";

function App() {
  return(
    <ThemeProvider>
      <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/projects/:slug" element={<ProjectsDetails />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App
