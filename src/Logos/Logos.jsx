import Logo from "../Logo/Logo";
import "./Logos.css";

function Logos() {
  return (
    <div className="logos">
      <Logo
        componentClass="logo"
        imgSrc="/Images/Logo 1.png"
        imgAlt="Logo"
        link=""
      />
      <Logo
        componentClass="logo devlogo"
        imgSrc="/Images/Nourelden Rihan Profile Pic.jpg"
        imgAlt="Developer"
        link="https://nourelden-rihan.web.app"
      />
      <Logo
        componentClass="logo"
        imgSrc="/Images/Logo 2.png"
        imgAlt="Logo"
        link=""
      />
      <Logo
        componentClass="logo devlogo"
        imgSrc="/Images/Remon Magdy Profile Pic.png"
        imgAlt="Designer"
        link="https://www.linkedin.com/in/remon-magdy-223218230"
      />
      <Logo
        componentClass="logo"
        imgSrc="/Images/Logo 3.png"
        imgAlt="Logo"
        link=""
      />
    </div>
  );
}

export default Logos;
