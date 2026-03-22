import React, { useState } from "react";
// import data from "../../../data.json";
import ExtensionCard from "../ExtensionCard/Extensioncard";
import "./Extension.css";

const Extension_list = ({ background, filtervalue, data }) => {
  const [items, setItems] = useState(data);


  let filtereddata = items;

  if (filtervalue === "active") {
    filtereddata = items.filter(item => item.isActive);
  } else if (filtervalue === "inactive") {
    filtereddata = items.filter(item => !item.isActive);
  }

  return (
    <section className="card">
{filtereddata.map((item, index) => (
  <ExtensionCard
    key={index}
    item={item}
    background={background}
    togglebtn={item.isActive}
  />
))}
    </section>
  );
};

export default Extension_list;
