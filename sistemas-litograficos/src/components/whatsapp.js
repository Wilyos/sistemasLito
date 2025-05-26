import React from "react";
import '../App.css';



const WhatsApp=()=> {
    return (
      <div className="Whatsapp-container">
        <a
          href="https://wa.me/message/JHWMGEF6WKHDI1" 
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