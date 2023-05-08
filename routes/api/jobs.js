const express = require("express");
const router = express.Router();
const jobsCtrl = require("../../controllers/api/jobs");

router.get("/", jobsCtrl.allJobs);
router.get("/:id", jobsCtrl.getJobById);
router.post("/", jobsCtrl.createJob);
router.patch("/:id", jobsCtrl.updateJob);

module.exports = router;
