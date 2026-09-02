import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Navbar() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const links = [
    { name: "Sobre mí", href: "about" },
    { name: "Habilidades", href: "skills" },
    { name: "Experiencia", href: "experience" },
    { name: "Proyectos", href: "projects" },
    { name: "Contacto", href: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        position: "fixed",
        top: "20px",

        left: 0,
        right: 0,
        margin: "0 auto",

        width: "max-content",
        maxWidth: "90%",

        background: "rgba(255,255,255,0.05)",

        backdropFilter: "blur(25px)",
        WebkitBackdropFilter: "blur(25px)",

        border: "1px solid rgba(255,255,255,0.08)",

        borderRadius: "50px",

        padding: "15px 30px",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        gap: "25px",

        zIndex: 9999,

        boxShadow:
          "0 8px 32px rgba(0,0,0,.3), 0 0 25px rgba(0,255,255,.05)",
      }}
    >
      {links.map((link) => (
        <a
          key={link.href}
          href={`#${link.href}`}
          className={
            active === link.href
              ? "nav-link active-link"
              : "nav-link"
          }
        >
          {link.name}
        </a>
      ))}
    </motion.nav>
  );
}

export default Navbar;