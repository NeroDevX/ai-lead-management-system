import {
  FiEye,
  FiEdit2,
  FiTrash2,
} from "react-icons/fi";

import "./LeadTable.css";

function LeadTable({
  leads,
  updateStatus,
  deleteLead,
  onViewLead,
}) {

  return (

    <div className="table-card">

      <div className="table-toolbar">

        <h2>Leads</h2>

      </div>

      <table className="lead-table">

        <thead>

          <tr>

            <th>Name</th>

            <th>Email</th>

            <th>Phone</th>

            <th>Status</th>

            <th>Created</th>

            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {leads.map((lead) => (

            <tr key={lead._id}>

              <td>

                <div className="lead-user">

                  <div className="lead-avatar">

                    {lead.name.charAt(0).toUpperCase()}

                  </div>

                  <span>{lead.name}</span>

                </div>

              </td>

              <td>{lead.email}</td>

              <td>
                <span className="phone-cell">
                {lead.phone
  ? lead.phone.length > 8
    ? lead.phone.slice(0, 6) + "..."
    : lead.phone
  : "-"}
                </span>
                </td>

              <td>

                <span className={`status ${lead.status}`}>
{lead.status}
</span>

              </td>

              <td>

                {new Date(
                  lead.createdAt
                ).toLocaleDateString()}

              </td>

              <td>

                <div className="table-actions">

                  <button
                className="action-btn view-btn"
                 onClick={() => onViewLead(lead)}
                 title="View">
                <FiEye />
               </button>

                  <button
                    className="action-btn edit-btn"
                    onClick={() =>
                      updateStatus(
                        lead._id,
                        lead.status === "new"
                          ? "contacted"
                          : lead.status === "contacted"
                          ? "closed"
                          : "new"
                      )
                    }
                    title="Change Status"
                  >
                    <FiEdit2 />
                  </button>

                  <button
                    className="action-btn delete-btn"
                    onClick={() =>
                      deleteLead(lead._id)
                    }
                    title="Delete"
                  >
                    <FiTrash2 />
                  </button>

                </div>

              </td>

</tr>

          ))}
  </tbody>

</table>

      {leads.length === 0 && (

        <div className="empty-state">

          <h3>No leads yet</h3>

          <p>
            Click <strong>Add Lead</strong> to create your first lead.
          </p>

        </div>

      )}

    </div>

  );

}

export default LeadTable;