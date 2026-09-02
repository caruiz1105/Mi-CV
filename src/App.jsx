import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import WhatsappButton from "./components/WhatsappButton";

function App() {
  return (
    <>
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <WhatsappButton />

      <footer
        style={{
          textAlign: "center",
          padding: "40px 20px",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          marginTop: "50px",
        }}
      >
        <p
          style={{
            fontSize: "1rem",
            marginBottom: "10px",
          }}
        >
          © 2026 Carlos Ruiz. Todos los derechos reservados.
        </p>

        <p
          style={{
            opacity: 0.7,
            fontSize: ".9rem",
          }}
        >
          Desarrollado con React, Vite, Framer Motion y CSS.
        </p>
      </footer>
    </>
  );
}

export default App;