import React, { useState } from "react";
import Header from "./assets/components/Header/Header";
import "./App.css";
import Extension_status from "./assets/components/Extension_status/Extension_status";
import Extension_list from "./assets/components/Extension_list/Extension_list";
import data from "./data.json"


const App = () => {

  const [dataitems, setdataitems] = useState(data);

  const [background, setbackground] = useState(false);

  function changebackground() {
    setbackground(!background);
  }

 const [filter, setFilter] = useState("all");
 function allactive(){
  setFilter("all")
 }
 function active(){
  setFilter("active")
 }
 function inactive(){
  setFilter("inactive")
 }





  return (
    <div className={`Ui_background ${background ? "active" : ""}`}>
      <Header onclick={changebackground} />
      <Extension_status background={background} onallactive={allactive} oninactive={inactive} onactive={active} data={dataitems}/>
      <Extension_list background={background} filtervalue={filter} data={dataitems}/>
    </div>
  );
};

export default App;
