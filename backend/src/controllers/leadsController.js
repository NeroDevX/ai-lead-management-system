const {
  getAllLeads,
  createLead,
  deleteLead,
  updateLead,
  analyzeLead,
} = require("../services/leadsService");

const getLeads = async (req, res) => {
  const leads = await getAllLeads();

  res.json(leads);
};

const createLeadController = async (req, res) => {
  const leadData = req.body;

  const newLead = await createLead(leadData);

  res.status(201).json(newLead);
};

const deleteLeadController = async (req, res) => {
  const id = req.params.id;

  const deletedLead = await deleteLead(id);

  if (!deletedLead) {
    return res.status(404).json({
      message: "Lead not found",
    });
  }

  res.json({
    message: "Lead deleted",
    deletedLead,
  });
};

const updateLeadController = async (req, res) => {
  const id = req.params.id;

  const updatedLead = await updateLead(id, req.body);

  if (!updatedLead) {
    return res.status(404).json({
      message: "Lead not found",
    });
  }

  res.json(updatedLead);
};

const analyzeLeadController = async (req, res) => {
  try {

    const result = await analyzeLead(req.params.id);

    res.json(result);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

module.exports = {
  getLeads,
  createLeadController,
  deleteLeadController,
  updateLeadController,
  analyzeLeadController,
};