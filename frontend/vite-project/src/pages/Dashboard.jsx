import { useEffect, useState } from "react";

import Layout from "../layout/Layout";

import StatsCards from "../components/StatsCards";
import LeadTable from "../components/LeadTable";
import RightPanel from "../components/RightPanel";
import AddLeadModal from "../components/AddLeadModal";
import LeadDetailsModal from "../components/LeadDetailsModal";
import"./Dashboard.css";

function Dashboard() {

  const [leads, setLeads] = useState([]);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("newest");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLead, setSelectedLead] = useState (null);



  const fetchLeads = async () => {

    const response = await fetch(
      "http://localhost:3000/leads"
    );

    const data = await response.json();

    setLeads(data);

  };



  const deleteLead = async (id) => {

    await fetch(
      `http://localhost:3000/leads/${id}`,
      {
        method: "DELETE",
      }
    );

    fetchLeads();

  };



  const updateStatus = async (
    id,
    status
  ) => {

    await fetch(
      `http://localhost:3000/leads/${id}`,
      {
        method: "PUT",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          status,
        }),
      }
    );

    fetchLeads();

  };



  useEffect(() => {

    fetchLeads();

  }, []);

  const filteredLeads = leads.filter((lead) => {

  const matchesStatus =
    filter === "all" || lead.status === filter;

  const matchesSearch =
    lead.name
      .toLowerCase()
      .includes(search.toLowerCase());

  return matchesStatus && matchesSearch;

});


const sortedLeads = [...filteredLeads].sort((a, b) => {

  if (sort === "name-asc") {
    return a.name.localeCompare(b.name);
  }

  if (sort === "name-desc") {
    return b.name.localeCompare(a.name);
  }

  if (sort === "newest") {
    return new Date(b.createdAt) - new Date(a.createdAt);
  }

  if (sort === "oldest") {
    return new Date(a.createdAt) - new Date(b.createdAt);
  }

  return 0;

});


const total = leads.length;

const newLeads = leads.filter(
  (lead) => lead.status === "new"
).length;

const contacted = leads.filter(
  (lead) => lead.status === "contacted"
).length;

const closed = leads.filter(
  (lead) => lead.status === "closed"
).length;

return (

<Layout>

    <StatsCards
        total={total}
        newLeads={newLeads}
        contacted={contacted}
        closed={closed}
        filter={filter}
        setFilter={setFilter}
    />

    <div className="dashboard-toolbar">

        <input
            className="dashboard-search"
            placeholder="Search leads..."
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
        />

        <select
            className="dashboard-sort"
            value={sort}
            onChange={(e)=>setSort(e.target.value)}
        >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="name-asc">Name A-Z</option>
            <option value="name-desc">Name Z-A</option>
        </select>

        <button
    className="dashboard-add"
    onClick={() => setIsModalOpen(true)}
>
    + Add Lead
</button>

    </div>

    <div className="dashboard-content">

        <div className="dashboard-left">

            <LeadTable
                leads={sortedLeads}
                updateStatus={updateStatus}
                deleteLead={deleteLead}
                onViewLead={setSelectedLead}
            />

        </div>

        <RightPanel
    total={total}
    newLeads={newLeads}
    contacted={contacted}
    closed={closed}
/>

    </div>

    <AddLeadModal
    isOpen={isModalOpen}
    onClose={() => setIsModalOpen(false)}
    onLeadCreated={fetchLeads}
/>

<LeadDetailsModal
    lead={selectedLead}
    onClose={() => setSelectedLead(null)}
/>

</Layout>

);

}

export default Dashboard;