import { motion } from "framer-motion";

const experiencias = [
  {
    año: "2026",
    cargo: "Desarrollador Web y Asesor de Ventas",
    empresa: "GodyKing S.A.C.",
    descripcion: "Desarrollo de sistema para el registro de ventas y tambien asesor de Ventas en Telecomunicaciónes"
  },
  {
    año: "2026",
    cargo: "Desarrollador Web",
    empresa: "GodyKing S.A.C.",
    descripcion: "Página web informativa empresarial"
  },
  {
    año: "2026",
    cargo: "Desarrollador Web",
    empresa: "Personal",
    descripcion: "Apoyo en Sistema tipo Marketplace de Estacionamientos en la ciudad de Ayacucho."
  },
  {
    año: "2025",
    cargo: "Desarrollador web",
    empresa: "Personal",
    descripcion: "CV Virtual: Página web personal informativo para cualquier persona."
  },
];

function Experience() {
  return (
    <section id="experience">
      <h2
        style={{
          textAlign: "center",
          color: "#00ffff",
          marginBottom: "60px",
          fontSize: "2.5rem",
        }}
      >
        Experiencia
      </h2>

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            bottom: 0,
            width: "2px",
            background: "#00ffff",
          }}
        />

        {experiencias.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card"
            style={{
              width: "45%",
              marginBottom: "50px",
              marginLeft: index % 2 === 0 ? "0" : "55%",
              padding: "20px",
              borderRadius: "15px",
            }}
          >
            <h3 style={{ color: "#00ffff" }}>{exp.año}</h3>

            <h4>{exp.cargo}</h4>

            <p
              style={{
                color: "#94a3b8",
                marginTop: "5px",
              }}
            >
              {exp.empresa}
            </p>

            <p
              style={{
                marginTop: "15px",
              }}
            >
              {exp.descripcion}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;