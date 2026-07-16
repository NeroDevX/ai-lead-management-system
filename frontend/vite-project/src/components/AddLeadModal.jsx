import "./AddLeadModal.css";

import LeadForm from "./LeadForm";

function AddLeadModal({

  isOpen,

  onClose,

  onLeadCreated,

}) {

  if (!isOpen) return null;

  const createLead = async (leadData) => {

    await fetch("http://localhost:3000/leads", {

      method: "POST",

      headers: {

        "Content-Type": "application/json",

      },

      body: JSON.stringify({

        ...leadData,

        status: "new",

      }),

    });

    onLeadCreated();

    onClose();

  };

  return (

    <div
      className="modal-overlay"
      onClick={onClose}
    >

      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >

        <button
    className="modal-close"
    onClick={onClose}
>
    ×
</button>

        <LeadForm

          onSubmit={createLead}

          submitText="Create Lead"

        />

      </div>

    </div>

  );

}

export default AddLeadModal;