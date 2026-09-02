import { motion } from "framer-motion";

import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaPython
} from "react-icons/fa";

import {
    SiDotnet,
    SiPostgresql,
    SiVite,
    SiRabbitmq,
    SiRedis,
    SiFastapi
} from "react-icons/si";

const skills = [
    { nombre: "HTML", nivel: 95 },
    { nombre: "CSS", nivel: 90 },
    { nombre: "JavaScript", nivel: 85 },
    { nombre: "React", nivel: 90 },
    { nombre: "Python", nivel: 95 },
    { nombre: "C#", nivel: 95 },
    { nombre: "PostgreSQL", nivel: 80 },
    { nombre: "Vite", nivel: 90 },
    { nombre: "FastAPI", nivel: 90 },
    { nombre: "Redis", nivel: 85 },
    { nombre: "RabbitMQ", nivel: 85 },
];

const techs = [
    { nombre: "HTML", icono: <FaHtml5 size={45} /> },
    { nombre: "CSS", icono: <FaCss3Alt size={45} /> },
    { nombre: "JavaScript", icono: <FaJs size={45} /> },
    { nombre: "React", icono: <FaReact size={45} className="react-spin" /> },
    { nombre: "Python", icono: <FaPython size={45} /> },
    { nombre: "C#", icono: <SiDotnet size={45} /> },
    { nombre: "PostgreSQL", icono: <SiPostgresql size={45} /> },
    { nombre: "Vite", icono: <SiVite size={45} /> },
    { nombre: "RabbitMQ", icono: <SiRabbitmq size={45} /> },
    { nombre: "Redis", icono: <SiRedis size={45} /> },
    { nombre: "FastAPI", icono: <SiFastapi size={45} /> },
];

function Skills() {
    return (
        <section id="skills">
            <h2
                style={{
                    textAlign: "center",
                    color: "#00ffff",
                    marginBottom: "50px",
                    fontSize: "2.5rem",
                }}
            >
                Habilidades
            </h2>

            <div
                style={{
                    maxWidth: "900px",
                    margin: "auto",
                }}
            >
                {skills.map((skill, index) => (
                    <div key={index} style={{ marginBottom: "25px" }}>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                marginBottom: "8px",
                                fontWeight: "600",
                            }}
                        >
                            <span>{skill.nombre}</span>
                            <span>{skill.nivel}%</span>
                        </div>

                        <div
                            style={{
                                background: "rgba(255,255,255,0.08)",
                                borderRadius: "10px",
                                overflow: "hidden",
                                height: "15px",
                            }}
                        >
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{
                                    width: `${skill.nivel}%`,
                                }}
                                transition={{
                                    duration: 1.2,
                                }}
                                viewport={{ once: true }}
                                style={{
                                    height: "100%",
                                    background:
                                        "linear-gradient(90deg,#00ffff,#38bdf8)",
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div
                style={{
                    marginTop: "60px",
                    display: "grid",
                    gridTemplateColumns:
                        "repeat(auto-fit, minmax(180px, 1fr))",
                    gap: "20px",
                    maxWidth: "1000px",
                    marginLeft: "auto",
                    marginRight: "auto",
                }}
            >
                {techs.map((tech) => (
                    <motion.div
                        key={tech.nombre}
                        whileHover={{
                            scale: 1.08,
                            y: -10,
                        }}
                        className="glass-card"
                        style={{
                            padding: "25px",
                            textAlign: "center",
                            cursor: "pointer",

                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "15px",
                        }}
                    >
                        {tech.icono}

                        <span
                            style={{
                                fontWeight: "600",
                                fontSize: "1.1rem",
                            }}
                        >
                            {tech.nombre}
                        </span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Skills;