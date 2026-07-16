const Lead = require("../models/Lead");
const axios = require("axios");
const getAllLeads = async () => {
  return await Lead.find();
};

const createLead = async (leadData) => {


  const newLead = await Lead.create(leadData);

  const response = await axios.post(
    "https://n8n.nerodev.online/webhook-test/new-lead",
    newLead
  );

 const ai = response.data;

newLead.summary = ai.Summary;
newLead.leadScore = ai["Lead Score"];
newLead.priority = ai.Priority;
newLead.intent = ai.Intent;
newLead.budget = ai.Budget;
newLead.urgency = ai.Urgency;
newLead.recommendation = ai.Recommend;
newLead.spam = ai.Spam;
newLead.confidence = ai.Confidence;

  await newLead.save();

  return newLead;
};

const deleteLead = async (id) => {
  return await Lead.findByIdAndDelete(id);
};

const updateLead = async (id, updatedData) => {
  return await Lead.findByIdAndUpdate(id, updatedData, {
    new: true,
  });
};

const analyzeLead = async (id) => {

  const lead = await Lead.findById(id);

  if (!lead) {
    throw new Error("Lead not found");
  }

  const response = await axios.post(
    "https://n8n.nerodev.online/webhook-test/new-lead",
    lead
  );

  return response.data;

};

module.exports = {
  getAllLeads,
  createLead,
  deleteLead,
  updateLead,
  analyzeLead,
};
