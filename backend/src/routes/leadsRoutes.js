const express = require("express");

const router = express.Router();

const {
  getLeads,
  createLeadController,
  deleteLeadController,
  updateLeadController,
  analyzeLeadController,
} = require("../controllers/leadsController");

router.get("/", getLeads);

router.post("/", createLeadController);

router.delete("/:id", deleteLeadController);

router.put("/:id", updateLeadController);

router.post("/:id/analyze", analyzeLeadController);

module.exports = router;