const express = require("express");
const router = express.Router();

const recordController = require("../controllers/recordController");
const authMiddleware = require("../middlewares/authMiddleware");

router.use(authMiddleware);

router.get("/", recordController.getRecords);
router.post("/", recordController.createRecord);

module.exports = router;