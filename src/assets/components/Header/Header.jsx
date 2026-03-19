import React, { useState } from "react";
import { logo, iconMoon, iconSun } from "../../images";
import "./Header.css";
import Logo from "../../images/logo.svg?react"; // Note the ?react at the end
const Header = ({onclick}) => {
  const [toggle, settoggle] = useState(false);
  function darktheme() {
    settoggle(!toggle);
    onclick()
  }
  return (
    <section className={`header_ui ${toggle?'active':""}`}>
      <div className="header_ui_logo">
        <Logo className={`my-custom-logo ${toggle?'active':""}`} title="Extensions Logo" />
      </div>

      <button className={`header_ui_button ${toggle?'active':""}`} onClick={darktheme}>
        <img src={toggle?iconMoon:iconSun} alt="icon" />
      </button>
    </section>
  );
};

export default Header;
