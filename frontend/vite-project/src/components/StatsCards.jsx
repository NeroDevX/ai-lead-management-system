import "./StatsCards.css";

import {
  FiUsers,
  FiUserPlus,
  FiMessageSquare,
  FiCheckCircle,
} from "react-icons/fi";

function StatCard({
  icon,
  title,
  value,
  color,
  growth,
  active,
  onClick,
}) {
  return (
    <div
    className={`stat-card ${active ? "active" : ""}`}
    onClick={onClick}
>

      <div
        className="stat-icon"
        style={{ background: color }}
      >
        {icon}
      </div>

      <div className="stat-info">

        <h2>{value}</h2>

        <p>{title}</p>

        <span>
          ↑ {growth}% from last week
        </span>

      </div>

    </div>
  );
}

function StatsCards({
  total,
  newLeads,
  contacted,
  closed,
  filter,
  setFilter,
}) {

  return (

    <div className="stats-grid">

      <StatCard
    icon={<FiUsers />}
    title="Total Leads"
    value={total}
    color="linear-gradient(135deg,#2563eb,#38bdf8)"
    growth={12}

    active={filter === "all"}
    onClick={() => setFilter("all")}
/>

      <StatCard
    icon={<FiUserPlus />}
    title="New Leads"
    value={newLeads}
    color="linear-gradient(135deg,#7C3AED,#A78BFA)"
    growth={20}

    active={filter === "new"}
    onClick={() =>
        setFilter(
            filter === "new"
                ? "all"
                : "new"
        )
    }
/>

      <StatCard
        icon={<FiMessageSquare />}
        title="Contacted"
        value={contacted}
        color="linear-gradient(135deg,#F97316,#FB923C)"
        growth={5}
        active={filter === "contacted"}
onClick={() =>
    setFilter(
        filter === "contacted"
            ? "all"
            : "contacted"
    )
}
      />

      <StatCard
        icon={<FiCheckCircle />}
        title="Closed"
        value={closed}
        color="linear-gradient(135deg,#22C55E,#4ADE80)"
        growth={15}
        active={filter === "closed"}
onClick={() =>
    setFilter(
        filter === "closed"
            ? "all"
            : "closed"
    )
}
      />

    </div>

  );
}

export default StatsCards;