import { motion } from "framer-motion";
import {
    FaWhatsapp,
    FaLinkedin,
    FaGithub,
    FaEnvelope
} from "react-icons/fa";

function Contact() {
    return (
        <section id="contact">
            <h2
                style={{
                    textAlign: "center",
                    color: "#00ffff",
                    marginBottom: "50px",
                    fontSize: "2.5rem",
                }}
            >
                Contacto
            </h2>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                style={{
                    maxWidth: "700px",
                    margin: "auto",
                    background: "rgba(255,255,255,0.05)",
                    padding: "40px",
                    borderRadius: "20px",
                    textAlign: "center",
                }}
            >
                <h3
                    style={{
                        fontSize: "1.8rem",
                        color: "#00ffff",
                        marginBottom: "15px",
                    }}
                >
                    ¿Trabajamos juntos?
                </h3>

                <p
                    style={{
                        marginTop: "20px",
                        marginBottom: "30px",
                        lineHeight: "1.8",
                        fontSize: "1.05rem",
                    }}
                >
                    Disponible para proyectos freelance, desarrollo web,
                    automatización de procesos y oportunidades laborales.
                    Puedes contactarme mediante cualquiera de estos medios.
                </p>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "30px",
                        fontSize: "2rem",
                    }}
                >
                    <a
                        href="https://wa.me/51985203049?text=Hola%20Carlos,%20vi%20tu%20portafolio%20y%20quiero%20más%20información."
                        target="_blank"
                        rel="noopener noreferrer"
                        title="WhatsApp"
                    >
                        <FaWhatsapp />
                    </a>

                    <a
                        href="https://linkedin.com/in/carlos-ruiz-523094432/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>

                    <a
                        href="https://github.com/caruiz1105"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="GitHub"
                    >
                        <FaGithub />
                    </a>

                </div>
            </motion.div>
        </section>
    );
}

export default Contact;