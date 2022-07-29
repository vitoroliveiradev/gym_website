import "./Footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";

export const Footer = () => {
  return (
    <footer className="footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={Github} alt="imagem github" />
          <img src={Instagram} alt="imagem instagram" />
          <img src={Linkedin} alt="imagem linkedin" />
        </div>
        <div className="logo-f">
            <img src={Logo} alt="Imagem Logo" />
        </div>
      </div>
      <div className="blur footer-blur-1"></div>
      <div className="blur footer-blur-2"></div>
    </footer>
  );
};
