const express = require("express");

const router = express.Router();

const videController = require("../controllers/index");

router.get("/video", videController.getVideoStream);

module.exports = router;
