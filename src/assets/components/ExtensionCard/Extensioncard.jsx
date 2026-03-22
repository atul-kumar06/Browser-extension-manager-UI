import React from "react";
import * as images from "../../images/index.js";
import "./Extensioncard.css";

const ExtensionCard = ({ item, background, onToggle }) => {
  return (
    <div className={`extension-card ${background ? "active" : ""}`}>
      <div className="extension-card__header">
        {/* Logo */}
        <img
          className="extension-card__logo"
          src={images[item.logo]}
          alt={item.name}
        />

        <div className="extension-card__title-group noto-sans-noto-bold">
          <h1>{item.name}</h1>

          <p className="extension-card__description noto-sans-noto-regular">
            {item.description}
          </p>
        </div>
      </div>

      <div className="extension-card__actions">
        {/* The Action Button */}
        <button className="btn-action" onClick={onToggle}>
          {item.isActive ? "Remove" : "Add"}
        </button>
        <label className="toggle">
          <input type="checkbox" />
          <span className={`slider ${background ? "active" : ""}`}></span>
        </label>
      </div>
    </div>
  );
};

export default ExtensionCard;
