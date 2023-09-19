import { IconPawFilled, IconMail, IconPhone } from "@tabler/icons-react";
import "../../../styles/Footer.css";
import { SocialList } from "./components";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer className="main-footer container">
        <div>
          <div className="grid-two-columns">
            <IconPawFilled size={24} />
            <Link to="/" className="link-footer">
              Politica de privacidad
            </Link>
          </div>

          <div className="grid-two-columns">
            <IconPawFilled size={24} />
            <Link to="/" className="link-footer">
              Politica de devolución y reembolso
            </Link>
          </div>
        </div>

        <div>
          <div className="grid-two-columns">
            <IconMail size={24} />
            <p>contacto@vetspharma.pe</p>
          </div>
          <div className="grid-two-columns">
            <IconPhone size={24} />
            <p>+51 902 517</p>
          </div>
        </div>

        <SocialList />
      </footer>
    </>
  );
};
