import { useEffect, useState } from "react";
import "./LeadForm.css";

function LeadForm({

  initialData = {},

  onSubmit,

  submitText = "Create Lead",

}) {

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [phone, setPhone] = useState("");

  const [message, setMessage] = useState("");

 
  const handleSubmit = () => {

    onSubmit({

      name,

      email,

      phone,

      message,

    });

  };

  return (

  <div className="form-card">

    <div className="form-header">

      <h2>Add New Lead</h2>

      <p>
        Create a new customer lead
      </p>

    </div>

    <div className="lead-form">

      <input
        className="input"
        placeholder="Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <input
        className="input"
        placeholder="Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <input
        className="input"
        placeholder="Phone Number"
        value={phone}
        maxLength={15}
        onChange={(e) =>
          setPhone(
            e.target.value.replace(/\D/g, "")
          )
        }
      />

      <textarea
        className="input message-input"
        placeholder="Message"
        value={message}
        onChange={(e) =>
          setMessage(e.target.value)
        }
      />

      <div className="form-actions">

        <button
          className="add-button"
          onClick={handleSubmit}
        >
          {submitText}
        </button>

      </div>

    </div>

  </div>

);

}

export default LeadForm;