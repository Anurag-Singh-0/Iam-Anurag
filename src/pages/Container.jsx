import Navbar from "../components/layout/Navbar";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Achievement from "./Achievement";
import Contact from "./Contact";
import { SmoothScrollProvider } from "../context/SmoothScrollContext";
import Footer from "../components/layout/Footer";

function Container() {
  return (
    <SmoothScrollProvider>
      <div className="h-screen overflow-y-auto scroll-smooth">
        <Navbar />
        
        <main>
          <section id="home" className="min-h-screen">
            <Home />
          </section>
          
          <section id="about" className="min-h-screen">
            <About />
          </section>
          
          <section id="skills" className="min-h-screen">
            <Skills />
          </section>
          
          <section id="projects" className="min-h-screen">
            <Projects />
          </section>
          
          <section id="achievements" className="min-h-screen">
            <Achievement />
          </section>
          
          <section id="contact" className="min-h-screen">
            <Contact />
          </section>
        </main>

        <Footer/>
      </div>
    </SmoothScrollProvider>
  );
}

export default Container;