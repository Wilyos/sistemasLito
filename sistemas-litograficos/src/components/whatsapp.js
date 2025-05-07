import React from "react";
import '../App.css';



const WhatsApp=()=> {
    return (
      <div className="Whatsapp-container">
        <a
          href="https://api.whatsapp.com/send/?phone=573018567334&text&type=phone_number&app_absent=0" 
          className="whatsapp-float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src='../assets/whatsapp-icon.png'
            alt="WhatsApp"
          />
        </a>
      </div>
    );
  }

  export default WhatsApp;