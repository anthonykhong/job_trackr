const express = require("express");
const router = express.Router();
const jobsCtrl = require("../../controllers/api/jobs");

router.get("/", jobsCtrl.allJobs);
router.get("/:id", jobsCtrl.getJobById);
router.post("/", jobsCtrl.createJob);
router.patch("/:id", jobsCtrl.updateJob);
router.delete("/:id", jobsCtrl.deleteJob);
router.post("/:id/favorite", jobsCtrl.addFavorite);
router.delete("/:id/favorite", jobsCtrl.removeFavorite);

module.exports = router;
