import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const proyectos = [
  {
    titulo: "GodyKingVentas",
    descripcion:
      "Sistema web para registro y gestión de ventas con autenticación de usuarios y panel administrativo.",
    tecnologias: ["ASP.NET", "C#", "SQL Server"],
    github: "#",
    demo: "#",
    imagen: "/proyecto1.jpg",
  },
  {
    titulo: "Smart-Park",
    descripcion:
      "Sitio web tipo Marketplace de estacionamientos en la ciudad de Huamanga-Ayacucho.",
    tecnologias: ["React", "RabbitMQ", "Redis", "FastAPI", "PostgreSQL", "Python"],
    github: "#",
    demo: "https://smart-park-web-production.up.railway.app/",
    imagen: "/proyecto2.jpg",
  },
  {
    titulo: "CV Virtual",
    descripcion:
      "Sitio web moderno personal para información general de la persona y tambien métodos de contacto con la misma.",
    tecnologias: ["JavaScritp", "React", "Framer Motion", "CSS"],
    github: "#",
    demo: "",
    imagen: "/proyecto3.jpg",
  },
  {
    titulo: "GodyInfo",
    descripcion:
      "Página web netamente informativa para la empresa GodyKing SAC",
    tecnologias: ["TypeScript", "React","Vite", "CSS"],
    github: "https://github.com/caruiz1105/godyking-web",
    demo: "https://godyking-web.vercel.app/",
    imagen: "/proyecto4.jpg",
  },
];

function Projects() {
  return (
    <section id="projects">
      <h2
        style={{
          textAlign: "center",
          color: "#00ffff",
          marginBottom: "60px",
          fontSize: "2.5rem",
        }}
      >
        Proyectos
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))",
          gap: "30px",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        {proyectos.map((proyecto, index) => (
          <motion.div
            key={index}
            className="glass-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{
              y: -10,
            }}
            style={{
              overflow: "hidden",
            }}
          >
            <img
              src={proyecto.imagen}
              alt={proyecto.titulo}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
              }}
            />

            <div
              style={{
                padding: "25px",
              }}
            >
              <h3
                style={{
                  color: "#00ffff",
                  marginBottom: "15px",
                }}
              >
                {proyecto.titulo}
              </h3>

              <p
                style={{
                  lineHeight: "1.7",
                  marginBottom: "20px",
                }}
              >
                {proyecto.descripcion}
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  marginBottom: "25px",
                }}
              >
                {proyecto.tecnologias.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      background: "rgba(0,255,255,0.1)",
                      border: "1px solid rgba(0,255,255,0.3)",
                      padding: "6px 12px",
                      borderRadius: "999px",
                      fontSize: ".85rem",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "12px",
                }}
              >
                <a
                  href={proyecto.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    background: "#00ffff",
                    color: "#050816",
                    padding: "12px",
                    borderRadius: "12px",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  <FaGithub
                    style={{
                      marginRight: "8px",
                    }}
                  />
                  GitHub
                </a>

                <a
                  href={proyecto.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    border: "1px solid #00ffff",
                    color: "#00ffff",
                    padding: "12px",
                    borderRadius: "12px",
                    textAlign: "center",
                  }}
                >
                  <FaExternalLinkAlt
                    style={{
                      marginRight: "8px",
                    }}
                  />
                  Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;