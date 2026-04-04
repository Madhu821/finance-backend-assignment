const express = require("express");
const router = express.Router();

const recordController = require("../controllers/recordController");
const authMiddleware = require("../middlewares/authMiddleware");
const authorizeRoles = require("../middlewares/roleMiddleware");

router.use(authMiddleware);

// RBAC applied here
router.get(
    "/",
    authorizeRoles("ADMIN", "ANALYST", "VIEWER"),
    recordController.getRecords
)
router.post(
    "/",
    authorizeRoles("ADMIN"),
    recordController.createRecord
)


module.exports = router;