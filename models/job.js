const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["applied", "interview", "declined"],
    default: "applied",
  },
  jobType: {
    type: String,
    enum: ["on-site", "remote", "hybrid"],
    default: "remote",
  },
  contact: {
    type: String,
    required: true,
  },
  note: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  favorites: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

module.exports = mongoose.model("Job", jobSchema);
