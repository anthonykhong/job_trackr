const mongoose = require("mongoos");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
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
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Job", jobSchema);
