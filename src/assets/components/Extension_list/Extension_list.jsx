import React from "react";
import data from "../../../data.json";
import ExtensionCard from "../ExtensionCard/Extensioncard";
import "./Extension.css"

const Extension_list = ({ background }) => {
  return (
    <section className="card">
      {data.map((item, index) => (
        <ExtensionCard
          key={index}
          item={item}
          background={background}
        />
      ))}
    </section>
  );
};

export default Extension_list;