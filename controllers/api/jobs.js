const Job = require("../../models/job");

async function getJobById(req, res) {
  try {
    const job = await Job.findById(req.params.jobId);
    res.json(job);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function createJob(req, res) {
  try {
    req.body.user = req.user._id;
    const job = await Job.create(req.body);
    res.json(job);
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = { getJobById, createJob };
