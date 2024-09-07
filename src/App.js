import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="header-info">
       <p>Mausam</p> 
      </div>
      <div className="container">
        <CurrentLocation />
      </div>
      
      <div className="footer-info">
        
        Design and Developed by{" "}
        <a target="_blank" href="https://www.linkedin.com/in/kaularu/">
          Arushi Kaul
        </a>{" "}
        | © 2023-2025 Mausam LTD | All Rights Reserved
        
      </div>
    </React.Fragment>
  );
}

export default App;