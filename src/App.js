import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";
import Experience from "./components/Experience";
import Education from "./components/Education";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Experience />
      <Projects />
      <Education />
      <About />

      <Skills />
      <Contact />

      <SocialLinks />
    </div>
  );
}

export default App;
