import React, { useState } from "react";
import "./Extension_status.css";
const Extension_status = ({background,onallactive,oninactive,onactive}) => {
  // console.log(onallactive,oninactive,onactive)
  return (
    <section className="extension_ui">
      <div className={`noto-sans-noto-bold extension_ui_heading ${background?"active":""}`}>
        <h1>Extensions List</h1>
      </div>
      <div className="extension_ui_button">
        <button className={`btn-all ${background?"active":""} noto-sans-noto-regular`} onClick={onallactive}>All</button>
        <button className={`btn-active ${background?"active":""} noto-sans-noto-regular`} onClick={onactive}>Active</button>
        <button className={`btn-inactive ${background?"active":""} noto-sans-noto-regular`} onClick={oninactive}>
          Inactive
        </button>
      </div>
    </section>
  );
};

export default Extension_status;