import React, { useState } from "react";
import Header from "./assets/components/Header/Header";
import './App.css'
import Extension_status from "./assets/components/Extension_status/Extension_status";
import Extension_list from "./assets/components/Extension_list/Extension_list";

const App = () => {
  const [background, setbackground] = useState(false)
  function changebackground(){
    setbackground(!background)
  }
  return (
    <div className={`Ui_background ${background?"active":""}`}>
    
      <Header  onclick={changebackground}/>
      <Extension_status background={background}/>
      <Extension_list background={background}/>
    </div>
  );
};

export default App;
