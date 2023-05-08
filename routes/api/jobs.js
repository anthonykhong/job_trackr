const express = require("express");
const router = express.Router();
const jobsCtrl = require("../../controllers/api/jobs");

router.get("/:id", jobsCtrl.getJobById);
router.post("/", jobsCtrl.createJob);

module.exports = router;
