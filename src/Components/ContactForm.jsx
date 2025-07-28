import React from "react";

const ContactForm = () => {
  return (
    <div className="contact_form">
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="tel" placeholder="Phone" />
      <input type="submit" value="Submit" />
    </div>
  );
};

export default ContactForm;
