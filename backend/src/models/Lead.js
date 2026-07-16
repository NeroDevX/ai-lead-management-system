const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    default: "",
  },

  message: {
    type: String,
    default: "",
  },

  status: {
    type: String,
    default: "new",
  },
  summary: {
    type: String,
    default: "",
},

leadScore: {
    type: Number,
    default: 0,
},

priority: {
    type: String,
    default: "",
},

intent: {
    type: String,
    default: "",
},

budget: {
    type: String,
    default: "",
},

urgency: {
    type: String,
    default: "",
},

recommendation: {
    type: String,
    default: "",
},

spam: {
    type: Boolean,
    default: false,
},

confidence: {
    type: Number,
    default: 0,
},

  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model("Lead", leadSchema);