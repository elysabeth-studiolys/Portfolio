import { Routes, Route } from 'react-router-dom';

import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import ProjectPage from "./pages/ProjectPage";

export default function App() {
  return (
    <Routes>
      {
        <Route path="/" element={
          <div>
            <div className="p-5 md:px-[10%] flex justify-center">
              <Navbar />
              <Home />
            </div>

            <About />
            <div className="p-5 md:px-[10%]">
              <Experience />
              <Projects />
            </div>

            <Footer />
          </div>} />
      }
      {
        <Route path='/projects/:slug' element={<ProjectPage />} />
      }
    </Routes>
  )

}   