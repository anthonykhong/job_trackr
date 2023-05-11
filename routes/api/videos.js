const express = require("express");
const router = express.Router();
const videosCtrl = require("../../controllers/api/videos");

router.get("/:searchQuery", videosCtrl.fetchVideos);

module.exports = router;
