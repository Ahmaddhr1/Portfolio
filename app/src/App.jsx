import Navbar from "./components/Navbar";
import Contact from "./sections/Contact";
import Education from "./sections/Education";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Footer from "./components/Footer";
import Skills from "./sections/Skills";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Home id="#" />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
