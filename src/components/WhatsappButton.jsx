import { FaWhatsapp } from "react-icons/fa";

function WhatsappButton() {
  return (
    <div
      className="whatsapp-container"
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        zIndex: 9999,
      }}
    >
      <a
        href="https://wa.me/51985203049?text=Hola%20Carlos,%20vi%20tu%20portafolio%20y%20quiero%20más%20información."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
      >
        <FaWhatsapp />
      </a>

      <div className="whatsapp-tooltip">
        Escríbeme por WhatsApp 👋
      </div>
    </div>
  );
}

export default WhatsappButton;