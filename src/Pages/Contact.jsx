import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Contact page</h1>
      <div className="contact_buttons">
        <button
          onClick={() => navigate("info")}
          className={location.pathname.endsWith("info") ? "active" : ""}
        >
          Contact Info
        </button>
        <button
          onClick={() => navigate("form")}
          className={location.pathname.endsWith("form") ? "active" : ""}
        >
          Contact Info
        </button>
      </div>
    </div>
  );
};

export default Contact;
