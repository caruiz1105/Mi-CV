import { motion } from "framer-motion";

function Hero() {
    return (
        <section
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                textAlign: "center",
                minHeight: "100vh",
            }}
        >
            <motion.img
                src="/foto.jpg"
                alt="Perfil"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1 }}
                whileHover={{
                    scale: 1.05,
                }}
                style={{
                    width: "220px",
                    height: "220px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "4px solid #00ffff",
                    marginBottom: "30px",
                    boxShadow: "0 0 40px rgba(0,255,255,.5)",
                }}
            />

            <motion.h1
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                style={{
                    fontSize: "5rem",
                    color: "#00ffff",
                    marginBottom: "10px",
                }}
            >
                Carlos Ruiz
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                style={{
                    fontSize: "1.3rem",
                    color: "#cbd5e1",
                    marginBottom: "30px",
                }}
            >
                Desarrollador Web | React | Python | PostgreSQL
            </motion.p>

            <div
                style={{
                    display: "flex",
                    gap: "20px",
                    flexWrap: "wrap",
                    justifyContent: "center",
                }}
            >
                <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    style={{
                        background: "#00ffff",
                        color: "#050816",
                        padding: "15px 30px",
                        borderRadius: "12px",
                        fontWeight: "bold",
                    }}
                >
                    Contactar
                </motion.a>

                <motion.a
                    href="#about"
                    whileHover={{ scale: 1.05 }}
                    style={{
                        border: "1px solid #00ffff",
                        color: "#00ffff",
                        padding: "15px 30px",
                        borderRadius: "12px",
                    }}
                >
                    Conóceme
                </motion.a>
            </div>

            <motion.div
                animate={{
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                }}
                style={{
                    marginTop: "50px",
                    fontSize: "2rem",
                    color: "#00ffff",
                }}
            >
                ↓
            </motion.div>
        </section>
    );
}

export default Hero;