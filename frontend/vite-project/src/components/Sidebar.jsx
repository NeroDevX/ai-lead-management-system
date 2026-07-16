import {
  FiGrid,
  FiUsers,
  FiMail,
  FiCpu,
  FiBarChart2,
  FiLink,
  FiSettings,
  FiClock,
} from "react-icons/fi";

import"./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      

      <div className="sidebar-logo">
        🤖
        <span>AI Lead CRM</span>
      </div>

      <nav className="sidebar-menu">

        <button className="sidebar-item active">
          <FiGrid />
          Dashboard
        </button>

        <button className="sidebar-item">
          <FiUsers />
          Leads
        </button>

        <button className="sidebar-item">
          <FiMail />
          Contact Form
        </button>

        <button className="sidebar-item">
          <FiCpu />
          AI Assistant
        </button>

        <button className="sidebar-item">
          <FiBarChart2 />
          Analytics
        </button>

        <button className="sidebar-item">
          <FiLink />
          Integrations
        </button>

        <button className="sidebar-item">
          <FiSettings />
          Settings
        </button>

        <button className="sidebar-item">
          <FiClock />
          Activity
        </button>

      </nav>

      <div className="sidebar-bottom">

        <div className="assistant-card">

          <h3>🤖 AI Assistant</h3>

          <p>
            AI will analyze your leads
            and suggest the best actions.
          </p>

          <button className="assistant-btn">
            Open Assistant
          </button>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;