const Job = require("../../models/job");

async function allJobs(req, res) {
  try {
    const jobs = await Job.find({}).populate("user").sort({ date: -1 });
    res.json(jobs);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function getJobById(req, res) {
  try {
    const job = await Job.findById(req.params.id);
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

async function updateJob(req, res) {
  try {
    const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedJob);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function deleteJob(req, res) {
  try {
    const deletedJob = await Job.findByIdAndDelete(req.params.id);
    res.json(deletedJob);
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = {
  allJobs,
  getJobById,
  createJob,
  updateJob,
  deleteJob,
};
