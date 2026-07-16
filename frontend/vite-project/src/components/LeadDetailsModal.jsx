import "./LeadDetailsModal.css";

function LeadDetailsModal({ lead, onClose }) {
    if (!lead) return null;

    return (
        <div
            className="details-overlay"
            onClick={onClose}
        >
            <div
                className="details-modal"
                onClick={(e) => e.stopPropagation()}
            >

                <div className="details-header">

                    <h2>👤 Lead Details</h2>

                    <button
                        className="close-btn"
                        onClick={onClose}
                    >
                        ✕
                    </button>

                </div>

                <div className="details-grid">

                    {/* LEFT COLUMN */}

                    <div className="left-column">

                        <div className="card">

                            <h3>📋 Lead Information</h3>

                            <div className="detail-row">
                                <span>Name</span>
                                <strong>{lead.name}</strong>
                            </div>

                            <div className="detail-row">
                                <span>Email</span>
                                <strong>{lead.email}</strong>
                            </div>

                            <div className="detail-row">
                                <span>Phone</span>
                                <strong>{lead.phone || "-"}</strong>
                            </div>

                            <div className="detail-row">
                                <span>Status</span>

                                <span className={`badge status ${lead.status}`}>
                                    {lead.status}
                                </span>

                            </div>

                            <div className="detail-row">
                                <span>Created</span>

                                <strong>
                                    {new Date(
                                        lead.createdAt
                                    ).toLocaleDateString()}
                                </strong>

                            </div>

                        </div>

                        <div className="card">

                            <h3>💬 Message</h3>

                            <p className="message-text">
                                {lead.message || "No message"}
                            </p>

                        </div>

                    </div>

                    {/* RIGHT COLUMN */}

                    <div className="right-column">

                        <div className="card">

                            <h3>🤖 AI Analysis</h3>

                            <div className="summary-box">

                                <h4>Summary</h4>

                                <p>
                                    {lead.summary || "No summary"}
                                </p>

                            </div>

                            <div className="detail-row">
                                <span>Lead Score</span>
                                <strong>{lead.leadScore}</strong>
                            </div>

                            <div className="detail-row">
                                <span>Priority</span>

                                <span className="badge priority">
                                    {lead.priority}
                                </span>

                            </div>

                            <div className="detail-row">
                                <span>Intent</span>

                                <span className="badge intent">
                                    {lead.intent}
                                </span>

                            </div>

                            <div className="detail-row">
                               <span>Budget</span>
                            <strong>{lead.budget}</strong>
                             </div>
                             
                            <div className="detail-row">
                                <span>Urgency</span>

                                <span className="badge urgency">
                                    {lead.urgency}
                                </span>

                            </div>

                            <div className="detail-row">
                                <span>Confidence</span>

                                <strong>
                                    {lead.confidence}%
                                </strong>

                            </div>

                            <div className="detail-row">
                                <span>Spam</span>

                                <span
                                    className={`badge ${
                                        lead.spam
                                            ? "spam-yes"
                                            : "spam-no"
                                    }`}
                                >
                                    {lead.spam ? "Yes" : "No"}
                                </span>

                            </div>

                        </div>

                        <div className="card">

                            <h3>💡 Recommendation</h3>

                            <p className="recommendation-text">
                                {lead.recommendation ||
                                    "No recommendation"}
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default LeadDetailsModal;