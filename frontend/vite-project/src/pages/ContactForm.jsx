import "../App.css";
import "./ContactForm.css"
import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = async () => {
    await fetch("http://localhost:3000/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
        status: "new",
      }),
    });

    alert("Lead sent!");

    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <div className="app">
      <div className="form-card">
        <h2>Get in Touch</h2>
        <p>
          Tell us about your project and we'll get back to you shortly.
        </p>

        <div className="lead-form">

          <input
            className="input"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="input"
            type="text"
            placeholder="Phone"
            value={phone}
            maxLength={15}
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
          />

          <textarea
            className="input message-input"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button
            className="add-button"
            onClick={submitForm}
          >
            Send Message
          </button>

        </div>
      </div>
    </div>
  );
}

export default ContactForm;