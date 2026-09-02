import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.div
        className="glass-card"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{
          maxWidth: "900px",
          width: "100%",
          padding: "40px",
        }}
      >
        <h2
          style={{
            color: "#00ffff",
            marginBottom: "20px",
            fontSize: "2.2rem",
          }}
        >
          Sobre mí
        </h2>

        <p
          style={{
            lineHeight: "1.9",
            fontSize: "1.1rem",
            color: "rgba(255,255,255,0.9)",
          }}
        >
          Soy desarrollador web con experiencia en tecnologías como HTML,
          CSS, JavaScript, React, Python, C# y PostgreSQL. Me apasiona crear
          aplicaciones modernas, rápidas y visualmente atractivas,
          enfocadas en ofrecer una excelente experiencia de usuario y mejorar
          la eficiencia de mis clientes en sus actividades diarias.
        </p>

        <p
          style={{
            marginTop: "20px",
            lineHeight: "1.9",
            fontSize: "1.1rem",
            color: "rgba(255,255,255,0.9)",
          }}
        >
          Disfruto aprender nuevas tecnologías, optimizar procesos y
          desarrollar soluciones que aporten valor real a empresas y
          usuarios. Siempre busco combinar diseño, rendimiento y
          funcionalidad en cada proyecto.
        </p>
      </motion.div>
    </section>
  );
}

export default About;